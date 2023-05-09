// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhKo62e7t9c9w9Kf5fVjvNJxXf0-_O2sg",
  authDomain: "mobi-solution.firebaseapp.com",
  projectId: "mobi-solution",
  storageBucket: "mobi-solution.appspot.com",
  messagingSenderId: "587141928027",
  appId: "1:587141928027:web:7222207725ab10ce4b1b7e",
  measurementId: "G-7BJBDEH278"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const auth = getAuth();

// export {app, auth};