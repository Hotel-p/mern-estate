// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a3746.firebaseapp.com",
  projectId: "mern-estate-a3746",
  storageBucket: "mern-estate-a3746.appspot.com",
  messagingSenderId: "290267704480",
  appId: "1:290267704480:web:da0ef9a8d9b874a8f0edc5"

  // apiKey: process.env.VITE_FIREBASE_API_KEY,
  // authDomain: "mern-estate-a3746.firebaseapp.com",
  // projectId: "mern-estate-a3746",
  // storageBucket: "mern-estate-a3746.appspot.com",
  // messagingSenderId: "290267704480",
  // appId: "1:290267704480:web:da0ef9a8d9b874a8f0edc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);