import React, { useContext } from "react";
import FirebaseContext from "../../firebase/context";
import { useHistory } from "react-router-dom";
import { Search } from "../search/Search";
import { formatearMayuscula } from "../../helpers/capitalizarString";

const Navbar = ({ openMenu, classanimation }) => {
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

  const classOpen = openMenu
    ? `nav-open ${classanimation}`
    : `nav-close ${classanimation}`;

  const handleAnimationEnd = (e) => {
    if (e.animationName === "slideOutLeft") {
      e.target.classList.remove("animate__slideOutLeft");
    }
  };

  return (
    <nav
      className={`animate__animated ${classOpen}`}
      onAnimationEnd={handleAnimationEnd}
    >
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
