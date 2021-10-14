import React from "react";
import firebase from "./firebase";
import FirebaseContext from "./context";

const FirebaseState = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
