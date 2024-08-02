import React from 'react'
import img from '../../../img/amazingmiddle.webp'
import { NavLink } from 'react-router-dom'
function FirstMiddleAmazing() {
  return (
    <section className=' w-full h-64 my-10 flex flex-col justify-evenly items-center gap-5'>
        <NavLink
         className='w-full h-full'>
          <img src={img} className='w-full h-full rounded-lg object-fill' alt="" />
        </NavLink>
    </section>
  )
}

export default FirstMiddleAmazing