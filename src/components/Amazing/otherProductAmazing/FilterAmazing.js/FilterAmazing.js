import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserProvider'
import { MdOutlineExpandMore } from "react-icons/md";
import axios from 'axios';


function FilterAmazing() {
    const {minPrice, maxPrice, setMaxPrice, setSortedMaxPrice, setSortedMinPrice, setSortedMaxPercent, BrandsList, setBrandsList, setCurrentPage, Available, setAvailable,  todayPost, setTodayPost, rangePrice, setRangePrice} = useContext(UserContext)

    const [ShowBrands, setShowBrands] = useState(false)
    const [ShowSorted, setShowSorted] = useState(false)

    const [Brands , setBrands] = useState(null)
    const BrandsFilter = async () => {
        const {data} = await axios.get('https://dirt-tested-lavender.glitch.me/brandsName')
        setBrands(data)
    }
    useEffect(() => {
        BrandsFilter()
    },[])

    const handelCheckboxChnage = (e, item) => {
        setCurrentPage(1)
        if (e.target.checked === true) {
            setBrandsList([...BrandsList, item])
        } else {
            const newData = BrandsList.filter((value) => value !== item)
            setBrandsList(newData)
        }
    }
  return (
    <div>
        {/* Mobile */}

        <div className='hidden h-full max-lg:flex w-full mb-5 items-center sticky top-0 justify-between gap-5 hideScrollCss overflow-auto'>
            {/* brands */}
            <div className='relative'>
                <button className='flex justify-between items-center px-4 py-2 bg-[#F0F0F1] rounded-full text-nowrap' onClick={() => {
                        setShowBrands(!ShowBrands)
                        setShowSorted(false)
                        setRangePrice(false)
                        }} >
                    <p className='text-sm'> برند ها </p>
                    <MdOutlineExpandMore className={`${ShowBrands === true && "rotate-180"}`} />
                </button>
                    <div className={`w-36 h-48  z-50 mt-1 bg-white border-2 rounded-lg hidden flex-col justify-start items-start gap-5 overflow-y-scroll py-4 px-2 ${ShowBrands === true && "!flex duration-150"}`}>
                        {Brands?.map((item, index) => (
                            <div className='w-full flex flex-col gap-3'>
                                <div className='w-full flex justify-center items-center py-2 gap-1' > 
                                    <input type="checkbox" name="" className='h-5 w-5 cursor-pointer' id="" onChange={(e) => handelCheckboxChnage(e, item.title_EN)}  /> 
                                    <div className='w-full flex justify-between items-center'> 
                                        <p className='text-xs'> {item.title_EN} </p>
                                        <p className='text-xs'> {item.title_FA} </p>    
                                    </div>
                                </div>
                                {index + 1 !== Brands.length && 
                                    <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                                }
                            </div>

                        ))}
                    </div>
            </div>
            {/* today post */}
            <div className={`flex justify-between items-center  text-nowrap px-4 py-2 bg-[#F0F0F1] rounded-full duration-150 cursor-pointer ${todayPost && "bg-green-600 text-white"}`} onClick={() => {setTodayPost(!todayPost)}}>
                <p className='text-sm'> ارسال امروز </p>
            </div>
            {/* Available */}
            <div className={`flex justify-between items-center  text-nowrap px-4 py-2 bg-[#F0F0F1] rounded-full duration-150 cursor-pointer ${Available && "bg-green-600 text-white"}`} onClick={() => {setAvailable(!Available)}}>
                <p className='text-sm'> فقط کالا های موجود </p>
            </div>
            {/* Sorted */}
            <div className='relative'>
                <button className=' flex justify-between items-center text-nowrap px-4 py-2 bg-[#F0F0F1] rounded-full' onClick={() => {
                    setShowSorted(!ShowSorted)
                    setShowBrands(false)
                    setRangePrice(false)
                }} 
                    >
                    <p className='text-sm'> مرتب سازی بر اساس  </p>
                    <MdOutlineExpandMore className={`${ShowSorted === true && "rotate-180"}`} />
                </button>
                <div className={`w-full mt-2  z-50 bg-white border-2 rounded-lg hidden flex-col justify-start items-start gap-5 py-4 px-4 ${ShowSorted === true && "!flex duration-150"}`}>
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMaxPrice(true)
                                setSortedMinPrice(false)
                                setSortedMaxPercent(false)
                                }}>  
                                بیشترین قیمت 
                        </button>
                        <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMinPrice(true)
                                setSortedMaxPrice(false)
                                setSortedMaxPercent(false)
                                }}>  
                                کمترین قیمت 
                        </button>   
                        <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMaxPercent(true)
                                setSortedMinPrice(false)
                                setSortedMaxPrice(false)
                                }}> 
                                بیشترین تخفیف 
                        </button>
                    </div>
                
            </div>
            {/* range price */}
            <div className='w-full flex flex-col gap-2 relative'>
                <button className='w-56 flex justify-between items-center  text-nowrap px-4 py-2 bg-[#F0F0F1] rounded-full duration-150 ' onClick={() => {
                    setShowBrands(false)
                    setShowSorted(false)
                    setRangePrice(!rangePrice)
                }}>
                    <p className='text-sm'> محدوده قیمت  </p>
                    <MdOutlineExpandMore className={`${rangePrice === true && "rotate-180"}`} />
                </button>
                
                <div className={`w-56 top-[100%] left-0 z-50 mt-1 bg-white border-2 rounded-lg hidden flex-col justify-center items-center gap-3 py-4 px-4 ${rangePrice === true && "!flex duration-150"}`}>
                    <label htmlFor="range" className='flex justify-center gap-4'>
                        از 
                        <p className='text-sm'>
                            {minPrice.toLocaleString()}
                            <span className='text-xs'> تومان </span>
                        </p>
                        تا
                        <p className='text-sm'>
                            {maxPrice.toLocaleString()}
                            <span className='text-xs'> تومان </span>
                        </p>
                    </label>
                    <div className='w-full h-5  '>
                        <input 
                            className='w-full ' 
                            dir='ltr'
                            type="range" 
                            name="" 
                            id="range"
                            min={minPrice}
                            max={130000000}
                            defaultValue={maxPrice}
                            step={500}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </div>

        </div>
        {/* Desktop */}
        
        <div className='w-80 h-fit bg-white rounded-lg sticky top-36 px-3 py-4 border-2 flex flex-col gap-3 max-lg:hidden'>
            {/* title */}
            <div className='w-full flex items-center justify-between mb-5'>
                <p className='text-2xl font-bold'>فیلتر ها</p>
            </div>
            {/* brands */}
            <div className='w-full relative'>
                <button className='w-full flex justify-between items-center' onClick={() => {
                        setShowBrands(!ShowBrands)
                        setShowSorted(false)}} >
                    <p> برند ها </p>
                    <MdOutlineExpandMore className={`${ShowBrands === true && "rotate-180"}`} />
                </button>
                    <div className={`w-full h-48 border-2 rounded-lg hidden flex-col justify-start items-start gap-5 overflow-y-scroll py-4 px-2 ${ShowBrands === true && "!flex duration-150"}`}>
                        {Brands?.map((item, index) => (
                            <div className=' w-full flex flex-col gap-3'>
                                <div className='w-full flex justify-center items-center py-2 gap-2' > 
                                    <input type="checkbox" name="" className='h-5 w-5 cursor-pointer' id="" onChange={(e) => handelCheckboxChnage(e, item.title_EN)}  /> 
                                    <div className='w-full flex justify-between items-center'> 
                                        <p> {item.title_EN} </p>
                                        <p> {item.title_FA} </p>    
                                    </div>
                                </div>
                                {index + 1 !== Brands.length && 
                                    <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                                }
                            </div>

                        ))}
                    </div>
            </div>

            <div className='w-full h-[1px] bg-slate-100 rounded-full' />
            {/* today post */}
            <div className='w-full flex justify-between items-center group'>
                <p> ارسال امروز </p>
                <div className="w-auto flex items-center justify-center">
                <label htmlFor="post" className="flex items-center cursor-pointer">
                    <div className="relative">
                    <input type="checkbox" id="post" className="sr-only group" onClick={() => {setTodayPost(!todayPost)}} value={todayPost} />
                    <div className="block bg-gray-200 w-12 h-6 rounded-full"></div>
                    <div className={`dot absolute top-1 left-2 w-4 h-4 rounded-full transition shadow-lg ${todayPost ? "translate-x-[100%] bg-[#30AEAB]" : "!translate-x-0 !bg-white"}`}></div>
                    </div>
                </label>
                </div>
            </div>
            <div className='w-full h-[1px] bg-slate-100 rounded-full' />
            {/* Available */}
            <div className='w-full flex justify-between items-center group'>
                <p> فقط کالا های موجود </p>
                <div className="w-auto flex items-center justify-center">
                <label htmlFor="Available" className="flex items-center cursor-pointer">
                    <div className="relative">
                    <input type="checkbox" id="Available" className="sr-only" onClick={() => setAvailable(!Available)} value={Available} />
                    <div className="block bg-gray-200 w-12 h-6 rounded-full"></div>
                    <div className="dot absolute left-2 top-1 bg-white w-4 h-4 rounded-full transition shadow-lg "></div>
                    </div>
                </label>
                </div>
            </div>
            
            <div className='w-full h-[1px] bg-slate-100 rounded-full' />

            {/* Sorted */}
            <div className='w-full relative'>
                <button className='w-full flex justify-between items-center' onClick={() => {
                    setShowSorted(!ShowSorted)
                    setShowBrands(false)}} 
                    >
                    <p> مرتب سازی بر اساس  </p>
                    <MdOutlineExpandMore className={`${ShowSorted === true && "rotate-180"}`} />
                </button>
                <div className={`w-full mt-2 border-2 rounded-lg hidden flex-col justify-start items-start gap-5 py-4 px-2 ${ShowSorted === true && "!flex duration-150"}`}>
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMaxPrice(true)
                                setSortedMinPrice(false)
                                setSortedMaxPercent(false)
                                }}>  
                                بیشترین قیمت 
                        </button>
                        <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMinPrice(true)
                                setSortedMaxPrice(false)
                                setSortedMaxPercent(false)
                                }}>  
                                کمترین قیمت 
                        </button>   
                        <div className='w-full h-[2px] bg-[#F0F0F1] rounded-full' />
                        <button className='w-full text-right text-sm hover:opacity-70' 
                            onClick={() => {
                                setSortedMaxPercent(true)
                                setSortedMinPrice(false)
                                setSortedMaxPrice(false)
                                }}> 
                                بیشترین تخفیف 
                        </button>
                    </div>
                
            </div>

            
            <div className='w-full h-[1px] bg-slate-100 rounded-full' />

            {/* range price */}
            <div className='w-full flex flex-col gap-2'>
                <p> محدوده قیمت  </p>
                <label htmlFor="range" className='flex justify-center gap-2'>
                    از 
                    <p className='text-sm'>
                        {minPrice.toLocaleString()}
                        <span className='text-xs'> تومان </span>
                    </p>
                    تا
                    <p className='text-sm'>
                        {maxPrice.toLocaleString()}
                        <span className='text-xs'> تومان </span>
                    </p>
                </label>
                <div className='w-full h-5  '>
                    <input 
                        className='w-full ' 
                        dir='ltr'
                        type="range" 
                        name="" 
                        id="range"
                        min={minPrice}
                        max={130000000}
                        defaultValue={maxPrice}
                        step={500}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default FilterAmazing