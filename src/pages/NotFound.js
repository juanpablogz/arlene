import React from 'react'
import notfoundpage from '../assets/notFound.png';
export const NotFound = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div>
        <img src={notfoundpage} alt="spinner" />
      </div>
    </div>
  )
}
