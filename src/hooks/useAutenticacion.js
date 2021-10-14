import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const useAutenticacion = () => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unSuscribe = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserAuth(user) : setUserAuth(null);
      return () => unSuscribe();
    });
  }, []);

  return userAuth;
};

export default useAutenticacion;
