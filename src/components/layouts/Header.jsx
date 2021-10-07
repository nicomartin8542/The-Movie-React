import React, { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {

  const [openmenu,setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!openmenu);
  }

  const classBgLayout = (openmenu) ? 'bg-layout bg-layout-active' : 'bg-layout';

  return (
    <header className="d-flex">
      <div className="header__logo">
        <h1>ReactMovie </h1>
        <i className="fa fa-film " aria-hidden="true"></i>
      </div>
      <SideBar openMenu={openmenu}/>
      <button
        className="btn-menu"
        onClick={handleOpenMenu}
      >
        <i
          className="fa fa-bars fa-2x"
          aria-hidden="true" >
        </i>
      </button>

      <div className={classBgLayout}></div>

    </header>
  );
};

export default Header;
