import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiSortAlphabetically } from "react-icons/ti";
import PaginationPages from './PaginationPages/PaginationPages';
import { UserContext } from '../../context/UserProvider';
import FilterAmazing from './FilterAmazing.js/FilterAmazing';
import { MdNotificationsActive } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
function OtherProductAmazing() {

    const {currentPage, minPrice, setMinPrice, maxPrice, setMaxPrice, SortedMaxPrice, SortedMinPrice, SortedMaxPercent, BrandsList, Available, todayPost, } = useContext(UserContext)

    const [OtherProductAmazing, setOtherProductAmazing] = useState(null)
    const [Filtered, setFiltered] = useState(null)

    
    const OtherProductAmazingApi = async () => {

            const {data} = await axios.get(`https://dirt-tested-lavender.glitch.me/OtherProductAmazing`)
            const maximumPrice = Math.max(...data.map((item) => item.price))
            const minimumPrice = Math.min(...data.map((item) => item.price))
            setMaxPrice(maximumPrice)
            setMinPrice(minimumPrice)
            setOtherProductAmazing(data)
            setFiltered(data)
        }
        
        useEffect(() => {
            if(BrandsList.length > 0) {
                const filterData =  todayPost ? OtherProductAmazing.filter((item) => BrandsList.includes(item.brands)).filter((item) => item.today_post === todayPost) : Available ? OtherProductAmazing.filter((item) => BrandsList.includes(item.brands)).filter((item) => item.available === Available ) : OtherProductAmazing.filter((item) => BrandsList.includes(item.brands))
                setFiltered(filterData)
          } else if (todayPost === true || Available === true) {
                const justAvailableOrTodayPostData = todayPost ? OtherProductAmazing.filter((item) => item.today_post === todayPost) : Available ? OtherProductAmazing.filter((item) => item.available === Available ) : OtherProductAmazing
                setOtherProductAmazing(justAvailableOrTodayPostData)
                setFiltered(justAvailableOrTodayPostData)
          } else {
            OtherProductAmazingApi();
          }
        }, [BrandsList, Available, todayPost]);
    
        
    const postPerPage = 15
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const ProductWithFilter = Filtered?.filter((item) => item.price >= minPrice && item.price <= maxPrice)

    const PostesWithPriceFilter = SortedMaxPrice === true && SortedMinPrice === false && SortedMaxPercent === false ?  Filtered?.sort((num1, num2) => num2.price - num1.price).filter((item) => item.price >= minPrice && item.price <= maxPrice).slice(firstPostIndex, lastPostIndex) : SortedMinPrice === true && SortedMaxPrice === false && SortedMaxPercent === false ? Filtered?.sort((num1, num2) => num1.price - num2.price).filter((item) => item.price >= minPrice && item.price <= maxPrice).slice(firstPostIndex, lastPostIndex) : SortedMaxPercent === true && SortedMaxPrice === false && SortedMinPrice === false ? Filtered?.sort((num1, num2) => num2.percent - num1.percent).filter((item) => item.price >= minPrice && item.price <= maxPrice).slice(firstPostIndex, lastPostIndex) : Filtered?.filter((item) => item.price >= minPrice && item.price <= maxPrice).slice(firstPostIndex, lastPostIndex) 
    
    
    
  return (
    <section className='w-full min-h-[90vh] flex flex-col justify-between mb-5'>

        <div className='w-full h-full flex flex-col'>
            <div className='w-full mb-5 flex justify-start items-center gap-2'>
                    <TiSortAlphabetically size={35}  />
                    <p className='text-2xl max-lg:text-xl'> همه شگفت انگیز ها </p>
            </div>

            <div className='w-full h-full flex max-lg:flex-col'>
                
                {/* filter */}
                <FilterAmazing />

                <div className='w-full h-full flex flex-wrap pr-2 justify-start gap-2 max-lg:flex max-lg:justify-between max-lg:items-center'>
                    {PostesWithPriceFilter?.map((item) => (
                        <div className='group !w-52 !h-[21rem] relative rounded-xl p-2 bg-[#F0F0F1] max-md:!w-40 max-md:!h-80 max-sm:!w-36 max-sm:!h-72' key={item.id}>
                            <NavLink className='w-full h-full flex justify-between items-center flex-col'>
                                    <img className='w-full h-44 object-contain mix-blend-multiply max-md:h-36 max-sm:h-32' src={item.img} alt={item.title} />
                                    <p className='text-center max-md:text-sm max-sm:text-xs '> {item.title} </p>
                                    {item.available ?
                                    <>
                                        <div className='w-full flex justify-between items-center'>
                                            <p className='w-fit bg-red-500 text-white rounded-full p-[3px] max-md:text-xs'> {item.percent}% </p>
                                            <p className='text-center  max-md:text-sm'>
                                                {(((100 - parseInt(item.percent)) / 100) * parseInt(item.price)).toLocaleString()} 
                                                <span  className='max-md:text-xs'>تومان</span> </p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='line-through  max-md:text-xs text-[#C4C2BE] !text-left'> {item.price.toLocaleString()} تومان </p>
                                        </div>
                                    </> 
                                    :
                                    <button className='text-center flex justify-center items-center gap-1 bg-red-600 p-2 rounded-lg shadow-sm text-white mb-2 hover:opacity-85 max-md:text-sm max-sm:text-xs'> 
                                        موجود شد خبرم کن 
                                        <MdNotificationsActive />
                                    </button>
                                    }
                                    {item.today_post &&
                                        <div className='w-fit absolute top-0 left-0 rounded-tl-xl rounded-br-xl bg-[#30AEAB] py-1 px-2 flex justify-between items-center gap-1'>
                                            <p className='text-xs text-white text-nowrap'> ارسال امروز </p>
                                            <FaShippingFast className='text-white' size={20} />
                                        </div>
                                    }
                                    
                            </NavLink>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
        
        <PaginationPages  postPerPage={postPerPage} ProductWithFilter={ProductWithFilter?.length} />

    </section>
  ) 
}

export default OtherProductAmazing