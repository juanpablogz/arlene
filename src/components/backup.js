import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/UserContext";
import google from "../assets/google.png";
export default function Form({ data }) {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = (data) => {
    let email = data.email;
    let password = data.password;
    signIn(email, password);
  };
  console.log(data);
  const { signInWithGoogle, registerUser, signIn } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center"></h1>
        {data.data.map((d) => (
          <input
            type="text"
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
            {...register("email")}
            placeholder="email"
          />
        ))}
        <p>{result}</p>
        <button
          className="shadow mb-2  w-full rounded py-2 px-4"
          onClick={signInWithGoogle}
        >
          <img src={google} className="absolute" alt="spinner" />
          <p className="text-gray-700">Register with Google</p>
        </button>

        <input
          type="submit"
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
        />

        <p>
          Don't have account? <strong>Register</strong>
        </p>
      </form>
    </div>
  );
}
