import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import google from "../assets/google.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const { signInWithGoogle, signIn } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      signIn(values.email, values.password);
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-4/12"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-8"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <button
          className="shadow mb-2  w-full rounded py-2 px-4"
          onClick={signInWithGoogle}
        >
          <img src={google} className="absolute w-6" alt="spinner" />
          <p className="text-gray-700">SignIn with Google</p>
        </button>
        <button
          type="submit"
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
        >
          SignIn
        </button>
        <p>
          Don't have account? <strong onClick={handleClick}>Register</strong>
        </p>
      </form>
    </div>
  );
}
