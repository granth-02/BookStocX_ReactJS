import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChF_tzUGMHmXy2PILdABEwGTuTmei0V9w",
  authDomain: "bookstocx-ebf6a.firebaseapp.com",
  projectId: "bookstocx-ebf6a",
  storageBucket: "bookstocx-ebf6a.appspot.com",
  messagingSenderId: "757238555486",
  appId: "1:757238555486:web:934095403e2954e7fd25cf",
  measurementId: "G-8N5JD8VFTC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider}

export default db;