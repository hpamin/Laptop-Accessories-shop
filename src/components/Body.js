import React from 'react'
import Header from './Header/Header/Header'
import AmazingOffer from './Main/AmazingOffer/AmazingOffer'
import MiddleImg from './Main/middleImg/MiddleImg'
import LaptopMain from './Main/LaptopMain/LaptopMain'
import Monitor from './Main/monitor/Monitor'
import MotherBoardMain from './Main/motherboardMain/MotherBoardMain'
import Blog from './Main/Blog/Blog'


function Body() { 

  return (
    <div className='relative'>
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