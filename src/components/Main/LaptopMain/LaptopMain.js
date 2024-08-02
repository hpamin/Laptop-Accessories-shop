import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { MdExpandMore } from "react-icons/md";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function LaptopMain() {

    const [LaptopMain , setLaptopMain] = useState(null)
    const LaptopMainApi = async () => {
        const {data} = await axios.get('https://database-laptop-accessories-shop.onrender.com/LaptopMain')
        setLaptopMain(data)
    }
    useEffect(() => {
        LaptopMainApi()
    },[])
  return (
    <section className='w-full h-auto gap-5 px-10 flex flex-col items-center justify-between mt-10 max-lg:px-5'>
        <div className='w-full flex justify-between items-center '>
            <p className='text-nowrap text-3xl font-bold'>لپ تاپ</p> 
            <div className='w-5/6 h-[2px] px-5'>
                <div className='w-full h-full bg-[#F0F0F1] rounded-xl '/>
            </div>
            <NavLink className='group flex justify-center items-center  cursor-pointer text-nowrap'> 
                مشاهده همه 
                <MdExpandMore size={20} className='rotate-90' />
            </NavLink>
            
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
                    {LaptopMain?.map((item, index) => (
                        <SwiperSlide key={index} className='group !w-56 !h-96 rounded-xl p-2 bg-[#F0F0F1] max-md:!w-40 max-md:!h-72 max-sm:!w-36 max-sm:!h-64'>
                            <div className='w-full h-full flex justify-between items-center flex-col'>
                                <img className='w-full h-48 object-contain mix-blend-multiply max-md:h-36 max-sm:h-32' src={item.img} alt={item.title} />
                                <p className='text-center max-md:text-sm max-sm:text-xs '> {item.title} </p>
                                <p className='text-center max-md:text-sm'> {item.price} تومان </p>
                                <button className='px-4 py-2 bg-[#30AEAB] rounded-lg text-white hover:opacity-85 max-md:text-sm max-sm:text-xs'> خرید محصول </button>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
        </div>
    </section>
  )
}

export default LaptopMain