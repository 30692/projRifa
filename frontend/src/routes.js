import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import SingIn from "../src/pages/SingIn";
import SingUp from "../src/pages/SingUp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/singin" exact component={SingIn} />
        <Route path="/singup" exact component={SingUp} />

        {/* <Route path="/app" component={}  /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
