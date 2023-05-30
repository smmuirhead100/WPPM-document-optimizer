// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsqCKwegoHxi7JvfyFd1vkqJlbkN5OgBo",
  authDomain: "legaldoc-4d25f.firebaseapp.com",
  projectId: "legaldoc-4d25f",
  storageBucket: "legaldoc-4d25f.appspot.com",
  messagingSenderId: "324220533291",
  appId: "1:324220533291:web:d8aa42cfe25bc0d7e1086e",
  measurementId: "G-15KHV0T9RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const signUpClicked = collection(db, "SignUp")