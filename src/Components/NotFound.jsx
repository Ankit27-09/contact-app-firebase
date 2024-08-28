import { IoIosContacts } from "react-icons/io";




import React from 'react'

const NotFound = () => {
  return (
    <>
    <div className="m-auto h-[60vh] border-yellow-300 p-2 my-14 text-white flex items-center gap-2 justify-around">
    <IoIosContacts className="text-5xl text-green-400" />
    <h3 className="text-2xl"> Contact Not Found </h3>
    </div>
    
    </>
  )
}

export default NotFound;