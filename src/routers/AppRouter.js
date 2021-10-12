import React, {lazy} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Index } from "../pages/Index";
import Login from "../pages/Login";
export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Index} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PublicRoute path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};
