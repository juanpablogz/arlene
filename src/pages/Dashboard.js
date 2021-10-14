import React, { useContext, Suspense, lazy } from "react";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import UserContext from "../context/UserContext";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex w-screen justify-end">
        <button onClick={logout} className="shadow mb-2 text-white  w-20 rounded py-2 px-4 bg-red-400 hover:bg-red-600 mt-2 mr-2">
          logout
        </button>
      </div>
      <Table className="mb-2" />
      <Pagination className="mt-2"/>
    </Suspense>
  );
};
