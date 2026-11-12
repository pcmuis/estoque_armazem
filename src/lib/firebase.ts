import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
};

export const firebaseConfigured = Object.values(config).every(Boolean);
export const app = firebaseConfigured ? (getApps().length ? getApp() : initializeApp(config)) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? initializeFirestore(app, { ignoreUndefinedProperties: true }) : null;
const employeeAccountApp = app
  ? getApps().find((firebaseApp) => firebaseApp.name === 'employee-account-provisioning') ?? initializeApp(app.options, 'employee-account-provisioning')
  : null;
export const employeeAccountAuth = employeeAccountApp ? getAuth(employeeAccountApp) : null;
const appCheckSiteKey = import.meta.env.VITE_FIREBASE_APPCHECK_SITE_KEY;
if (app && appCheckSiteKey && typeof window !== 'undefined') {
  initializeAppCheck(app, { provider: new ReCaptchaV3Provider(appCheckSiteKey), isTokenAutoRefreshEnabled: true });
}

export function getFirebaseServices() {
  if (!auth || !db) throw new Error('Configure as variáveis Firebase no arquivo .env antes de usar o sistema.');
  return { auth, db };
}

export function getEmployeeAccountAuth() {
  if (!employeeAccountAuth) throw new Error('Configure as variáveis Firebase no arquivo .env antes de cadastrar mantenedores.');
  return employeeAccountAuth;
}