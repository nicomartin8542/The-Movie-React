/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../../firebase/context";
import useForm from "../../hooks/useForm";
import validaLogin from "../../validates/validaLogin";
import AlertasLogin from "../alerts/AlertasLogin";
import { GoogleBtn } from "../botones/GoogleBtn";
import { Spinner } from "../spinner/Spinner";

export const Login = ({ history }) => {
  //State locales
  const [errorFirebase, setErrorFirebase] = useState(null);
  const [spinner, setSpinner] = useState(false);

  //Context de Firebase
  const firebaseContext = useContext(FirebaseContext);
  const { firebase, usuario } = firebaseContext;

  //State inicial para el form
  const initialState = { email: "", password: "" };

  //Custom hooks de formularios
  const { values, error, handleFormSubmit, handleInputChange, handleBlur } =
    useForm(initialState, validaLogin, logear);

  //Recupero variables del useForm
  const { email, password } = values;

  //Pregunto si el usuario esta logeado
  if (usuario) history.push("/home");

  //Logeo usuario
  async function logear() {
    setSpinner(true);
    try {
      const usuario = await firebase.login(email, password);
      setSpinner(false);
      usuario ? history.push("/home") : setErrorFirebase("Ocurrio un error");
    } catch (err) {
      console.log(err.message);
      setErrorFirebase(err.message);
      setSpinner(false);
    }
  }

  return (
    <div className="container">
      {spinner ? (
        <Spinner />
      ) : (
        <div className="container__form">
          <h2>Iniciar Sesion</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="nombre@gmail.com"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            {error.email && (
              <AlertasLogin clase="login__error_datos" msg={error.email} />
            )}

            <input
              type="password"
              autoComplete="off"
              placeholder="*********"
              name="password"
              value={password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            {error.password && (
              <AlertasLogin clase="login__error_datos" msg={error.password} />
            )}

            <button type="submit">Ingresar</button>
            <GoogleBtn />
          </form>
          <Link to="/register">Crear Usuario</Link>
        </div>
      )}

      {errorFirebase && (
        <AlertasLogin clase="login__error_firebase" msg={errorFirebase} />
      )}
    </div>
  );
};
