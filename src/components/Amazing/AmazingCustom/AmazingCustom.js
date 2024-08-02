import axios from 'axios'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { NavLink } from 'react-router-dom';

import { MdOutlineCelebration } from "react-icons/md";

function AmazingCustom() {

    const [AmazingCustom , setAmazingCustom] = useState(null)
    const AmazingCustomApi = async () => {
        const {data} = await axios.get('https://dirt-tested-lavender.glitch.me/AmazingCustom')
        setAmazingCustom(data)
    }
    useEffect(() => {
        AmazingCustomApi()
    },[])
  return (
    <section className='w-full h-full flex flex-col gap-5 mb-5'>

       <div className='w-full flex justify-between items-center gap-1'>
            <div className='flex justify-center max-sm:items-center gap-1'>
                <MdOutlineCelebration size={30} className='text-red-600 max-sm:!w-5 ' />
                <p className='text-2xl max-md:text-xl max-sm:text-base'> شگفت انگیز سفارشی </p>
            </div>
       </div>

        <div className='w-full'>
            <Swiper
                slidesPerView='auto'
                spaceBetween={20}
                 navigation={true}
                 modules={[Navigation]}
                 className="mySwiper w-full h-full flex justify-center"
                 style={{
                    "--swiper-navigation-color": "black",
                    "--swiper-navigation-size": "25px",
                 }}
            >
                {AmazingCustom?.map((item) => (
                    <SwiperSlide className='group !w-56 !h-[21rem] rounded-xl p-2 bg-[#F0F0F1] max-md:!w-40 max-md:!h-80 max-sm:!w-36 max-sm:!h-72' key={item.id}>
                        <NavLink className='w-full h-full flex justify-between items-center flex-col'>
                            <img className='w-full h-44 object-contain mix-blend-multiply max-md:h-36 max-sm:h-32' src={item.img} alt={item.title} />
                            <p className='text-center max-md:text-sm max-sm:text-xs '> {item.title} </p>
                            <div className='w-full flex justify-between items-center'>
                                <p className='w-fit bg-red-500 text-white rounded-full p-[3px] max-md:text-xs'> {item.percent}% </p>
                                <p className='text-center  max-md:text-sm'>
                                    {(((100 - parseInt(item.percent)) / 100) * parseInt(item.price)).toLocaleString()} 
                                    <span  className='max-md:text-xs'>تومان</span> </p>
                            </div>
                            <div className='w-full'>
                                <p className='line-through  max-md:text-xs text-[#C4C2BE] !text-left'> {item.price.toLocaleString()} تومان </p>
                            </div>
                            
                        </NavLink>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div> 
    </section>
  )
}

export default AmazingCustom