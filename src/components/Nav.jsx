import React from 'react'
import logo from "../assets/logoww.png"
const Nav = () => {
  return (
    <>
        <nav className="relative  p-4   m-auto flex justify-around items-center">
            <img className='w-48' src={logo} alt="" />
            <div className="flex gap-x-8 items-center  ">
                <small>OUR PROJECTS</small>
                <small>SCHEDULE AN INSPECTION</small>
                <small>ABOUT US</small>
                <button className=" bg-orange-500 text-white p-2 px-4 rounded-xl">My landwey</button>
            </div>
        </nav>
    </>
  )
}

export default Nav