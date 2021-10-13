import React from "react";
import useAxios from "../hooks/useAxios";
import Spinner from "./Spinner";
export default function Table() {
  const {
    isLoading,
    isError,
    data: data,
  } = useAxios("https://reqres.in/api/users?page=2");
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 ">User</th>
            <th className="w-1/4 ">Email</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {!isLoading ? (
            Object.values(data).map((data, i) => (
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
