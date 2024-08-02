import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserProvider'

function PaginationPages({postPerPage, ProductWithFilter}) {

    const {currentPage, setCurrentPage} = useContext(UserContext)
    let pages = []
    
    for (let i = 1; i <= Math.ceil(ProductWithFilter/postPerPage); i++) {
        pages.push(i)
    }



  return (
    <div className='w-full flex justify-center items-center gap-2 my-5 '> 
        {
            pages.map((pageNumber, index) => (
                 <button className={`px-4 py-2 bg-[#C4C2BE] rounded-xl shadow-lg text-white text-xl duration-150 ${ pageNumber === currentPage && "!bg-[#30AEAB]"}`} key={index} onClick={() => {setCurrentPage(pageNumber) 
                 console.log("pageNumber onclick: ", pageNumber)
                 console.log("pageNumber onclick: ", pageNumber)}} >    
                    {pageNumber}
                </button>
            ))
        }
    </div>
  )
}

export default PaginationPages