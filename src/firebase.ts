// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYbWIcviBdqIRseO51mpuvUttRO0WGYG4",
  authDomain: "therutvik-e7c64.firebaseapp.com",
  projectId: "therutvik-e7c64",
  storageBucket: "therutvik-e7c64.appspot.com",
  messagingSenderId: "1001445243367",
  appId: "1:1001445243367:web:b1cc09522a4d6714b3a542",
  measurementId: "G-DC58PCXZ36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Wait for Firebase Auth to initialize
auth.useDeviceLanguage();

export default app;