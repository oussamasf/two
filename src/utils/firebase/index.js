import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";

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
initializeApp(firebaseConfig);

// initiate provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectToadd) => {
  const collectionRef = await collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToadd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      console.error("utils/firebase/index.js in createUserDocumentFromAuth", e);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};
export const authListner = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const getCategoriesAndDocumets = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const catergoryMap = querySnapshot.docs.reduce((acc, doc) => {
    const { items, title } = doc.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return catergoryMap;
};
