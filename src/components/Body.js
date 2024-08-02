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
          <div className="w-full h-full sticky top-0 z-50">
            <div className='w-[100%] h-[100vh] absolute z-50' style={{background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.4) 100%)"}}>
              <div className='w-fit h-fit p-7 rounded-xl shadow-xl bg-white absolute left-0 right-0 top-0 bottom-0 m-auto'>
                <div className="loader"/>
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