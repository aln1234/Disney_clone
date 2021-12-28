// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getFirestorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNfCOiXobsqsHPkpvR3dywyoUm64Iq5HA",
  authDomain: "micro-a8695.firebaseapp.com",
  databaseURL: "https://micro-a8695.firebaseio.com",
  projectId: "micro-a8695",
  storageBucket: "micro-a8695.appspot.com",
  messagingSenderId: "317260565402",
  appId: "1:317260565402:web:bdc2e6066a9c10210a0823"
};

// Initialize Firebase
const app = !getApps().length  ? initializeApp(firebaseConfig) : getApp();
const db= getFirestore();

const storage = getStorage();

export{ app,db,storage}