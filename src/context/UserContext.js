import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import axios from 'axios';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
  const [dataFetch, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setcurrentPage] = useState("1");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [error, setError] = useState("");
  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          history.push("/dashboard");
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
      if (authentication.user) {
        history.push("/dashboard");
        setUser(authentication.user);
      }
      localStorage.setItem("user", JSON.stringify(authentication.user));
    } catch (err) {
      console.error(err);
      setError('Invalid request')
    }
  };

  const signIn = async (email, password) => {
    try {
      const auth = getAuth();
      let authentication = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (authentication.user) {
        history.push("/dashboard");
        setUser(authentication.user);
      }
    } catch (err) {
      setError('Invalid email or password')
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const fetchData = async (page) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://reqres.in/api/users?page=${page || 1}`);
      setIsLoading(false);
      setcurrentPage(page || 1)
      setData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }
  }, [user, error]);

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    error,
    user,
    signInWithGoogle,
    registerWithEmailAndPassword,
    signIn,
    logout,
    isLoading,
    isError,
    dataFetch,
    fetchData,
    currentPage
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
