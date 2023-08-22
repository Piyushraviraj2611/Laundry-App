
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcS07mZL3WJ97qFW4dUwq16cEL1HIu9ac",
  authDomain: "laundry-app-6abd2.firebaseapp.com",
  projectId: "laundry-app-6abd2",
  storageBucket: "laundry-app-6abd2.appspot.com",
  messagingSenderId: "949564386659",
  appId: "1:949564386659:web:0402009a8b6982ac6b3756",
  measurementId: "G-ES8BXK02WX"
};


//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};