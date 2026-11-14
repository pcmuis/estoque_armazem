# Controle de estoque

Sistema mobile-first em Svelte 5 + TypeScript, usando somente Firebase Authentication e Cloud Firestore. O fluxo da aplicação não chama Cloud Functions nem Cloudflare R2.

## Configuração local

Crie um arquivo `.env` na raiz:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
```

No Firebase Console, habilite **Authentication > Sign-in method > E-mail/senha** e crie o banco em **Firestore Database**. Depois, na raiz deste repositório, publique as regras e índices:

```sh
npx firebase-tools login
npx firebase-tools deploy --only firestore:rules,firestore:indexes --project estoque-armazem
```

O comando publica somente as regras e índices do Firestore; não publica nem executa Cloud Functions. Os índices compostos usados pelas consultas estão em `firestore.indexes.json`.

O frontend e o arquivo `vercel.json` também precisam ser publicados no Vercel (por exemplo, enviando as alterações para a branch conectada ao projeto). O PWA atualizará as abas abertas ao detectar a nova versão; se uma aba ainda mostrar o painel antigo após a publicação, feche e reabra o site ou faça uma atualização forçada do navegador.

## Primeiro acesso administrativo

1. Crie a conta administrativa em **Authentication > Users > Add user**, com e-mail e senha.
2. Copie o **UID** dessa conta.
3. No Firestore, crie `admins/{UID}` (o ID do documento deve ser exatamente o UID) com o campo booleano `active: true`.
4. Entre pela opção **Acesso administrativo**.

As regras não permitem que usuários criem ou alterem documentos `admins` pelo aplicativo. O cadastro inicial é feito uma vez pelo Firebase Console.

## Acesso dos mantenedores

O administrador cadastra cada mantenedor no painel e define uma senha inicial de pelo menos 6 caracteres, além das permissões de entrada e retirada. O mantenedor entra com **matrícula e senha**. Ao editar cadastros antigos sem conta de e-mail/senha do Firebase, o administrador pode provisionar a conta com uma senha inicial.

Uma matrícula sozinha não autentica uma pessoa: ela é um identificador público e qualquer pessoa poderia informar a matrícula de outra, registrar movimentações e falsificar o histórico. Por isso, a matrícula é vinculada a uma conta do Firebase Authentication e exige senha. Não há fluxo de acesso por matrícula sem senha.

Mantenedores podem consultar itens ativos e cadastrar novos materiais; o saldo inicial do cadastro, quando informado, é registrado no histórico. Eles também podem registrar entradas/retiradas conforme as permissões configuradas pelo administrador. O cadastro não permite editar materiais existentes. Cada movimentação é gravada junto com a atualização do saldo em uma transação do Firestore; as regras impedem alterar/excluir o histórico ou alterar outros dados do item. Administradores podem gerenciar itens e mantenedores, além de consultar o histórico paginado de todas as movimentações.

## Imagens

As imagens são comprimidas no navegador e armazenadas como dados no próprio documento do item, com limite de 450 KB após compressão. Não é necessário configurar Cloud Storage ou R2 para esse fluxo.

## Executar

```sh
npm install
npm run dev
```

Para executar os emuladores locais:

```sh
firebase emulators:start --only auth,firestore
```
