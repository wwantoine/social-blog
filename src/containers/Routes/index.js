import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicLayout from "../PublicLayout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};

export default Routes;
