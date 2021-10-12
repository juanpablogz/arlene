import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

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
