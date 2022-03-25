import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBZF5Rmc3CL8vAz5hrr9RxKwQtQEXqJKb0",
    authDomain: "house-market-place-69626.firebaseapp.com",
    projectId: "house-market-place-69626",
    storageBucket: "house-market-place-69626.appspot.com",
    messagingSenderId: "462592402003",
    appId: "1:462592402003:web:7a7f3a22596c4dc2505ca6"
};

initializeApp(firebaseConfig)
export const db = getFirestore()