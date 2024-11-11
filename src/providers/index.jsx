import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const name = "moni";

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = ()=>{
    return signOut(auth)
  }

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("Logged in user", currentUser);
  //     setUser(currentUser)
  //   } else {
  //     console.log("No user logged in");
  //     setUser(null)
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    name,
    user,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
