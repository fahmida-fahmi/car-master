// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCydSINkkgUvmOV4CC-CfgueLbGSw8AnnU",
  authDomain: "car-doctor-7d0fb.firebaseapp.com",
  projectId: "car-doctor-7d0fb",
  storageBucket: "car-doctor-7d0fb.appspot.com",
  messagingSenderId: "80738570269",
  appId: "1:80738570269:web:1381a2ae6d8b40117436f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app