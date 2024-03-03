import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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