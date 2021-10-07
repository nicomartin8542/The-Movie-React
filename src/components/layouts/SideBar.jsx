import React from "react";

const SideBar = () => {
  return (
    <aside>
      <nav className="navbar">
        <h2>Menu</h2>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">Home</li>
          <li className="navbar__menu-item">Tv</li>
          <li className="navbar__menu-item">Series</li>
        </ul>
      </nav>
      <h2>Populares CARD</h2>
      <li className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</li>
    </aside>
  );
};

export default SideBar;
