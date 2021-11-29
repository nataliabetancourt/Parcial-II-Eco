import {getFirebaseConfig} from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

//Firebase config
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

//Elements from login screen
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

//Method for when login button clicked (sign in)
function login (e, ev){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "main.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

loginBtn.addEventListener("click", login);

//Open main page if user is already logged in
onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        window.location.href = "main.html"
    }
});

