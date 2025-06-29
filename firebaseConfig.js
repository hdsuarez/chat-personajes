// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfg9JMDR3BmR8SwXGMMqGLxBRKnu2NBBU",
  authDomain: "nuevochat-985ca.firebaseapp.com",
  projectId: "nuevochat-985ca",
  storageBucket: "nuevochat-985ca.firebasestorage.app",
  messagingSenderId: "107426269509",
  appId: "1:107426269509:web:fd0eb3bc5282a7888e962c",
  measurementId: "G-X9L9PK0E0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);