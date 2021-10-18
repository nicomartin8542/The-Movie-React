import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

  const [openmenu,setOpen] = useState(false);
  const [classanimation,setClassAnimation] = useState('');

  const handleOpenMenu = () => {
    setOpen(!openmenu);
    let classAnim  = (!openmenu) ? 'animate__slideInLeft' : 'animate__slideOutLeft';
    setClassAnimation(classAnim);
  }

  const classBgLayout = (openmenu) ? 'bg-layout bg-layout-active' : 'bg-layout';
  const iconMenu = (!openmenu) ? 'fa-bars' : 'fa-times';


  return (
    <header className="d-flex">
      <div className="header__logo">
        <h1>
            ReactMovie
            <i className="fa fa-film " aria-hidden="true"></i>
        </h1>

      </div>
      <Navbar openMenu={openmenu} classanimation={classanimation}/>
      <button
        className="btn-menu"
        onClick={handleOpenMenu}
      >
      <i className={`fa ${iconMenu} fa-2x`} aria-hidden="true"></i>
      </button>
      <div className={classBgLayout}></div>
    </header>
  );
};

export default Header;
