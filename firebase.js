import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAISssHmbAS2XvH-kaRknMH4SVOeo7xis0",
  authDomain: "shareit-70327.firebaseapp.com",
  projectId: "shareit-70327",
  storageBucket: "shareit-70327.firebasestorage.app",
  messagingSenderId: "741590488659",
  appId: "1:741590488659:web:c9cf7285a3ec1ecab218a6",
  measurementId: "G-38TFDN9BKK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };