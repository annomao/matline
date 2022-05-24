// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   sendPasswordResetEmail,
   signOut,
  } from "firebase/auth";
  import {
   getFirestore,
   collection,
   addDoc,
  } from "firebase/firestore";
  

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJa9kqwu5MXxHBOi50kim4JqrJAGbUnfc",
  authDomain: "matline-fb23a.firebaseapp.com",
  projectId: "matline-fb23a",
  storageBucket: "matline-fb23a.appspot.com",
  messagingSenderId: "715451209408",
  appId: "1:715451209408:web:ae5f7a6f5c9ea7c649ff25",
  measurementId: "G-5THG5QMEZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}