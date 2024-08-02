import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Blog() {

    const [Blog , setBlog] = useState(null)
    const BlogApi = async () => {
        const {data} = await axios.get('https://database-laptop-accessories-shop.onrender.com/blogMain')
        setBlog(data)
    }
    useEffect(() => {
        BlogApi()
    },[])

  return (
    <section className='w-full min-h-[80vh] px-10 flex flex-col justify-evenly items-center mt-10 max-lg:px-5'>
        <div className='w-full flex justify-between items-center '>
            <div className='w-2/5 h-[2px] bg-[#F0F0F1]' />
            <p className='text-nowrap text-3xl font-bold'> مقالات وبلاگ  </p>
            <div className='w-2/5 h-[2px] bg-[#F0F0F1]' />
        </div>
        <div className='w-full flex justify-between items-center my-5 max-lg:flex-col max-lg:gap-5'>
            {
                Blog?.map((item, index) => (
                    <NavLink key={index} className='w-72 h-96 bg-[#EEEFEF] rounded-lg shadow-lg p-5 flex justify-between items-center flex-col gap-2 max-xl:w-56 max-lg:w-full '>
                        <div className='w-full h-40 max-lg:h-56'>
                            <img src={item.img} className='w-full h-full object-cover rounded-lg mix-blend-multiply max-lg:object-contain ' alt="Blog img" />
                        </div>
                        <div className=''>
                            <p className='text-2xl font-bold self-start max-xl:text-xl max-md:text-lg'> {item.title} </p>
                            <p className='text-justify text-base text-gray-700 max-md:text-sm '> {item.caption} </p>
                        </div>
                        {/* <button className='py-2 px-2 gap-2 bg-[#30AEAB] rounded-lg flex justify-center items-center shadow-lg  border-[#30AEAB] border-2 hover:bg-white hover:text-[#30AEAB] hover:border-[#30AEAB] duration-150 text-white self-end max-lg:self-center max-lg:px-16'>
                          بیشتر بخوانید
                        </button> */}
                    </NavLink>
                ))
            }
        </div>
    </section>
  )
}

export default Blog