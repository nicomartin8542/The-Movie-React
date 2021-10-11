import React from "react";
import { Search } from "../Search";

const Navbar = ({openMenu}) => {
  const classOpen = (openMenu) ? 'nav-open' :'nav-close';

return (
    <nav className={classOpen}>
      <Search/>
      <li className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</li>
    </nav>
  );
};

export default Navbar;
