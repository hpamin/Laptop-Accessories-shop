import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import header from '../../../img/Gaming-Chair-header.png'

import { BsFillMotherboardFill } from "react-icons/bs";
import { IoLaptopOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsKeyboard } from "react-icons/bs";
import { BsDeviceSsd } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";

function HeaderBot() {

  const imgheader = [ 
    {
      img: header,
      id: 1,
    },
    {
      img: header,
      id: 2,
    },
    {
      img: header,
      id: 3,
    },
  ]
  const category = [
    {
      id: 0,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
    {
      id: 1,
      icon : <IoLaptopOutline size={40} className='group-hover:text-[#30AEAB]' />,
      title: "لپ تاپ"
    },
    {
      id: 2,
      icon : <PiHeadphonesLight size={40} className='group-hover:text-[#30AEAB]' />,
      title: "هدفون"
    },
    {
      id: 3,
      icon : <IoPhonePortraitOutline size={40} className='group-hover:text-[#30AEAB]' />,
      title: "تلفن همراه"
    },
    {
      id: 4,
      icon : <BsKeyboard size={40} className='group-hover:text-[#30AEAB]' />,
      title: "کیبورد"
    },
    {
      id: 5,
      icon : <BsDeviceSsd size={40} className='group-hover:text-[#30AEAB]' />,
      title: "SSD"
    },
    {
      id: 6,
      icon : <BsMouse size={40} className='group-hover:text-[#30AEAB]' />,
      title: "موس"
    },
    {
      id: 7,
      icon : <CgSmartphoneRam size={40} className='group-hover:text-[#30AEAB]' />,
      title: "RAM"
    },
    {
      id: 8,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
    {
      id: 9,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
    {
      id: 10,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
    {
      id: 11,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
    {
      id: 12,
      icon : <BsFillMotherboardFill size={40} className='group-hover:text-[#30AEAB]' />,
      title: "مادر برد"
    },
  ]
  return (
    <section className='w-full h-[83vh] flex items-center justify-evenly px-10 flex-col gap-5 max-lg:h-[90vh] max-lg:px-5'>
      <div className='w-full '>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper rounded-xl"
            style={{
               "--swiper-navigation-color": "#fff",
            }}
          >
            {imgheader.map((item) =>
              <SwiperSlide key={item.id} className='cursor-pointer'>
                <div className='w-full h-96'>
                  <img src={item.img} className='w-full h-full rounded-xl shadow-lg object-cover'  alt="" />
                </div>
              </SwiperSlide>
            )
            }
        </Swiper>
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

                {item.icon}
                <p className=' group-hover:text-[#30AEAB]'> {item.title} </p>
                
              </div>
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
    </section>
  )
}

export default HeaderBot