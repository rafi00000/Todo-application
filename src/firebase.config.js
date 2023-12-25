// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRR8bw6ZiOCGpbjEtTeJAgylY791_4-E",
  authDomain: "user-login-register-a5c5e.firebaseapp.com",
  projectId: "user-login-register-a5c5e",
  storageBucket: "user-login-register-a5c5e.appspot.com",
  messagingSenderId: "339356565841",
  appId: "1:339356565841:web:8240bfff28b36ccc801370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);