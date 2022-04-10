// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAl6GTMldvjyMml5qkqLGbuWL-ZcrHy44",
  authDomain: "ema-john-simple-3f453.firebaseapp.com",
  projectId: "ema-john-simple-3f453",
  storageBucket: "ema-john-simple-3f453.appspot.com",
  messagingSenderId: "850425968477",
  appId: "1:850425968477:web:835b18f1ee619f830b9ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
