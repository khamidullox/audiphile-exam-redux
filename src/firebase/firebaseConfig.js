// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWVolEzxkHxYDCF7X6udDNwSInXcM5k4",
  authDomain: "audiphile-fcb7c.firebaseapp.com",
  projectId: "audiphile-fcb7c",
  storageBucket: "audiphile-fcb7c.appspot.com",
  messagingSenderId: "594206024401",
  appId: "1:594206024401:web:5fea61b9d771cba1101bf0",
  measurementId: "G-H7MHFE3HEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
