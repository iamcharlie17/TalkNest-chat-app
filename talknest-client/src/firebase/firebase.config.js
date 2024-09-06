// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOpvJig6Yg7Bv30GLH--ThLcfjnyYJvIM",
  authDomain: "talknest-a339a.firebaseapp.com",
  projectId: "talknest-a339a",
  storageBucket: "talknest-a339a.appspot.com",
  messagingSenderId: "944855631161",
  appId: "1:944855631161:web:817bb8038f8954fe7454e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)