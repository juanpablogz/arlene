import React from 'react'
import spinner from '../assets/spinner.svg';
import '../assets/spinner.css';
export default function Spinner () {
  return (
    <div className="flex justify-center items-center h-screen rotating z-10">
      <img src={spinner} className="size" alt="spinner" />
    </div>
  )
}
