import React from "react";
import { Carousel } from "../carousel/Carousel";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <Carousel/>
    <div className="container-app">
      <main>{children}</main>
    </div>
  </>
  );
};

export default Layout;
