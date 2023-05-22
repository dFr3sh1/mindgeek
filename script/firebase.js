// // Import the functions you need from the SDKs you need
// import { initializeApp } from "gstatic.com/firebasejs/8.4.2/firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCVb1eMQ9VIOxmN54USQdkKx9b3bjV4Lck",
//   authDomain: "mindgeek-b2e05.firebaseapp.com",
//   projectId: "mindgeek-b2e05",
//   storageBucket: "mindgeek-b2e05.appspot.com",
//   messagingSenderId: "388666529743",
//   appId: "1:388666529743:web:06b87a9cb2c9c333fb64ba",
//   measurementId: "G-C6YFPW6HL3"
// };

// firebase.initializeApp(firebaseConfig);
// var MindgeekDB = firebase.database().ref("Mindgeek");
// document.getElementById('#login').addEventListener('submit', connexion);
// var username = getElementById('username');
// var mdp = getElementById('mdp');
// var mail = getElementById('mail');

// const saveMess = (username, mdp, mail) =>{
//   var newUser = MindgeekDB.push();
//   newUser.set ({
//     username: username,
//     mdp: mdp,
//     mail: mail
//   })
// }

// function inscription(e){
//   e.preventDefault();
//   saveMess(username, mdp, mail);
// }

// function connexion(e){
//   e.preventDefault();
  
//   saveMess(username, mdp);
// }


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// console.log(app);


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
  databaseURL: "https://mindgeek-b2e05-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mindgeek-b2e05",
  storageBucket: "mindgeek-b2e05.appspot.com",
  messagingSenderId: "388666529743",
  appId: "1:388666529743:web:06b87a9cb2c9c333fb64ba",
  measurementId: "G-C6YFPW6HL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);