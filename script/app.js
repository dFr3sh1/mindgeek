// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVb1eMQ9VIOxmN54USQdkKx9b3bjV4Lck",
  authDomain: "mindgeek-b2e05.firebaseapp.com",
  projectId: "mindgeek-b2e05",
  storageBucket: "mindgeek-b2e05.appspot.com",
  messagingSenderId: "388666529743",
  appId: "1:388666529743:web:06b87a9cb2c9c333fb64ba",
  measurementId: "G-C6YFPW6HL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);