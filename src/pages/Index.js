import React, { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";

const Form = lazy(() => import("../components/Form"));

export const Index = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Form />
    </Suspense>
  );
};
