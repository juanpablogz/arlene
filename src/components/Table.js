import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Spinner from "./Spinner";
export default function Table() {
  const { dataFetch, isError, isLoading } = useContext(UserContext);
  return (
    <div className="max-h-card  overflow-auto ">
      {!isLoading ? (
        Object.values(dataFetch).map((data) => (
          <div key={data.id} className=" w-full flex justify-center items-center mb-6">
            <div className=" shadow-lg h-46 mx-4 w-5/6 bg-blue-300 hover:bg-blue-400 cursor-pointer rounded-3xl sm:w-3/6 sm:mx-0">
              <div className="h-1/2 w-full flex justify-center items-baseline px-3 py-3">
                <img
                  className="object-cover h-20 w-20 rounded-full "
                  src={data.avatar}
                  alt="avatar"
                />
              </div>

              <div className="bg-white h-1/2 w-full rounded-b-2xl flex flex-col justify-around items-center pt-2 px-3 py-5">

                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-gray-500 font-bold text-sm pb-2">{`${data.first_name} ${data.last_name} ${data.id}`}</h1>
                  <h2 className="text-gray-500 text-sm pb-2">{data.email}</h2>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />

      )}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}
