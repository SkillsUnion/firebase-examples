import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_API_KEY,
  authDomain: import.meta.env.VITE_SOME_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_SOME_DATABASE_URL,
  projectId: import.meta.env.VITE_SOME_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SOME_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SOME_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_SOME_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const realTimeDatabase = getDatabase(firebaseApp);
