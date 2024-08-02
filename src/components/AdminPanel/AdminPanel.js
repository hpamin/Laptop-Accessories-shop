import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../loader.css'
import Delete from './delete/Delete';
import ImgZeroProduct from '../../img/admin-panel-zeroproduct.png'
function AdminPanel() {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const productApi = async () => {
        const {data} = await axios.get('https://66478f7d2bb946cf2f9e2a9a.mockapi.io/product').finally(() => setLoading(false))
        setProduct(data)
    }
    useEffect(() => {
        setTimeout(() => {
            productApi()
        }, 1000);
    },[])

    function numFa(num) {
         new Intl.NumberFormat('fa-IR', {style : "decimal" }).format(num).replace(/٬/g , "")
         return num.toLocaleString()
    }

  return (
    <section className='w-full min-h-[100vh] px-10 flex flex-col items-center gap-10 pb-3'>

        <div className='w-full min-h-[10vh] flex flex-row-reverse justify-center items-center gap-3 border-b-2 border-[#F0F0F1] '>
            <div className='w-1/5 flex justify-end'>
                <NavLink to="/" className='text-[#30AEAB] text-3xl font-bold font-sans max-md:text-xl max-sm:text-base'>digi<span className='text-black font-sans'>HPamin</span> </NavLink>
            </div>
            <div className='w-3/5 flex justify-center items-center'>
                <p className='text-3xl font-bold max-md:text-xl max-sm:text-base max-[320px]:hidden'>  خوش آمدید </p>
            </div>
            <div className='w-1/5 flex items-center justify-start'>
                <p className='text-xl text-nowrap max-md:text-lg max-sm:text-sm'>  محصولات ({product?.length}) </p>
            </div>
        </div>
        {
            loading === true ?
            <div className='w-full h-[65vh] flex justify-center items-center'>
                <div className="loader"/>
            </div>

            :
            <div className='w-full h-full px-10 flex flex-wrap justify-center items-center gap-5 max-md:px-2'>
        {product?.length === 0 ?
        
            <div className='w-full h-[65vh] flex justify-center items-center'>
                <img src={ImgZeroProduct} className='w-full h-full object-contain' alt="Admin panel zeroproduct" />
            </div>
            :
            product?.map((item) => 
                <div className='group w-56 h-96 rounded-xl p-2 bg-[#F0F0F1]'>
                    <div className='w-full h-full flex justify-between items-center flex-col'>
                        <img className='w-full h-48 object-contain rounded-xl' src={item.img} alt={item.title}  />
                        <p className='text-center text-sm mt-1'> {item.title} </p>
                        
                        <div className={`w-full flex flex-col justify-center ${item.discount && 'gap-5'}`}>
                            <div className={`w-full flex flex-row-reverse justify-between items-center ${item.discount === 0 && "!justify-center" }`}>
                                
                                <div className={`flex justify-center items-baseline gap-2 font-sans `}>
                                    <p className={`flex justify-center items-center ${item.discount !== 0 && "line-through opacity-50"}`}>
                                        {item.price}
                                        <p className='text-xs'> تومان </p>

                                    </p>
                                </div>
                    
                                {parseInt(item.discount) !== 0 && 
                                    <p className=' bg-red-600 px-2 text-white rounded-full'> {numFa(item.discount)}% </p>
                                } 
                            </div>
                             {item.discount !== 0  && 
                                <p className='text-lg'> {numFa(((100 - parseInt(item.discount)) / 100) * parseInt(item.price))} <span className='text-xs'> تومان </span> </p>
                             }
                        </div>

                        <div className='w-full flex justify-between items-center gap-2'>
                            <button className='w-full py-2 bg-[#30AEAB] rounded-lg text-white hover:opacity-85 capitalize'> بیشتر </button>
                            <Delete id={item.id} />

                        </div>
                    </div>
                </div>
            )    
            
        }    

            </div>
        }

        <NavLink to='/create' className='px-16 py-3 text-2xl font-bold bg-[#30AEAB] rounded-lg text-white hover:opacity-85 capitalize max-sm:text-lg max-md:text-xl'> { }
            افزودن محصول
        </NavLink>
    </section>
  )
}

export default AdminPanel