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

import { IoIosTimer } from "react-icons/io";
import { NavLink } from 'react-router-dom';
function LastProductAmazing() {

    const [LastProductAmazing , setLastProductAmazing] = useState(null)
    const LastProductAmazingApi = async () => {
        const {data} = await axios.get('https://database-laptop-accessories-shop.onrender.com/LastProductAmazing')
        setLastProductAmazing(data)
    }
    useEffect(() => {
        LastProductAmazingApi()
    },[])

    /** timer **/
    const[sec, setSec] = useState(1)
    const[min, setMin] = useState(1)
    const[hour, sethour] = useState(3)
    useEffect(() => {
        const intervel = setTimeout(() => {
            if (sec > 0) {
                setSec(sec - 1)
            }else {
                if (min > 0) {
                    setMin(min - 1)
                    setSec(59)
                }else{
                    if (hour > 0) {
                        sethour(hour - 1)
                        setMin(59)
                        setSec(59)
                    }else{
                        if (hour === 0 && min === 0 && sec === 0) {
                            clearInterval(intervel)
                        }
                    }
                }
            }
        }, 1000);
        return () => {
            clearInterval(intervel)
        }
    },[sec])

  return (
    <div className='w-full h-full flex flex-col gap-5 '>

       <div className='w-full flex justify-between items-center gap-1'>
            <div className='flex justify-center max-sm:items-center gap-1'>
                <IoIosTimer size={30} className='max-sm:!w-5' />
                <p className='text-2xl max-md:text-xl max-sm:text-base'>آخرین لحظات شگفت انگیز </p>
            </div>
            <div className='flex gap-3  max-sm:gap-1'>
                    <div className='m-auto flex justify-center items-center rounded-md max-sm:m-0'>
                        <p className='text-2xl font-bold max-lg:text-xl max-md:text-base' > {sec} </p>
                    </div>
                    <div className='m-auto flex justify-center items-center max-sm:m-0'>
                        <p className='text-xl font-bold max-lg:text-xl max-md:text-base' > : </p>
                    </div> 
                    <div className=' m-auto flex justify-center items-center rounded-md max-sm:m-0'>
                        <p className='text-2xl font-bold max-lg:text-xl max-md:text-base' > {min} </p>
                    </div> 
                     <div className='m-auto flex justify-center items-center max-sm:m-0'>
                        <p className='text-xl font-bold max-lg:text-xl max-md:text-base' > : </p>
                    </div> 
                    <div className=' m-auto flex justify-center items-center rounded-md max-sm:m-0'>
                        <p className='text-2xl font-bold max-lg:text-xl max-md:text-base' > {hour} </p>
                    </div>   
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
                {LastProductAmazing?.map((item) => (
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
                            <p className='text-center line-through  max-md:text-xs text-[#C4C2BE]'> {item.price.toLocaleString()} تومان </p>
                            
                            <div className='w-full flex flex-col gap-2'>
                                <div className='w-full flex flex-row-reverse bg-white'>
                                    <div className={` h-1 rounded-full bg-[#30AEAB]`} style={{width: `${item.salesinpercent}%` }} />
                                </div>
                                <p className='text-xs'>
                                    <span className='text-[#30AEAB] font-bold ml-1'> {item.salesinpercent}% </span> فروش رفته 
                                </p>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div> 
    </div>
  )
}

export default LastProductAmazing