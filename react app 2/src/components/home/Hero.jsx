import React from 'react'
import Navbar from '../navbar/Navbar'
import Explore from './Explore';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-screen h-[90vh] bg-[url('https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=740&t=st=1689573054~exp=1689573654~hmac=6c1ef92124aafe06ec21b92757969ea898e1acd47124df051fba1434efe8d46c')]  flex justify-center items-center flex-col gap-y-5">
      <h1 className='text-7xl font-primaryFont'>This is my Website</h1>
      <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae?</p>
      <Link to="/#next">
      <button className='outline-none border-none bg-green-200 rounded-lg p-2'>
      Get Started</button>
      </Link>
      </div>
      <div >
      <Explore/>
      </div>
    </div>
  )
}

export default Hero
