import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKamNywX9M5p5rcaGAHCcOl9-97jkU73w",
  authDomain: "crwn-clothing-db-cde72.firebaseapp.com",
  projectId: "crwn-clothing-db-cde72",
  storageBucket: "crwn-clothing-db-cde72.appspot.com",
  messagingSenderId: "707676999952",
  appId: "1:707676999952:web:f80617e3ffdff8d2989595",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
