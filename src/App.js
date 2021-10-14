import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import LayoutApp from "./components/layouts/LayoutApp";
import FirebaseState from "./firebase/FirebaseState";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <FirebaseState>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={LayoutApp} />
          </FirebaseState>
        </Switch>
      </Router>
    </>
  );
}

export default App;
