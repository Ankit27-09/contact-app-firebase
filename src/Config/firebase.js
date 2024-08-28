// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALSKbz2HGvAm0HxTDJZLIe1EdTa1U5iq4",
  authDomain: "vite-contacts-611d6.firebaseapp.com",
  projectId: "vite-contacts-611d6",
  storageBucket: "vite-contacts-611d6.appspot.com",
  messagingSenderId: "958863452035",
  appId: "1:958863452035:web:b3cd861911cc8b7d4ef8b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);