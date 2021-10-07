import React from "react";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className="d-flex">

      <div className="header__logo">
        <h1>ReactMovie <i className="fa fa-film " aria-hidden="true"></i></h1>
      </div>
      <SideBar/>
      <button
        className="btn-menu"
      >
        <i
          className="fa fa-bars fa-2x"
          aria-hidden="true" >
        </i>
      </button>

    </header>
  );
};

export default Header;
