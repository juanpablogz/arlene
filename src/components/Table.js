import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Spinner from "./Spinner";
export default function Table () {
const { logout, dataFetch, isError , isLoading } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center h-4/5 w-screen">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-blue-200 text-center text-xs font-bold">User</th>
            <th className="w-1/4  px-5 py-3 border-b-2 border-gray-200 bg-blue-200 text-center text-xs font-bold">Email</th>
          </tr>
        </thead>

        <tbody>
          {!isLoading ? (
            Object.values(dataFetch).map((data) => (
              <tr key={data.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={data.avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {`${data.first_name}  ${data.last_name}`}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.email}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <Spinner />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isError && <div>Error fetching data.</div>}
      
    </div>
  );
}
