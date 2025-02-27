import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAstJPanhiYRslUhpETCp5HoT6LOCFmQsE",
  authDomain: "fresh-food-e5278.firebaseapp.com",
  projectId: "fresh-food-e5278",
  storageBucket: "fresh-food-e5278.firebasestorage.app",
  messagingSenderId: "403597402394",
  appId: "1:403597402394:web:e98ad9c9484d25b4a14ca3",
  measurementId: "G-VH6QZDWS4D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
