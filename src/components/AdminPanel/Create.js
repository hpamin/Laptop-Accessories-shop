import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const [ShowDiscount, setShowDiscount] = useState(false)
    const [ProductName, setProductName] = useState("")
    const [Price, setPrice] = useState(0)
    const [img, setimg] = useState("")
    const [Discount, seDiscount] = useState(0)
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
       console.log(ProductName, Price, img); 
       const createProduct = async () => {
        try{
            await axios.post('https://66478f7d2bb946cf2f9e2a9a.mockapi.io/product', {
                title: ProductName,
                price: Price,
                img: img,
                discount: Discount
              }, {
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              }
            )
        } catch (error){
            console.log(error.message);
        }
       }
       createProduct();
       navigate("/admin-panel")
       
    };
    
  return (
    <section className='w-full min-h-[100vh] flex justify-center items-center'>
        <div className='w-[30rem] shadow-xl rounded-xl bg-[#F0F0F1] px-10 py-5 '>
            <form className='w-full min-h-[60vh] flex flex-col justify-center items-center ' action="#" method='post' onSubmit={(e) => submitHandler(e)}>
                
                <div className='w-full mb-2'>
                    <label className=" tracking-wide text-black  mb-2" htmlFor="ProductName">
                        نام محصول
                    </label>
                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-1"
                     id="ProductName" 
                     type="text" 
                     required
                     placeholder="لپ تاپ/ موبایل/هندزفری و ..."
                     onChange={(e) => setProductName(e.target.value)}
                     />
                </div>
                <div className='w-full mb-2'>
                    <label className=" tracking-wide text-black  mb-2" htmlFor="ProductName">
                         قیمت (تومان)
                    </label>
                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-1 font-sans"
                     id="price" 
                     required
                     min={1}
                     type="number" 
                     placeholder="1.000.000 تومان"
                     onChange={(e) => setPrice(e.target.value)}
                     />
                </div>
                <div className='w-full mb-2'>
                    <label className=" tracking-wide text-black  mb-2" htmlFor="ProductName">
                        عکس محصول
                    </label>
                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-1"
                     id="image" 
                     type="text" 
                     placeholder="https://www.google.com/"
                     onChange={(e) => setimg(e.target.value)}
                     />
                </div>
                <div className='w-full'>
                     <div className='w-full flex justify-start items-center gap-10 mt-5 mb-2'>
                        <p className="tracking-wide text-black  " htmlFor="ProductName"> آیا تخفیف دارد؟ </p>
                        <input type="checkbox" className="border-gray-300 rounded h-5 w-5  cursor-pointer" onClick={() => setShowDiscount(!ShowDiscount)} />       
                     </div>
                     {ShowDiscount &&
                        <div className='w-full mt-6'>
                           <label className=" tracking-wide text-black  mb-2" htmlFor="ProductName">
                               چند درصد تخفیف مدنظرتان است؟
                           </label>
                           <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 font-sans mt-1"
                           id="discount" 
                           max={99}
                           min={1}
                           type="number" 
                           placeholder="درصد تخفیف"
                           onChange={(e) => seDiscount(e.target.value)}
                           />
                        </div>
                    }
                </div>


                <button className='w-full px-4 py-2 bg-[#30AEAB] rounded-lg text-white hover:opacity-85 mt-5'> 
                    باگذاری    
                </button>
            </form>
        </div>
    </section>
  )
}

export default Create