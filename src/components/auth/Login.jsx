/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <div className="container__form">
        <h2>Iniciar Sesion</h2>
        <form>
          <input
            type="text"
            placeholder="nombre@gmail.com"
            name="name"
            autoComplete="off"
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="*********"
            name="password"
          />

          <button type="submit">Ingresar</button>
        </form>

        <Link to="/logout">Crear usaurio</Link>
      </div>
    </div>
  );
};
