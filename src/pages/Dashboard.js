import React, { useContext } from "react";
import UserContext from "../context/UserContext";
export const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <div>
      <h1 onClick={logout}>logout</h1>
    </div>
  );
};
