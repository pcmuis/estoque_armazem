# Controle de estoque

## Visão geral

Esta aplicação foi estruturada como um sistema web mobile-first para controle de estoque industrial em Svelte 5 + TypeScript, com autenticação funcional distribuída entre fluxo de funcionário por matrícula e acesso administrativo via Firebase Authentication.

A arquitetura foi organizada em módulos para:

- frontend Svelte + Vite + PWA
- integração com Firebase Authentication/Firestore/Cloud Functions
- regras Firestore bloqueando gravações de cliente
- servidor seguro para matrícula, movimentações e upload de imagem
- storage em Cloudflare R2 com integração por funções

## Stack

- Frontend: Svelte 5, TypeScript, Vite
- PWA: vite-plugin-pwa
- Banco: Cloud Firestore
- Auth: Firebase Authentication + custom claims
- Backend: Cloud Functions v2
- Storage: Cloudflare R2

## Estrutura de pastas

- src/: app do frontend
- src/lib/: serviços e tipos compartilhados
- functions/src/: backend seguro (módulo Firebase)
- firestore.rules: regras de segurança do Firestore
- firestore.indexes.json: índices recomendados
- firebase.json: configurações de emuladores e functions
- .env.example: variáveis de ambiente esperadas

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com as variáveis abaixo: 

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
```

> A aplicação exige o Firebase configurado e valido antes de abrir o sistema. Caso o arquivo não exista, a interface permanece em modo instrução e bloqueia acesso funcional.

## Firebase e funções

1. Crie o projeto no Firebase.
2. Ative Authentication, Firestore e Cloud Functions.
3. App Check é opcional; não é necessário configurar uma chave para usar o sistema.
4. Implante as funções no mesmo projeto usado pelo frontend (`estoque-armazem`):

```
npm --prefix functions install
npm --prefix functions run build
firebase deploy --project estoque-armazem --only functions
```

5. Implante as regras e índices:

```
firebase deploy --only firestore:rules,firestore:indexes
```

## Primeiro administrador

Crie a conta no Firebase Authentication. Em um ambiente confiável com Application Default Credentials autorizadas a consultar e atualizar usuários do Firebase Authentication, atribua a custom claim:

```
npm --prefix functions run set-admin-claim -- estoque-armazem admin@empresa.com
```

O usuário deve sair e entrar novamente para atualizar o token. Não atribua essa claim a partir do navegador ou de uma função pública.

## App Check e acesso web

App Check não é obrigatório neste projeto. As operações protegidas validam autenticação e perfil no backend, e o acesso por matrícula tem limitação de tentativas. `verifyEmployee` aceita chamadas do domínio `https://estoquearmazem.vercel.app`.

Se a aplicação exibir erro CORS, verifique primeiro se `verifyEmployee` existe no projeto `estoque-armazem`, região `us-central1`. Um endpoint inexistente responde 404 sem cabeçalhos CORS; publique as functions com o comando acima.

## Cloudflare R2

1. Crie o bucket no Cloudflare R2.
2. Configure as chaves de acesso com restrição mínima.
3. Defina as secrets do projeto:

```
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_ACCOUNT_ID
R2_BUCKET
R2_PUBLIC_BASE_URL
```

4. Garanta CORS e domínio público público para leitura de imagens.

## Fluxos principais

- Funcionário identifica-se pela matrícula, validada no backend.
- A API de autenticação gera custom token apenas para matrícula ativa.
- Movimentações de estoque são registradas por transação segura e não por cliente público.
- Itens podem conter campos personalizados dinâmicos e imagens no R2.
- Administradores consultam painel e histórico imutável.

## Observações de segurança

- O Firestore tem escrita bloqueada por padrão.
- Nenhuma operação crítica é aceita diretamente pelo cliente.
- Quantidades e usuário responsável são validados no backend.
- O histórico não pode ser alterado por funcionários.
- A aplicação assume autenticação e cloud services reais em produção.

## Rodar localmente

```
npm install
npm run dev
```

Para emulação do Firebase:

```
firebase emulators:start
```

## Limite de responsabilidade

Este código entrega a base funcional e segura do sistema, mas exige configuração do projeto Firebase, Cloudflare R2 e admin do projeto para funcionar em produção real.
