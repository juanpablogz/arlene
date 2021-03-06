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
const UserContext = createContext();
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UserProvider = ({ children }) => {
  const history = useHistory();
  const [dataFetch, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [error, setError] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          history.push("/dashboard");
        })
        .catch((err) => {
          setError(err)
          console.log(err);
        });
    } catch (err) {
      console.error('Invalid request');
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
        console.log(error);
      });
  };

  const fetchData = async (page = 0, totalPages) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://reqres.in/api/users?page=1`);
      const response2 = await axios.get(`https://reqres.in/api/users?page=2`);
      var res = response.data.data.concat(response2.data.data);
      setIsLoading(false);
      chunk(res, (totalPages), page)
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const chunk = async (response, totalPages, page) => {
    try {
      const res = [];
      while (response.length > 0) {
        const chunk = response.splice(0, totalPages);
        res.push(chunk);
      }
      if (res[page] != null) {
        setData(res[page])
      } else {
        setData(dataFetch)
      }
      setcurrentPage(page)
      setPageNumbers(res.length)
    } catch (error) {
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
    fetchData(0, 5);
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
    currentPage,
    pageNumbers
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
