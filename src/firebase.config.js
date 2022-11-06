// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARnTxZiAYMQmWCFRfK6cFaTWDoOBm3_-U',
  authDomain: 'house-marketplace-app-udemy.firebaseapp.com',
  projectId: 'house-marketplace-app-udemy',
  storageBucket: 'house-marketplace-app-udemy.appspot.com',
  messagingSenderId: '376602438708',
  appId: '1:376602438708:web:3fa54d10cf9ed4f808ee61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
