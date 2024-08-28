import React from 'react'
import { IoLogoFirebase } from "react-icons/io5";


const NavBar = () => {
  return (
    <div className = "bg-[#dafa90] my-4 text-xl font-medium gap-2 flex justify-center items-center h-[60px] m-4 rounded ">
      <IoLogoFirebase className='text-3xl'/>
      <h1> Firebase Contact App </h1>
    </div>
    
  )
}

export default NavBar;