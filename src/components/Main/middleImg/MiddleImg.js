import React from 'react'
import img1 from '../../../img/middle-img.png'
import img2 from '../../../img/middle-img2.png'
function MiddleImg() {
  return (
    <section className='w-full min-h-[40vh] flex justify-between items-center px-10 max-lg:flex-col max-lg:justify-center max-lg:px-5 max-md:justify-end max-md:mt-5'>
        <div className='w-1/2 h-full cursor-pointer max-lg:w-full '>
            <img className='w-full h-full object-contain rounded-r-xl max-lg:rounded-b-none max-lg:rounded-tl-xl' src={img1} alt="" />
        </div>
        <div className='w-1/2 h-full cursor-pointer max-lg:w-full'>
            <img className='w-full h-full object-contain rounded-l-xl max-lg:rounded-t-none max-lg:rounded-br-xl' src={img2} alt="" />
        </div>
    </section>
  )
}

export default MiddleImg