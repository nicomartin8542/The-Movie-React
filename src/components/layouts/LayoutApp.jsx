import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../../firebase";
import Layout from "./Layout";
import Principal from "./Principal";

function LayoutApp() {
  return (
    <Layout>
      <Principal />
    </Layout>
  );
}

export default LayoutApp;
