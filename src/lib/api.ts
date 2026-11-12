import {
  createUserWithEmailAndPassword, deleteUser, sendPasswordResetEmail, signInWithEmailAndPassword,
  signOut, type User
} from 'firebase/auth';
import {
  collection, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, runTransaction,
  serverTimestamp, startAfter, Timestamp, where, type QueryConstraint, type QueryDocumentSnapshot
} from 'firebase/firestore';
import { getEmployeeAccountAuth, getFirebaseServices } from './firebase';
import type { Employee, InventoryItem, StockMovement } from './types';

const employeeEmailDomain = '@staff.estoquearmazem.invalid';

function normalize(value: string) {
  return value.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function isEmployeeEmail(email: string | null) {
  return email?.endsWith(employeeEmailDomain) === true;
}

function employeeLoginEmail(matricula: string) {
  return `${normalize(matricula)}${employeeEmailDomain}`;
}

async function hashId(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function makeSearchTokens(values: string[]) {
  const tokens = new Set<string>();
  const words = values.flatMap((value) => normalize(value).split(/[^a-z0-9]+/)).filter(Boolean);
  for (const word of words) {
    for (let length = 2; length <= Math.min(word.length, 20); length++) tokens.add(word.slice(0, length));
  }
  return [...tokens].slice(0, 300);
}

function validQuantity(value: number) {
  return Number.isFinite(value) && value >= 0 && value <= 1_000_000_000 &&
    Math.abs(value * 1000 - Math.round(value * 1000)) < 0.000001;
}

export async function signInEmployee(matricula: string, password: string) {
  const { auth } = getFirebaseServices();
  const loginEmail = employeeLoginEmail(matricula);
  try {
    return await signInWithEmailAndPassword(auth, loginEmail, password);
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/invalid-email') {
      throw new Error('Matrícula ou senha incorretos.');
    }
    throw error;
  }
}

export async function signInAdmin(email: string, password: string) {
  const { auth } = getFirebaseServices();
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function loadAccessProfile(user: User) {
  const { db } = getFirebaseServices();
  if (isEmployeeEmail(user.email)) {
    const employeeAccess = await getDoc(doc(db, 'employeeAuth', user.uid));
    if (!employeeAccess.exists() || employeeAccess.get('active') !== true) {
      throw new Error('Acesso de mantenedor inativo ou não cadastrado.');
    }
    const employeeSnapshot = await getDoc(doc(db, 'employees', employeeAccess.get('employeeId')));
    if (!employeeSnapshot.exists() || employeeSnapshot.get('active') !== true ||
      employeeSnapshot.get('authUid') !== user.uid ||
      employeeSnapshot.get('loginEmail') !== user.email ||
      employeeLoginEmail(String(employeeSnapshot.get('matricula'))) !== user.email) {
      throw new Error('Acesso de mantenedor inativo ou não cadastrado.');
    }
    return {
      role: 'employee' as const,
      employee: { id: employeeSnapshot.id, ...employeeSnapshot.data() } as Employee
    };
  }

  const admin = await getDoc(doc(db, 'admins', user.uid));
  if (!admin.exists() || admin.get('active') !== true) {
    throw new Error('Esta conta não está autorizada como administradora.');
  }
  return { role: 'admin' as const, employee: null };
}

export async function listItems(search: string, cursor?: QueryDocumentSnapshot) {
  const { db } = getFirebaseServices();
  const reference = collection(db, 'items');
  const normalized = normalize(search);
  if (normalized) {
    const prefix = normalized.split(/\s+/)[0].slice(0, 20);
    if (prefix.length < 2) return { items: [] as InventoryItem[], cursor: undefined };
    const snapshot = await getDocs(query(reference, where('active', '==', true), where('searchTokens', 'array-contains', prefix), limit(40)));
    return { items: snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as InventoryItem), cursor: undefined };
  }
  const snapshot = await getDocs(query(reference, where('active', '==', true), orderBy('name'), ...(cursor ? [startAfter(cursor)] : []), limit(40)));
  return { items: snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as InventoryItem), cursor: snapshot.docs.at(-1) };
}

export async function loadAllAdminItems() {
  const { db } = getFirebaseServices();
  const snapshot = await getDocs(query(collection(db, 'items'), orderBy('name'), limit(300)));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as InventoryItem);
}

export async function loadEmployees() {
  const { db } = getFirebaseServices();
  const snapshot = await getDocs(query(collection(db, 'employees'), orderBy('name'), limit(300)));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as Employee);
}

export async function listMovements(itemId?: string, cursor?: QueryDocumentSnapshot) {
  const { db, auth } = getFirebaseServices();
  const base = collection(db, 'stockMovements');
  const user = auth.currentUser;
  const employeeEmail = isEmployeeEmail(user?.email ?? null);
  const constraints: QueryConstraint[] = [];
  if (itemId) constraints.push(where('itemId', '==', itemId));
  if (employeeEmail && user) {
    const access = await getDoc(doc(db, 'employeeAuth', user.uid));
    if (!access.exists() || access.get('active') !== true) throw new Error('Acesso de mantenedor inativo ou não cadastrado.');
    constraints.push(where('employeeId', '==', access.get('employeeId')));
  }
  const snapshot = await getDocs(query(
    base, ...constraints, orderBy('createdAt', 'desc'), ...(cursor ? [startAfter(cursor)] : []), limit(100)
  ));
  return {
    movements: snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as StockMovement),
    cursor: snapshot.docs.at(-1)
  };
}

export async function getDashboardSummary() {
  const { db } = getFirebaseServices();
  const items = collection(db, 'items');
  const movements = collection(db, 'stockMovements');
  const offset = new Date().getTimezoneOffset();
  const now = new Date(Date.now() - offset * 60_000);
  const startOfDay = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) + offset * 60_000;
  const movementBase = [where('createdAt', '>=', Timestamp.fromMillis(startOfDay))];
  const count = async (reference: ReturnType<typeof collection>, constraints: QueryConstraint[]) =>
    (await getCountFromServer(query(reference, ...constraints))).data().count;
  const [itemCount, activeItemCount, stockOutCount, lowStockCount, movementCount, todayEntries, todayWithdrawals] = await Promise.all([
    count(items, []),
    count(items, [where('active', '==', true)]),
    count(items, [where('active', '==', true), where('stockStatus', '==', 'empty')]),
    count(items, [where('active', '==', true), where('stockStatus', '==', 'low')]),
    count(movements, movementBase),
    count(movements, [...movementBase, where('movementType', '==', 'entry')]),
    count(movements, [...movementBase, where('movementType', '==', 'withdrawal')])
  ]);
  return { data: { itemCount, activeItemCount, stockOutCount, lowStockCount, movementCount, todayEntries, todayWithdrawals } };
}

export async function recordMovement(input: { itemId: string; movementType: 'entry' | 'withdrawal'; quantity: number; reason: string; idempotencyKey: string }) {
  const { auth, db } = getFirebaseServices();
  const user = auth.currentUser;
  if (!user) throw new Error('Entre no sistema para movimentar o estoque.');
  if (!validQuantity(input.quantity) || input.quantity <= 0) throw new Error('Quantidade inválida.');

  const employeeEmail = isEmployeeEmail(user.email);
  const accessRef = doc(db, 'employeeAuth', user.uid);
  const accessSnapshot = employeeEmail ? await getDoc(accessRef) : undefined;
  if (employeeEmail && (!accessSnapshot?.exists() || accessSnapshot.get('active') !== true)) {
    throw new Error('Acesso de mantenedor inativo ou não cadastrado.');
  }
  const employeeId = employeeEmail ? String(accessSnapshot?.get('employeeId') ?? '') : '';
  const employeeRef = employeeEmail ? doc(db, 'employees', employeeId) : undefined;
  const itemRef = doc(db, 'items', input.itemId);
  const movementId = `${user.uid}_${input.idempotencyKey}`;
  const movementRef = doc(db, 'stockMovements', movementId);
  const reason = typeof input.reason === 'string' ? input.reason.trim().slice(0, 250) : '';

  const quantityAfter = await runTransaction(db, async (transaction) => {
    const [itemSnapshot, movementSnapshot, employeeSnapshot] = await Promise.all([
      transaction.get(itemRef),
      transaction.get(movementRef),
      employeeRef ? transaction.get(employeeRef) : Promise.resolve(undefined)
    ]);
    if (movementSnapshot.exists()) return Number(movementSnapshot.get('quantityAfter'));
    if (!itemSnapshot.exists() || itemSnapshot.get('active') !== true) throw new Error('Item indisponível.');
    const employee = employeeSnapshot?.data();
    if (employeeEmail) {
      if (!employee || employee.authUid !== user.uid || employee.active !== true) throw new Error('Funcionário inativo.');
      if (input.movementType === 'entry' && employee.canAdd !== true) throw new Error('Sem permissão para adicionar materiais.');
      if (input.movementType === 'withdrawal' && employee.canWithdraw !== true) throw new Error('Sem permissão para retirar materiais.');
    }
    const before = Number(itemSnapshot.get('quantity'));
    const after = before + (input.movementType === 'entry' ? input.quantity : -input.quantity);
    if (after < 0) throw new Error('Estoque insuficiente para essa retirada.');
    const movement = {
      itemId: input.itemId,
      itemNameSnapshot: itemSnapshot.get('name'),
      itemCode: itemSnapshot.get('code'),
      employeeId: employeeEmail ? employeeId : user.uid,
      employeeNameSnapshot: employeeEmail ? String(employee?.name ?? '') : user.displayName ?? user.email ?? 'Administração',
      matriculaSnapshot: employeeEmail ? String(employee?.matricula ?? '') : 'ADMIN',
      movementType: input.movementType,
      quantity: input.quantity,
      quantityBefore: before,
      quantityAfter: after,
      reason,
      createdAt: serverTimestamp(),
      idempotencyKey: input.idempotencyKey
    };
    transaction.update(itemRef, {
      quantity: after,
      stockStatus: after <= 0 ? 'empty' : after <= Number(itemSnapshot.get('minimumStock')) ? 'low' : 'normal',
      updatedAt: serverTimestamp(),
      lastMovementId: movementId
    });
    transaction.set(movementRef, movement);
    return after;
  });
  return { data: { quantityAfter } };
}

export async function saveItem(input: Record<string, unknown>) {
  const { auth, db } = getFirebaseServices();
  if (!auth.currentUser) throw new Error('Entre com a conta administrativa para cadastrar itens.');
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const code = typeof input.code === 'string' ? input.code.trim() : '';
  const quantity = Number(input.quantity);
  const minimumStock = Number(input.minimumStock);
  if (!name || name.length > 120 || !code || code.length > 64 || !validQuantity(quantity) || !validQuantity(minimumStock)) {
    throw new Error('Confira nome, código e quantidades do item.');
  }
  const customFields = Array.isArray(input.customFields) ? input.customFields : [];
  if (customFields.length > 30 || customFields.some((field) => !field || typeof field !== 'object' ||
    typeof (field as { label?: unknown }).label !== 'string' || !(field as { label: string }).label.trim() ||
    typeof (field as { value?: unknown }).value !== 'string' || !(field as { value: string }).value.trim())) {
    throw new Error('Cada informação adicional precisa de nome e valor (limite de 30 campos).');
  }
  const itemId = typeof input.itemId === 'string' && input.itemId ? input.itemId : crypto.randomUUID();
  const itemRef = doc(db, 'items', itemId);
  const normalizedCode = normalize(code);
  const codeRef = doc(db, 'itemCodes', await hashId(normalizedCode));
  const prior = await getDoc(itemRef);
  const oldCodeRef = prior.exists() ? doc(db, 'itemCodes', await hashId(normalize(String(prior.get('code'))))) : undefined;
  const oldCode = prior.exists() ? normalize(String(prior.get('code'))) : '';
  const payload = {
    name, code, description: String(input.description ?? '').slice(0, 2000), category: String(input.category ?? '').slice(0, 80),
    itemType: ['piece', 'component', 'tool', 'machine'].includes(String(input.itemType)) ? input.itemType : 'piece',
    trackingMode: input.trackingMode === 'asset' ? 'asset' : 'quantity', unit: String(input.unit ?? 'UN').slice(0, 20),
    quantity, minimumStock, stockStatus: quantity <= 0 ? 'empty' : quantity <= minimumStock ? 'low' : 'normal',
    rackNumber: String(input.rackNumber ?? '').slice(0, 20), shelfNumber: String(input.shelfNumber ?? '').slice(0, 20),
    locationNote: String(input.locationNote ?? '').slice(0, 100), imageUrl: String(input.imageUrl ?? ''),
    imageObjectKey: '', customFields: customFields.map((field: { id?: string; label: string; value: string }) => ({
      id: typeof field.id === 'string' ? field.id : crypto.randomUUID(), label: field.label.trim(), value: field.value.trim()
    })),
    active: input.active !== false,
    searchTokens: makeSearchTokens([name, code, String(input.description ?? ''), ...customFields.flatMap((field: { label: string; value: string }) => [field.label, field.value])]),
    updatedAt: serverTimestamp()
  };

  await runTransaction(db, async (transaction) => {
    const itemSnapshot = await transaction.get(itemRef);
    const codeSnapshot = await transaction.get(codeRef);
    const oldCodeSnapshot = oldCodeRef && oldCodeRef.path !== codeRef.path
      ? await transaction.get(oldCodeRef)
      : undefined;
    if (codeSnapshot.exists() && codeSnapshot.get('itemId') !== itemId) throw new Error('Já existe um item com esse código.');
    if (typeof input.itemId === 'string' && !itemSnapshot.exists()) throw new Error('Item não encontrado.');
    if (itemSnapshot.exists() && Number(itemSnapshot.get('quantity')) !== quantity) {
      throw new Error('Altere o saldo por uma movimentação de estoque.');
    }
    transaction.set(itemRef, { ...payload, ...(itemSnapshot.exists() ? {} : { createdAt: serverTimestamp() }) }, { merge: true });
    transaction.set(codeRef, { itemId });
    if (!itemSnapshot.exists() && quantity > 0) {
      transaction.set(doc(db, 'stockMovements', `initial_${itemId}`), {
        itemId, itemNameSnapshot: name, itemCode: code, employeeId: auth.currentUser?.uid,
        employeeNameSnapshot: auth.currentUser?.email ?? 'Administração', matriculaSnapshot: 'ADMIN',
        movementType: 'entry', quantity, quantityBefore: 0, quantityAfter: quantity,
        reason: 'Saldo inicial do cadastro', createdAt: serverTimestamp(), idempotencyKey: `initial_${itemId}`
      });
    }
    if (oldCodeSnapshot?.exists() && oldCodeRef && oldCodeSnapshot.get('itemId') === itemId) transaction.delete(oldCodeRef);
    else if (oldCode && oldCode !== normalizedCode && oldCodeRef) transaction.delete(oldCodeRef);
  });
  return { data: { itemId } };
}

export async function saveEmployee(input: Record<string, unknown>) {
  const { auth, db } = getFirebaseServices();
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const matricula = typeof input.matricula === 'string' ? input.matricula.trim() : '';
  const active = input.active !== false;
  if (!name || name.length > 120 || !/^[a-zA-Z0-9._-]{2,32}$/.test(matricula)) throw new Error('Confira nome e matrícula.');
  const employeeId = typeof input.employeeId === 'string' && input.employeeId ? input.employeeId : doc(collection(db, 'employees')).id;
  const employeeRef = doc(db, 'employees', employeeId);
  const lookupRef = doc(db, 'employeeLookup', normalize(matricula));
  const prior = await getDoc(employeeRef);
  const priorData = prior.data();
  const oldLookupRef = priorData?.matricula ? doc(db, 'employeeLookup', normalize(String(priorData.matricula))) : undefined;
  let authUid = typeof priorData?.authUid === 'string' ? priorData.authUid : '';
  let loginEmail = typeof priorData?.loginEmail === 'string' ? priorData.loginEmail : '';
  let createdUser: User | null = null;
  const creatorAuth = getEmployeeAccountAuth();

  if (authUid && loginEmail.endsWith(employeeEmailDomain) && loginEmail !== employeeLoginEmail(matricula)) {
    throw new Error('A matrícula não pode ser alterada depois de criar o acesso. Desative este cadastro e crie outro para trocar a matrícula.');
  }
  if (!authUid || !loginEmail.endsWith(employeeEmailDomain)) {
    const password = typeof input.password === 'string' ? input.password : '';
    if (password.length < 6) throw new Error('Defina uma senha inicial com pelo menos 6 caracteres para o mantenedor.');
    const existingLookup = await getDoc(lookupRef);
    if (existingLookup.exists() && existingLookup.get('employeeId') !== employeeId) throw new Error('Essa matrícula já está cadastrada.');
    const credential = await createUserWithEmailAndPassword(creatorAuth, employeeLoginEmail(matricula), password);
    createdUser = credential.user;
    authUid = credential.user.uid;
    loginEmail = credential.user.email ?? employeeLoginEmail(matricula);
  }

  try {
    await runTransaction(db, async (transaction) => {
      const [employeeSnapshot, lookupSnapshot, oldLookupSnapshot] = await Promise.all([
        transaction.get(employeeRef),
        transaction.get(lookupRef),
        oldLookupRef && oldLookupRef.path !== lookupRef.path ? transaction.get(oldLookupRef) : Promise.resolve(undefined)
      ]);
      if (lookupSnapshot.exists() && lookupSnapshot.get('employeeId') !== employeeId) throw new Error('Essa matrícula já está cadastrada.');
      if (typeof input.employeeId === 'string' && !employeeSnapshot.exists()) throw new Error('Funcionário não encontrado.');
      const employeeData = {
        name, matricula, matriculaNormalized: normalize(matricula), active,
        canAdd: input.canAdd === true, canWithdraw: input.canWithdraw === true,
        authUid, loginEmail,
        createdAt: employeeSnapshot.exists() ? employeeSnapshot.get('createdAt') : serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      transaction.set(employeeRef, employeeData);
      transaction.set(doc(db, 'employeeAuth', authUid), { employeeId, active });
      if (priorData?.authUid && priorData.authUid !== authUid) {
        transaction.set(doc(db, 'employeeAuth', String(priorData.authUid)), { employeeId, active: false });
      }
      transaction.set(lookupRef, { employeeId, loginEmail });
      if (oldLookupSnapshot?.exists() && oldLookupRef && oldLookupRef.path !== lookupRef.path) transaction.delete(oldLookupRef);
    });
  } catch (error) {
    if (createdUser) {
      try {
        await deleteUser(createdUser);
      } catch (cleanupError) {
        throw new AggregateError([error, cleanupError], 'Não foi possível salvar o mantenedor nem remover a conta Auth criada.');
      }
    }
    throw error;
  } finally {
    if (creatorAuth.currentUser) await signOut(creatorAuth);
  }
  return { data: { employeeId } };
}

export async function uploadOptimizedImage(file: File, _itemId: string) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1000 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Não foi possível preparar a imagem.');
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const optimized = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Falha ao comprimir a imagem.')), 'image/webp', 0.72));
  if (optimized.size > 450 * 1024) throw new Error('A imagem comprimida excede 450 KB para armazenamento no Firestore.');
  const imageUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Falha ao ler a imagem.'));
    reader.onerror = () => reject(new Error('Falha ao ler a imagem.'));
    reader.readAsDataURL(optimized);
  });
  return { imageUrl, imageObjectKey: '' };
}

export async function passwordReset(email: string) {
  const { auth } = getFirebaseServices();
  return sendPasswordResetEmail(auth, email);
}

export async function signOutUser() {
  const { auth } = getFirebaseServices();
  return signOut(auth);
}
