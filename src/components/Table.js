import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Spinner from "./Spinner";
export default function Table() {
  const { dataFetch, isError, isLoading } = useContext(UserContext);
  return (
    <div className="max-h-card  overflow-auto ">
      {!isLoading ? (
        Object.values(dataFetch).map((data) => (
          <div key={data.id} className=" w-full flex justify-center items-center mb-2">

            <div className="h-46 mx-4 w-5/6 bg-blue-300 hover:bg-blue-400 cursor-pointer rounded-3xl shadow-md sm:w-80 sm:mx-0">
              <div className="h-1/2 w-full flex justify-center items-baseline px-3 py-5">
                <h2 className="text-white">{data.email}</h2>
              </div>

              <div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center pt-2 ">

                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                  <img
                    className="object-cover h-20 w-20 rounded-full "
                    src={data.avatar}
                    alt="avatar"
                  />
                  <h1 className="text-gray-500 text-sm pb-2">{`${data.first_name} ${data.last_name} `}</h1>
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
