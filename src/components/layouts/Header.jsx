import React from "react";

const Header = () => {
  return (
    <header className="d-flex">

      <div className="header__logo">
        <h1>ReactMovie <i className="fa fa-film " aria-hidden="true"></i></h1>
      </div>
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
