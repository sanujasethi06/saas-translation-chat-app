import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdfAKLvaH6rifWN4q-h-J6Vj2_2u7v58g",
  authDomain: "saas-translation-chat-ap-60aed.firebaseapp.com",
  projectId: "saas-translation-chat-ap-60aed",
  storageBucket: "saas-translation-chat-ap-60aed.appspot.com",
  messagingSenderId: "220954773674",
  appId: "1:220954773674:web:7a941499ed397619c3e8d3",
  measurementId: "G-F63S14XH7Z"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
