import React, { useContext } from 'react'
import { MdExpandMore } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdClear } from "react-icons/md";
import { UserContext } from '../../context/UserProvider';
function HamberMenuShow() {
    
    const {menuShow, setmenuShow} = useContext(UserContext)

    const HamMenuLink = [
        {
            id: 0,
            title: "شگفت انگیزها",
            to: "amazing",
        },
        {
            id: 1,
            title: "تخفیفات ویژه",
            to: "/",
        },
        {
            id: 2,
            title: "پرفروش ترین ها",
            to: "/",
        },
        {
            id: 3,
            title: "لپتاپ",
            to: "/",
        },
        {
            id: 4,
            title: "موبایل",
            to: "/",
        },
        {
            id: 5,
            title: "مادربرد",
            to: "/",
        },
        {
            id: 6,
            title: "لوازم جانبی موبایل",
            to: "/",
        },
        {
            id: 7,
            title: "لوازم جانبی لپتاپ",
            to: "/",
        },
    ]
  return (
    <div className={`${menuShow === true ? 'right-0' : 'duration-1000 -right-[100%]'} w-full h-[100vh] fixed top-0 z-50 lg:hidden`} >

        <div className={`w-full h-full bg-black bg-opacity-35 absolute top-0 left-0 ${menuShow === true ? 'opacity-100' : 'opacity-0' }`}  onClick={() => setmenuShow(false)} />

        <div className={`${menuShow === true ? 'right-0' : '-right-[200%]'}  duration-300 w-2/5 h-full bg-[#F0F0F1] shadow-lg px-2 absolute max-sm:w-3/5`} >
            <div className='w-full h-16 flex items-center justify-between'>
                <MdClear className='cursor-pointer' size={30} onClick={() => setmenuShow(false)} />
                <h2 className='text-[#30AEAB] text-xl font-bold font-sans max-sm:text-lg'>digi<span className='text-black font-sans'>HPamin</span> </h2>
            </div>
            <div className='w-full h-full flex flex-col gap-7 mt-10'>
                <div className='flex justify-center items-center flex-col gap-3 '>
                    <NavLink className='w-full flex items-center justify-between font-bold text-xl duration-100 max-sm:text-base hover:text-[#30AEAB]' to='admin-panel'> 
                        فروشنده شو 
                        <MdExpandMore size={25} className='rotate-90' />
                    </NavLink>
                    <div className='w-full h-[2px]'>
                        <div className='w-full h-full bg-white rounded-xl '/>
                    </div>
                </div>

                {HamMenuLink.map((item) => (
                    <NavLink key={item.id} to={item.to} className='w-full flex items-center justify-between duration-100 max-sm:text-sm hover:text-[#30AEAB]' onClick={() => setmenuShow(false)}>
                        {item.title}
                        <MdExpandMore size={20} className='rotate-90'/>
                    </NavLink>
                ))}
            </div>
        </div>

    </div>
  )
}

export default HamberMenuShow