import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/UserContext";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    let email = data.email;
    let password = data.password;
    signIn(email, password);
  };
  const {
    signInWithGoogle,
    registerUser,
    signIn,
  } = useContext(UserContext);
  return (
    <div className="flex flex-col-12 justify-center content-center">
      <div className=" ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            {...register("email")}
            placeholder="email"
          />
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            {...register("password")}
            placeholder="password"
          />

          <p>{result}</p>
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <input
            type="submit"
            className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
          />
        </form>
      </div>
    </div>
  );
};
