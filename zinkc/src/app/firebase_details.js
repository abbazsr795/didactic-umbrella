// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app"; 
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLYsp9_TIBtkZyLFCPCmXIOkP27srofg",
  authDomain: "zinkc-caf8f.firebaseapp.com",
  projectId: "zinkc-caf8f",
  storageBucket: "zinkc-caf8f.appspot.com",
  messagingSenderId: "884076785268",
  appId: "1:884076785268:web:de771ce24cf423addceb21",
  measurementId: "G-Q70DRYSDD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
const db = getFirestore(app);