// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDihQr9LZRthgT03hMX2by1eLc7VPU5bwM",
  authDomain: "starlight-2023-c3a86.firebaseapp.com",
  projectId: "starlight-2023-c3a86",
  storageBucket: "starlight-2023-c3a86.appspot.com",
  messagingSenderId: "292000569967",
  appId: "1:292000569967:web:0418b5b4d67b3098358b9a",
  measurementId: "G-75QXG2ZBXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);