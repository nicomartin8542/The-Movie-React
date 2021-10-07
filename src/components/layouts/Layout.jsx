import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div className="container-app">
    <SideBar />
    {/* Seccion principal - header */}
      <div>

        <main>{children}</main>
      </div>
    </div>
  </>
  );
};

export default Layout;
