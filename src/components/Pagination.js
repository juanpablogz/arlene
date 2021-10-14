import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Pagination() {
  const { fetchData, currentPage, control, pageNumbers } = useContext(UserContext);
  // const totalPages = pageNumbers.total_pages
  const totalPages = [1,2]
  
  return (
    <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center">
      <a onClick={() => control('previus') } className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Previous Page">
        <span className="sr-only">Previous Page</span>
        <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
          <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
        </svg>
      </a>
      {totalPages.map(number => (
        <div key={number} >
          <a onClick={() => fetchData(number)} className={ number === currentPage  ? "text-color: bg-blue-300  flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 text-black hover:border-gray-300" : " flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 text-black hover:border-gray-300" }>
            {number}
          </a>
        </div>
      ))}
      <a onClick={() => control('next') }  className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Next Page">
        <span className="sr-only">Next Page</span>
        <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
          <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
        </svg>
      </a>

    </nav>
  );
};
