// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC_ccfmjG6JqtDZfEmIqRKpjgeCnTX1is",
  authDomain: "login-auth-51module.firebaseapp.com",
  projectId: "login-auth-51module",
  storageBucket: "login-auth-51module.appspot.com",
  messagingSenderId: "379085771084",
  appId: "1:379085771084:web:793bf71172885f1dd8ffe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

