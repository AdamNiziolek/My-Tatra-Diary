import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage";
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDUoOCZ2i8k3vX3fKBSNg9BvBp8MeWNXjE",
    authDomain: "my-tatra-diary.firebaseapp.com",
    projectId: "my-tatra-diary",
    storageBucket: "my-tatra-diary.appspot.com",
    messagingSenderId: "583880293258",
    appId: "1:583880293258:web:3eef655fcb7cef9cf6a673",
    measurementId: "G-4H8ZMSF22C"
});

export const auth = app.auth()
export const storage = app.storage()
export const db = app.firestore()
export default app
