// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvUUM3zSxgnM-aOk1ChCf4-4_eYbJ13dk",
  authDomain: "piantao-ceramicas.firebaseapp.com",
  projectId: "piantao-ceramicas",
  storageBucket: "piantao-ceramicas.appspot.com",
  messagingSenderId: "334313525718",
  appId: "1:334313525718:web:bbc2f2fd6e31f8fb6e5477",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
