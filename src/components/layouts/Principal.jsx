import React from "react";
import { Fragment } from "react";
import { HomeScreen } from "../home/HomeScreen";
import { Footer } from "./Footer";

const Principal = () => {
  return (
    <Fragment>
      <HomeScreen/>
      <Footer/>
    </Fragment>
  );
};

export default Principal;
