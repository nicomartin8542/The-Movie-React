import React, { useContext } from "react";
import FirebaseContext from "../../firebase/context";
import { useHistory } from "react-router-dom";
import { Search } from "../search/Search";

const Navbar = ({ openMenu }) => {
  const classOpen = openMenu ? "nav-open" : "nav-close";

  //Utilizo el context de firebase
  const firebaseContext = useContext(FirebaseContext);
  const { firebase } = firebaseContext;

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
      <li className="logout" onClick={() => logout()}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout
      </li>
    </nav>
  );
};

export default Navbar;
