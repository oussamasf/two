import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-uXErlfXYSY3e4deoJNuPZBszShFachA",
  authDomain: "ousfreact.firebaseapp.com",
  projectId: "ousfreact",
  storageBucket: "ousfreact.appspot.com",
  messagingSenderId: "935340006186",
  appId: "1:935340006186:web:25d1559de02b49d4a3dc53",
  measurementId: "G-CTT60C7CCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
