import React from 'react';
import {Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center flex-col'>
      <img src="./assets/images/not.webp"/>
      <Link to="/">
      <div className='outline-none border-none bg-green-500 font-bold p-2 rounded-2xl m-4 text-white'>
      Back to Home</div>
      </Link>
    </div>
  )
}

export default Notfound
