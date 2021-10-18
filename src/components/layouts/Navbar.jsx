import React from "react";
import { Search } from "../search/Search";


const Navbar = ({openMenu,classanimation}) => {

const classOpen = (openMenu) ? `nav-open ${classanimation}`  :`nav-close ${classanimation}`;

const handleAnimationEnd = (e) => {
  if(e.animationName === 'slideOutLeft'){
    e.target.classList.remove('animate__slideOutLeft');
  }
}

return (
    <nav className={`animate__animated ${classOpen}`} onAnimationEnd={handleAnimationEnd} >
      <Search/>
      <li className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</li>
    </nav>
  );
};

export default Navbar;
