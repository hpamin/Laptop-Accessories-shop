import React, { useContext, useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import Amazings from '../../../img/Amazings.svg'
import box from '../../../img/box.webp'
import { MdExpandMore } from "react-icons/md";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
  
function AmazingOffer() {

    const {setGetAmazingOffer} = useContext(UserContext)

    const [AmazingOffer , setAmazingOffer] = useState(null)
    const AmazingOfferApi = async () => {
        const {data} = await axios.get('https://dirt-tested-lavender.glitch.me/AmazingOffer').finally(() => setGetAmazingOffer(false))
        setAmazingOffer(data)
    }
    useEffect(() => {
        AmazingOfferApi()
    },[])
  return (
    <section className='w-full min-h-[60vh] px-10 flex justify-center items-center max-lg:px-5'>
        <div className='w-full min-h-[60vh] flex justify-between items-center bg-gradient-to-r from-[#2fd2e9] via-[#30AEAB] to-[#31d5c0] rounded-xl'>

            <div className='w-40 min-h-[50vh] flex justify-center items-center flex-col'>
                <img src={Amazings} alt="Amazings" />
                <img src={box} alt="box" />
                <NavLink className='group flex justify-center items-center text-white cursor-pointer'> 
                    مشاهده همه 
                    <MdExpandMore size={20} className='rotate-90' />
                </NavLink>
            </div>
            <div className='w-5/6 h-full max-md:w-4/6'>
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
                    {AmazingOffer?.map((item, index) => (
                        <SwiperSlide key={index} className='group !w-56 !h-96 rounded-xl p-2 bg-white max-md:!w-44 max-md:!h-72'>
                            <div className='w-full h-full flex justify-between items-center flex-col'>
                                <img className='w-full h-48 object-contain' src={item.img} alt={item.title} />
                                <p className='text-center'> {item.title} </p>
                                <p> {item.price} تومان </p>
                                <button className='px-4 py-2 bg-[#30AEAB] rounded-lg text-white hover:opacity-85'> خرید محصول </button>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default AmazingOffer