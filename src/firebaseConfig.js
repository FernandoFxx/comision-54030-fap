import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHaISxYsyjgeE7x2rYdu03ythIli-QbXY",
  authDomain: "react-comision.firebaseapp.com",
  projectId: "react-comision",
  storageBucket: "react-comision.appspot.com",
  messagingSenderId: "271315807005",
  appId: "1:271315807005:web:aff267ae3c44ab4f9b4ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
