import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const UserContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAVtq8g7QVMneLADNtNcB95SB9eZqYBBU0",
  authDomain: "arlene-6e1b0.firebaseapp.com",
  projectId: "arlene-6e1b0",
  storageBucket: "arlene-6e1b0.appspot.com",
  messagingSenderId: "231927501998",
  appId: "1:231927501998:web:ad8a72450ac3fe503b493f",
  measurementId: "G-JGR8LLCXFR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();


const UserProvider = ({ children }) => {
  const history = useHistory();
  const handleClick = () => {
    console.log('dashboard')
    history.push("/dashboard");
  };
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(result)
          const token = credential.accessToken;
          const user = result.user;
          localStorage.setItem("user", JSON.stringify(user));
          handleClick()
        })
        .catch((err) => {
          const credential = GoogleAuthProvider.credentialFromError(err);
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const auth = getAuth();
      let authentication = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(authentication);
      handleClick()
      localStorage.setItem("user", JSON.stringify(authentication.user));
    } catch (err) {
      console.error(err);
    }
  };

  const signIn= async (email, password) => {
    try {
      const auth = getAuth();
      let authentication =  await signInWithEmailAndPassword(auth, email, password);
      console.log(authentication)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user))
    } catch (error) {
      localStorage.removeItem("user")
      console.log(error)
    }
  }, [user])

  const data = {
    user,
    signInWithGoogle,
    registerWithEmailAndPassword,
    signIn,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
