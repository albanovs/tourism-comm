// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpDtfTFCSdd_ZbiUQn0unF-MJbU3Py9nM",
    authDomain: "tourism-park-9e352.firebaseapp.com",
    projectId: "tourism-park-9e352",
    storageBucket: "tourism-park-9e352.appspot.com",
    messagingSenderId: "479907455833",
    appId: "1:479907455833:web:ca122aee9f7fb5e5f1a248"
};

const app = initializeApp(firebaseConfig);
let firestore = firestore()
let db = app.firestore()