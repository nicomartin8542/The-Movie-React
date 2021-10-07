import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Logout } from "./components/auth/Logout";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
