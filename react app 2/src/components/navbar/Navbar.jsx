import React from 'react'
import { primaryColor } from '../../helper/colors';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-screen bg-[#f5f7f6] h-[10vh] flex justify-between items-center px-4'>
            <div>logo</div>
            <div className="flex gap-10 font-primaryFont">
                <Link to="/"><div className='font-inherit cursor-pointer'>Home</div></Link>
                <Link to="/about"><div className='font-inherit cursor-pointer'>About</div></Link>
                <Link to="/services"><div className='font-inherit cursor-pointer'>Services</div></Link>
                <Link to="/contact"><div className='font-inherit cursor-pointer'>Contact</div></Link>
            </div>
        </div>
    )
}

export default Navbar
