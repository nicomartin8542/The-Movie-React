/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../../firebase/context";
import useForm from "../../hooks/useForm";
import validaRegister from "../../validates/validaRegister";
import AlertasLogin from "../alerts/AlertasLogin";
import { Spinner } from "../spinner/Spinner";

export const Register = ({ history }) => {
  //State local
  const [spinner, setSpinner] = useState(false);

  //Context de Firebase
  const firebaseContext = useContext(FirebaseContext);
  const { firebase } = firebaseContext;

  //State inicial para el form
  const initialState = { name: "", email: "", password: "" };
  const [errorFirebase, setErrorFirebase] = useState(null);

  //Custom hooks de formularios
  const { values, error, handleFormSubmit, handleInputChange, handleBlur } =
    useForm(initialState, validaRegister, register);

  const { name, email, password } = values;

  //Logeo usuario
  async function register() {
    setSpinner(true);
    try {
      const usuario = await firebase.register(name, email, password);
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
          <h2>Registrarse</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Juan Perez"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            {error.name && (
              <AlertasLogin clase="login__error_datos" msg={error.name} />
            )}

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
          </form>

          <Link to="/">Iniciar Sesion</Link>
        </div>
      )}

      {errorFirebase && (
        <AlertasLogin clase="login__error_firebase" msg={errorFirebase} />
      )}
    </div>
  );
};
