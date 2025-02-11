import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

export const app = initializeApp(firebaseConfig);

// const urldevAuth = 'https://ita-wiki-1a841.firebaseapp.com/__/auth/handler'

export const gitHubProvider = new GithubAuthProvider();
// provider.addScope('repo');


export const auth = getAuth();
