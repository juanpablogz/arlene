import React, { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";

const SignIn = lazy(() => import("../components/SignIn"));

export const Login = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <SignIn />
    </Suspense>
  );
};
