import React, { useContext, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoStorefrontOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { UserContext } from '../../context/UserProvider';
import { MdOutlineNewReleases } from "react-icons/md";
import { PiPiggyBank } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineHomeModern } from "react-icons/hi2";
import SubMenuCategory from './subMenu/SubMenuCategory';
function Navbar() {

    const [shadow, setShadow] = useState(false)
    const {setmenuShow} = useContext(UserContext)

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (Math.floor(window.scrollY) > 1) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        });
    },[])
    const LinksMenu = [
        {
            id: 0,
            title: "شگفت انگیزه ها ",
            icon: <CiDiscount1 size={15} />,
            to: '/amazing',
        },
        {
            id: 1,
            title: "پرفروش ترین",
            icon: <MdOutlineLocalFireDepartment size={15} />,
            to: '/',
        },
        {
            id: 2,
            title: "جدید ترین",
            icon: <MdOutlineNewReleases size={15} />,
            to: '/',
        },
        {
            id: 3,
            title: "اقتصادی",
            icon: <PiPiggyBank size={15} />,
            to: '/',
        },
        {
            id: 4,
            title: "گیمینگ",
            icon: <IoGameControllerOutline size={15} />,
            to: '/',
        },
        {
            id: 5,
            title: "صنعتی",
            icon: <HiOutlineHomeModern size={15} />,
            to: '/',
        }
    ]
    const ButtonMenu = [
        {
            id: 0,
            title: "mockapi" ,
            icon: <IoStorefrontOutline className='' size={25} />,
        },
        {
            id: 1,
            title: "ورود" ,
            icon: <IoPersonOutline className='' size={25} /> ,
        },
        {
            id: 2,
            title: "سبد خرید" ,
            icon: <AiOutlineShoppingCart className='' size={25}/>,
        },
        {
            id: 3,
            title: "پشتیبانی" ,
            icon: <MdOutlineSupportAgent className='' size={25}/>,
        },
    ]
  return (
    <section className={`w-full h-[17vh] px-10 sticky top-0 z-20 bg-white ${shadow && 'shadow-md' } max-lg:h-[10vh] max-lg:flex max-lg:items-center max-lg:justify-center max-lg:px-5 max-lg:top-[-1px]`}>
        <div className='w-full h-4/6 flex items-center justify-between '>
            <NavLink to='/' className='w-2/12 flex justify-start items-center max-lg:w-fit max-lg:pl-2'>
                <IoMenu className='hidden cursor-pointer max-lg:block' size={35} onClick={() => setmenuShow(true)} />
                <h2 className='text-[#30AEAB] text-3xl font-bold font-sans max-lg:text-2xl max-lg:hidden'>digi<span className='text-black font-sans'>HPamin</span> </h2>
                
            </NavLink>

            <div className='w-7/12 flex justify-start items-center pl-5 max-lg:w-full max-lg:p-0'>
                <input type="text" className='w-full h-12 bg-[#F0F0F1] rounded-r-xl px-5 outline-none' name="" id="" placeholder='جست و جو میان هزاران کالا' />
                <button className='px-2 h-12 rounded-l-xl bg-[#30AEAB] '>
                    <IoIosSearch className='text-white' size={30} />
                </button>
            </div>
            
            <div className='w-2/12 h-full flex items-center justify-end gap-3 max-lg:hidden'>
            {ButtonMenu.map((item) => (
                <NavLink to='/admin-panel' className='px-2 py-2 bg-[#F0F0F1] rounded-2xl shadow-inner hover:shadow-lg duration-150 hover:bg-[#30AEAB] hover:text-white' title={item.title} key={item.id}>
                    {item.icon} 
                </NavLink>
            ))}
            </div>
        </div>

        <div className='w-full h-2/6  flex justify-between items-center border-t-2 border-[#30AEAB] max-lg:hidden'>
            <div className='w-5/6 h-full flex justify-start items-center gap-5'>
                <div className='group w-52 h-full flex justify-center items-center px-2  bg-[#30AEAB] rounded-br-md rounded-bl-md relative cursor-pointer'> 
                    <NavLink className='text-white  group-hover:opacity-95 '> دسته بندی محصولات </NavLink>
                    <MdExpandMore className='text-white group-hover:opacity-95 ' size={25} />

                    <SubMenuCategory />
                </div>

                <div className='flex gap-7'>
                    {LinksMenu.map((item) => (
                        <NavLink className='cursor-pointer text-sm flex items-center justify-center gap-1 hover:opacity-75' key={item.id} to={item.to}> 
                            {item.icon}
                            <p> {item.title} </p>
                        </NavLink>

                    ))}
                    
                </div>
            </div>
            <button className='w-fit flex justify-end items-center gap-1 text-sm'>
                 لطفا شهره خود را انتخاب کنید 
                <IoLocationOutline size={20} />
            </button>
        </div>
    </section>
  )
}

export default Navbar