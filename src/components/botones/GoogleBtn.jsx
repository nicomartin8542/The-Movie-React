/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import FirebaseContext from "../../firebase/context";

export const GoogleBtn = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { firebase } = firebaseContext;

  //Logear por google
  const loginGoogle = async () => {
    try {
      await firebase.loginGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="google-btn" onClick={() => loginGoogle()}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>Sign in with google</b>
      </p>
    </div>
  );
};
