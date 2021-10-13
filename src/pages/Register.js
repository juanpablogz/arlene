import React, { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";

const RegisterUser = lazy(() => import("../components/Register"));

export const Register = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RegisterUser />
    </Suspense>
  );
};
