import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQyBwEC4Ndp_8jmCQiP7-beKqHf22KdFY",
  authDomain: "cruise-ship-management-trs.firebaseapp.com",
  projectId: "cruise-ship-management-trs",
  storageBucket: "cruise-ship-management-trs.firebasestorage.app",
  messagingSenderId: "75437992996",
  appId: "1:75437992996:web:aee0f13057b01425663cb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);