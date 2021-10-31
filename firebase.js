import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-chjvhm_sO_xQMVM4HfVGAqcN1N4Iswo",
    authDomain: "linkedin-clone-74b73.firebaseapp.com",
    projectId: "linkedin-clone-74b73",
    storageBucket: "linkedin-clone-74b73.appspot.com",
    messagingSenderId: "305549450359",
    appId: "1:305549450359:web:f7ef1644c856687af77a72",
};

const firebaseApp = firebase.initializeApp(
    firebaseConfig
);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };