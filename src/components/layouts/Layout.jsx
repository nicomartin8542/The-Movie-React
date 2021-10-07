import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div className="container-app">
    {/* Seccion principal - header */}
      <div>

        <main>{children}</main>
      </div>
    </div>
  </>
  );
};

export default Layout;
