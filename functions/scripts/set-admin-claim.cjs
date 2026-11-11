const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

async function main() {
  const [projectId, email] = process.argv.slice(2);
  if (!projectId || !email) {
    throw new Error('Uso: npm run set-admin-claim -- <project-id> <email-administrativo>');
  }

  initializeApp({ credential: applicationDefault(), projectId });
  const auth = getAuth();
  const user = await auth.getUserByEmail(email);
  await auth.setCustomUserClaims(user.uid, { ...user.customClaims, role: 'admin' });
  console.log(`Permissão administrativa atribuída a ${email} no projeto ${projectId}.`);
}

main().catch((error) => {
  console.error('Não foi possível atribuir a permissão administrativa:', error);
  process.exitCode = 1;
});
