
import { initializeApp } from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGyDwIKn4p2R1e3_8K_2Yczbq4eUMc2bg",
  authDomain: "heatcheck-51699.firebaseapp.com",
  databaseURL: "https://heatcheck-51699-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "heatcheck-51699",
  storageBucket: "heatcheck-51699.appspot.com",
  messagingSenderId: "855545883466",
  appId: "1:855545883466:web:84c026f6368609b8b32fb3"
};

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export {db, ref, onValue};