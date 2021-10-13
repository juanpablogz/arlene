import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../context/UserContext";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route {...rest}>
      {!user ? <Component /> : <Redirect to="/dashboard" />}
    </Route>
  );
};
