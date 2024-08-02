import axios from 'axios'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Delete({id}) {
    const navigate = useNavigate()
    const deleteProduct = async () => {
        Swal.fire({
        title: "? Are you sure",
        text: "! You won't be able to revert this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "! Yes, delete it"
        }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            let {data} = await axios.delete(`https://66478f7d2bb946cf2f9e2a9a.mockapi.io/product/${id}`)
            navigate(0)
        }
        });
    }
    
  return (
        <button className='px-2 py-2 bg-red-600 rounded-lg text-white hover:opacity-85 capitalize' onClick={deleteProduct} > <AiOutlineDelete size={23} /> </button>
  )
}

export default Delete