// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33AuO-amGQoK23cVnC-qaZN6fB8ZiuCE",
  authDomain: "login1-bc897.firebaseapp.com",
  projectId: "login1-bc897",
  storageBucket: "login1-bc897.appspot.com",
  messagingSenderId: "1057622695509",
  appId: "1:1057622695509:web:1b48d11d7032d0678c7edc",
  measurementId: "G-2SNSQJ3KRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth = getAuth();