import React from "react";
import { Search } from "../Search";

const SideBar = () => {
  return (
    <aside>
      <Search/>
      <li className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</li>
    </aside>
  );
};

export default SideBar;
