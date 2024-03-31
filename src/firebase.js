import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STOREGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDApOzBw5_hg_mjLovw3mVVW7m5v5LjtoI",
  authDomain: "auth-cosmetic-shop.firebaseapp.com",
  projectId: "auth-cosmetic-shop",
  storageBucket: "auth-cosmetic-shop.appspot.com",
  messagingSenderId: "658456215316",
  appId: "1:658456215316:web:9863dfa63b4ddb600acc01"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)