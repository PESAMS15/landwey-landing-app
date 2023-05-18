import React from 'react'
import one from "../assets/1.png"
import two from "../assets/2.png"
import thr from "../assets/3.png"
import Img from './Img'
import Link from './Link'

const Main = () => {
  return (
    <div>
    <div className='p-8 px-20 md:flex w-full justify-between items-center block'>
        <div className='md:text-start text-center w-2/6'>
          <h1 className="text-5xl font-bold my-4">Re-inventing the Present, creating the Future</h1>
          <p className="font-semibold py-5">we make real estate investments accesible to everyone in a way that is simple, secure and profitable</p>
          <button className=" bg-orange-500 text-white p-2 px-4 rounded-xl">My landwey</button> 
        </div>
       <div className="flex gap-x-3">
       <Img img = {one} />
       <Img img ={two} />
       <Img img={thr} />
       </div>
     

    </div>
    <div className="absolute top-80 flex flex-col gap-y-3 text-white right-4 text-2xl">
            <Link icon ="icofont-facebook  bg-orange-500 p-1  rounded-full m-1" />
            <Link icon= "icofont-twitter bg-orange-500 p-1  rounded-full m-1" />
            <Link icon="icofont-instagram bg-orange-500 p-1  rounded-full m-1" />
            <Link icon="icofont-youtube bg-orange-500 p-1  rounded-full m-1" />
       </div>
    </div>
  )
}

export default Main