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
  appId: "1:757238555486:web:739d30dfcff16f54fd25cf",
  measurementId: "G-EFKR7211X7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export { auth, provider}

export default db;
