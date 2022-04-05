// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnwu2DQRAk85jCVLKg0l47z3zNJRKf3iw",
  authDomain: "wandja-9370e.firebaseapp.com",
  databaseURL: "https://wandja-9370e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wandja-9370e",
  storageBucket: "wandja-9370e.appspot.com",
  messagingSenderId: "506546880738",
  appId: "1:506546880738:web:afbb4a620bccfd26b2debb",
  measurementId: "G-LNZF1J4HFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);