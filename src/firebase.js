import { initializeApp } from 'firebase/app'
import firebaseConfig from "./configuration.js"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

console.log("Zmienne środowiskowe: ",process.env);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
