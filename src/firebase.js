// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAXhutilklwI8iZITxy1CMkbSM6SqCaBAk",
  authDomain: "khan-pets.firebaseapp.com",
  projectId: "khan-pets",
  storageBucket: "khan-pets.appspot.com",
  messagingSenderId: "132294249588",
  appId: "1:132294249588:web:956fbf1009a4278cf25521",
  measurementId: "G-4X0VQ40LYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage(app)
const analytics = getAnalytics(app);