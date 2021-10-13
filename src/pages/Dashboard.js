import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import Spinner from "../components/Spinner";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Table />
    </Suspense>
  );
};
