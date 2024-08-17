// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2cIdrq2VQtLDOD0mgd1KaGHC02DuybVg",
  authDomain: "flashcard-saas-b047b.firebaseapp.com",
  projectId: "flashcard-saas-b047b",
  storageBucket: "flashcard-saas-b047b.appspot.com",
  messagingSenderId: "372492938032",
  appId: "1:372492938032:web:eb3be2722ee425346936f5",
  measurementId: "G-WTQBRNB4D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);