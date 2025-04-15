// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_z7di8T51mdy5mC0MM8sTSkDOTsEYVVc",
    authDomain: "codersh-ca.firebaseapp.com",
    projectId: "codersh-ca",
    storageBucket: "codersh-ca.firebasestorage.app",
    messagingSenderId: "80158521935",
    appId: "1:80158521935:web:778aa86b7ee75ab0f6483a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };