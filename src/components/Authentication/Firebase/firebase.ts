// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdB2zo3fFfEphHdfROAjNWjySFg2hOZk",
  authDomain: "scissors-app-22.firebaseapp.com",
  projectId: "scissors-app-22",
  storageBucket: "scissors-app-22.appspot.com",
  messagingSenderId: "925794233459",
  appId: "1:925794233459:web:c9c1a3ff8bf519bee54e06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)
export { auth, provider, db };
