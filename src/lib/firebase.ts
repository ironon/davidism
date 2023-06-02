// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8uxiTVL-ZkvCshcPJKMy15_7dhIcv_qo",
  authDomain: "davidism-110a4.firebaseapp.com",
  projectId: "davidism-110a4",
  storageBucket: "davidism-110a4.appspot.com",
  messagingSenderId: "245189688947",
  appId: "1:245189688947:web:f06d003eb29e0a8e337406",
  measurementId: "G-K00G11GZF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);