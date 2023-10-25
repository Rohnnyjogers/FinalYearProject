import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZSjspGldg6xTJPuuA2c0D4qOpGUA-2OA",
  authDomain: "fyproject-54d28.firebaseapp.com",
  projectId: "fyproject-54d28",
  storageBucket: "fyproject-54d28.appspot.com",
  messagingSenderId: "865359060011",
  appId: "1:865359060011:web:cda733d205c5118e8a1e6e",
  measurementId: "G-0RJNQCQ19J"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

const analytics = getAnalytics(FIREBASE_APP);