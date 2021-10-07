/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <div className="container">
      <div className="container__form">
        <h2>Registrarse</h2>
        <form>
          <input
            type="text"
            placeholder="Juan Perez"
            name="name"
            autoComplete="off"
          />

          <input
            type="email"
            placeholder="nombre@gmail.com"
            name="email"
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

        <Link to="/">Iniciar Sesion</Link>
      </div>
    </div>
  );
};
