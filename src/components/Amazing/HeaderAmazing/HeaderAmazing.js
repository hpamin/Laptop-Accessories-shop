import React from 'react'
import img from '../../../img/amazing (1).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function HeaderAmazing() {
    const category = [
    {
      id: 0,
      title: "مادر برد"
    },
    {
      id: 1,
      title: "لپ تاپ"
    },
    {
      id: 2,
      title: "هدفون"
    },
    {
      id: 3,
      title: "تلفن همراه"
    },
    {
      id: 4,
      title: "کیبورد"
    },
    {
      id: 5,
      title: "SSD"
    },
    {
      id: 6,
      title: "موس"
    },
    {
      id: 7,
      title: "RAM"
    },
    {
      id: 8,
      title: "مادر برد"
    },
    {
      id: 9,
      title: "مادر برد"
    },
    {
      id: 10,
      title: "مادر برد"
    },
    {
      id: 11,
      title: "مادر برد"
    },
    {
      id: 12,
      title: "مادر برد"
    },
  ]
  return (
    <div className='w-full h-[85vh] flex flex-col justify-evenly items-center '>

            <div className='w-full h-96'>
                <img src={img} className='w-full h-full object-cover object-center rounded-md' alt="" />
            </div>

            <div className='w-full h-36'>
            <Swiper
            slidesPerView='auto'
            spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full h-full"
                style={{
                "--swiper-navigation-color": "black",
                "--swiper-navigation-size": "25px",
                }}
            >
                {
                category.map((item) => (
                <SwiperSlide className='group !w-32 !h-32 rounded-xl p-1' key={item.id}>
                    <div className='w-full h-full bg-[#F0F0F1] flex flex-col justify-center items-center rounded-xl group-hover:!shadow-lg group-hover:scale-105 duration-150 cursor-pointer gap-3' style={{boxShadow: 'inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1)'}}>

                        <p className=' group-hover:text-[#30AEAB]'> {item.title} </p>
                    
                    </div>
                </SwiperSlide>
                ))
                }
            </Swiper>
            </div>
        </div>
  )
}

export default HeaderAmazing