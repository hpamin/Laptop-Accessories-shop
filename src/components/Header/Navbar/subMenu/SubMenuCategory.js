import React from 'react'
import { NavLink } from 'react-router-dom'

function SubMenuCategory() {
  return (
    <div className='w-52 h-fit bg-[#F0F0F1] rounded-xl px-2 py-3 justify-center items-start flex-col absolute right-0 top-[41px] gap-2 hidden group-hover:flex cursor-auto z-50'>
        <NavLink className='text-black cursor-pointer'> مادر برد </NavLink>
        <div className='w-11/12 h-[1px] bg-[#30AEAB]' />
        <NavLink className='text-black cursor-pointer'> مادر برد </NavLink>
        <div className='w-11/12 h-[1px] bg-[#30AEAB]' />
        <NavLink className='text-black cursor-pointer'> مادر برد </NavLink>
    </div>
  )
}

export default SubMenuCategory