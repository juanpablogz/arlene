import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";
import { UserProvider } from "../context/UserContext";
export const AppRouter = () => {
  return (
    <Router>
      <UserProvider>
          <Switch>
            <PublicRoute exact path="/" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PublicRoute path="/*" component={NotFound} />
          </Switch>
      </UserProvider>
    </Router>
  );
};
