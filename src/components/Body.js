import React, { useContext } from 'react'
import Header from './Header/Header/Header'
import AmazingOffer from './Main/AmazingOffer/AmazingOffer'
import MiddleImg from './Main/middleImg/MiddleImg'
import LaptopMain from './Main/LaptopMain/LaptopMain'
import Monitor from './Main/monitor/Monitor'
import MotherBoardMain from './Main/motherboardMain/MotherBoardMain'
import Blog from './Main/Blog/Blog'
import { UserContext } from './context/UserProvider'


function Body() { 

  const {GetAmazingOffer} = useContext(UserContext)
  return (
    <div className='relative'>
      {GetAmazingOffer &&
          <div className="w-full h-100vh sticky top-[17vh] z-50 max-lg:top-[10vh]">
            <div className='w-[100%] h-[83vh] absolute z-50 top-0 max-lg:h-[90vh]' style={{background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.4) 100%)"}}>
              <div className='w-fit h-fit p-5 rounded-xl shadow-xl bg-white absolute left-0 right-0 top-0 bottom-0 m-auto '>
                <div className="loader max-md:!w-24"/>
              </div>
            </div>
          </div>
      } 
          <Header />
          <AmazingOffer />
          <MiddleImg />
          <LaptopMain />
          <Monitor />
          <MotherBoardMain />
          <Blog />
    </div>
  )
}

export default Body