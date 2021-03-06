import React, { useContext, Suspense, lazy } from "react";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import UserContext from "../context/UserContext";
import { useFormik } from "formik";
import * as Yup from "yup";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  const { logout, fetchData, currentPage } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      select: "",
    },
    validationSchema: Yup.object({
      select: Yup.number().max(9, "max number is 9")
    }),
    onSubmit: (values) => {
      let number = values.select
      fetchData(currentPage, number)
    },
  });
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex w-screen justify-end">
        <form
          onSubmit={formik.handleSubmit}
          className="mt-2 mr-24"
        >
          <input
            id="select"
            name="select"
            type="number"
            placeholder="How Many"
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.select}
          />
          {formik.touched.select && formik.errors.select ? (
            <span className="text-xs text-red-700" id="passwordHelp">{formik.errors.select}</span>
          ) : null}
        </form>
        <button onClick={logout} className="shadow mb-2 text-white  w-20 rounded py-2 px-4 bg-red-400 hover:bg-red-600 mt-2 mr-2 absolute">
          logout
        </button>
      </div>
      <Table className="mb-2" />
      <Pagination className="mt-2" />
    </Suspense>
  );
};
