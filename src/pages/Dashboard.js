import React, { useContext, Suspense, lazy } from "react";
import Spinner from "../components/Spinner";
import UserContext from "../context/UserContext";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <Suspense fallback={<Spinner />}>
      <h1 onClick={logout}>logout</h1>
      <Table />
    </Suspense>
  );
};
