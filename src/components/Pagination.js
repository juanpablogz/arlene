import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Pagination() {
  const { fetchData, currentPage, pageNumbers, dataFetch } = useContext(UserContext);
  const totalPages = []
  for (let i = 0; i < pageNumbers; i++) {
    totalPages.push(i);
  }

  return (
    <nav className="flex flex-row flex-nowrap justify-center items-center mt-3">
      {totalPages.length > 0 ?
        totalPages.map(number => (
          <div key={number} >
            <a onClick={() => fetchData(number, dataFetch.length)} className={number === currentPage ? "text-color: bg-blue-300  flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 text-black hover:bg-blue-400 cursor-pointer" : " flex w-10 h-10 mx-1 justify-center items-center rounded-full border hover:bg-blue-300 text-black cursor-pointer"}>
              {number}
            </a>
          </div>
        )) : 
        <h1>Failed with data</h1>
      }
    </nav>
  );
};
