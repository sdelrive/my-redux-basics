// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwNnF1L3dm7A4mzao2Mu4iTn_poiRUFNk",
  authDomain: "react-cursos-login.firebaseapp.com",
  projectId: "react-cursos-login",
  storageBucket: "react-cursos-login.appspot.com",
  messagingSenderId: "321515955149",
  appId: "1:321515955149:web:a0034658c8d376a2f5da84",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDb = getFirestore(firebaseApp);
