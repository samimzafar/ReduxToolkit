import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RoutesObj } from ".";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={RoutesObj.Root.path}
          exact
          component={RoutesObj.Root.component}
        />
        <Route
          path={RoutesObj.Home.path}
          exact
          component={RoutesObj.Home.component}
        />
        <Route
          path={RoutesObj.Details.path}
          exact
          component={RoutesObj.Details.component}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
