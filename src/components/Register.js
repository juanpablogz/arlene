import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import google from "../assets/google.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const { signInWithGoogle, registerWithEmailAndPassword, error } =
    useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must have 6 characters or more").required("Required"),
      repeatPassword: Yup.string().min(6, "Must have 6 characters or more").required("Required").oneOf([Yup.ref("password")], "Password not match"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      registerWithEmailAndPassword(values.email, values.password);
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
          type="text"
          placeholder="email"
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4 mt-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-xs text-red-700" id="passwordHelp">{formik.errors.email}</span>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4 mt-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="text-xs text-red-700" id="passwordHelp">{formik.errors.password}</span>
        ) : null}

        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="repeat Password"
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4 mt-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <span className="text-xs text-red-700" id="passwordHelp">{formik.errors.repeatPassword}</span>
        ) : null}

        <button
          className="shadow mb-2  w-full rounded py-2 px-4 bg-white-400 hover:bg-gray-100 mt-2"
          onClick={signInWithGoogle}
        >
          <img src={google} className="absolute w-6 " alt="Google" />

          <p className="text-gray-700">Register with Google</p>
        </button>
        {error}
        <button
          type="submit"
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
        >
          Register
        </button>
        <p>
          Don't have account?
          <strong className="cursor-pointer ml-1" onClick={() => history.push("/login")}>Login</strong>
        </p>
      </form>
    </div>
  );
}
