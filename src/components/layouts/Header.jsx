import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import logo from './logo.png';

const Header = () => {

  const [openmenu,setOpen] = useState(false);
  const [classanimation,setClassAnimation] = useState('');

   useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
          window.removeEventListener('scroll', isSticky);
      };
  });

  const isSticky = (e) => {
      const header = document.querySelector('.header');
      const scrollTop = window.scrollY;
      scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };


  const handleOpenMenu = () => {
    setOpen(!openmenu);
    let classAnim  = (!openmenu) ? 'animate__slideInLeft' : 'animate__slideOutLeft';
    setClassAnimation(classAnim);
  }

  const classBgLayout = (openmenu) ? 'bg-layout bg-layout-active' : 'bg-layout';
  const iconMenu = (!openmenu) ? 'fa-bars' : 'fa-times';


  return (
    <header className="header d-flex">
      <div className="header__logo">
        {/* <img src={logo} alt="asd" /> */}
        <h5>ReactMovie<span>.</span></h5>
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
