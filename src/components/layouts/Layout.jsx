import React from "react";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div className="container-app">
      <main>{children}</main>
    </div>
  </>
  );
};

export default Layout;
