import React from 'react'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className=' bg-gradient-to-l from-red-200 flex w-full  flex-col gap-0 pt-5 my-0 '>
        <div className=' text-right 2xl:mx-24 xl:mx-24 lg:mx-16 md:mx-12  md:text-sm text-xs mb-0'>            
            <p>Email: info@evidentlifesciencesfz.com</p>
        </div>
        <div className='flex md:flex-row  justify-between items-center w-full flex-col md:h-8 lg:h-10 xl:h-12 2xl:h-15  '>
             <Link className='md:mx-8 2xl:translate-y-[-1rem] 2xl:mx-10 ] lg:translate-y-[-0.75rem] md:translate-y-[-0.6rem] lg:ml-10 lg:mr-0   md:translate-x-0 ' to="/"> 
            <img src={logo} alt="Logo" width={168} height={32} className=' 2xl:h-28 2xl:w-2/3  xl:py-4  xl:w-[70%] lg:h-28 xl:h-36 lg:w-2/3 pt-2 md:object-contain md:h-20 md:w-[65%] pb-1' loading="lazy"/>
        </Link>

        <nav className=' w-full sm:bg-gradient-to-l md:bg-gradient-to-r   md:from-red-500 md:via-red-500 md:to-red-500 sm:from-red-200  '>
            <ul>
                <li className='justify-evenly flex text-sm items-center  font-bold md:font-normal 2xl:text-2xl xl:text-lg md:flex-row flex-col   '>
                    <Link to="/">Home </Link>
                    <Link to="/products">Products </Link>
                    <Link to="/global-presence">Global Presence </Link>
                    <Link to="/about">About </Link>
                    <Link to="/contact">Contact us </Link>
                </li>
            </ul>
        </nav>
        </div>
        
    </div>
  )
}

export default Navbar