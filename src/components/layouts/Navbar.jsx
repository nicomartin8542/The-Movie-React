import React, { useContext } from "react";
import FirebaseContext from "../../firebase/context";
import { useHistory } from "react-router-dom";
import { Search } from "../search/Search";
import { formatearMayuscula } from "../../helpers/capitalizarString";

const Navbar = ({ openMenu }) => {
  const classOpen = openMenu ? "nav-open" : "nav-close";

  //Utilizo el context de firebase
  const firebaseContext = useContext(FirebaseContext);
  const { firebase, usuario } = firebaseContext;

  //Utilizo el history del react router dom
  const history = useHistory();

  //Cerrar sesion
  const logout = async () => {
    await firebase.logout();
    history.push("/");
  };

  return (
    <nav className={classOpen}>
      <Search />
      <p className="user-name">
        Bienvenido, {formatearMayuscula(usuario.displayName)}
      </p>
      <li className="logout" onClick={() => logout()}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout
      </li>
    </nav>
  );
};

export default Navbar;
