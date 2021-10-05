import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="container-app">
      <SideBar />

      {/* Seccion principal - header */}
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
