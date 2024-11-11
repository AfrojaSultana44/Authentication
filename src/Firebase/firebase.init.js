import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_bHjefM0OrqFp2ogqILsgCudTEkon3Ho",
  authDomain: "authentication-c5625.firebaseapp.com",
  projectId: "authentication-c5625",
  storageBucket: "authentication-c5625.firebasestorage.app",
  messagingSenderId: "48910392728",
  appId: "1:48910392728:web:3e2232c74ba88c020e5fed",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;