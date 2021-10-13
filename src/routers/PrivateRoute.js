import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../context/UserContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  // console.log(user)
  return (
    <Route {...rest}>
      {user ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
