import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};
