import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJlBosZi4tE4X4CbvQK2sQTgASCGuEbOM",
    authDomain: "thefinalchallenge-fdcfe.firebaseapp.com",
    projectId: "thefinalchallenge-fdcfe",
    storageBucket: "thefinalchallenge-fdcfe.appspot.com",
    messagingSenderId: "131415275741",
    appId: "1:131415275741:web:070ba75b900ed11ed8c334",
    measurementId: "G-M7Z5SQ7CSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);



export const db = getFirestore(app);
export const subscriptions = [];
