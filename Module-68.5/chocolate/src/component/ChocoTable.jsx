import React from 'react';
import Table from 'react-bootstrap/Table';
import { HiOutlinePencil } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ChocoTable = ({ chocolates, chocolate, setChocolates }) => {
    const { _id, name, country, category } = chocolate
    console.log(chocolate.name);

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            imageUrl: 'https://i.postimg.cc/RZLftc8G/Group-27.png',
            imageHeight: 150,
            imageAlt: 'A successful image',
            text: "Do you really want to delete this record?",
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ok'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/chocolate/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your record has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(chocolate => chocolate._id !== _id)
                            setChocolates(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className='grid grid-cols-5 text-left rounded-md family items-center'>

            <p className='p-3 text-left'>Image</p>
            <p className='p-3'>{name}</p>
            <p className='p-3'>{country}</p>
            <p className='p-3'>{category}</p>
            <div className='py-3 px-12 flex item-center'>
                <Link to={`/updateChocolate/${_id}`} className='bg-[#f2ebe4] p-3 rounded-md text-[#774320 text-xl me-3 cursor-pointer'>
                    <HiOutlinePencil></HiOutlinePencil>
                </Link>
                <div className='bg-[#f2ebe4] p-3 rounded-md text-[#774320 text-xl cursor-pointer' onClick={() => handleDelete(_id)} >
                    <RxCross1></RxCross1>
                </div>
            </div>



        </div>
    );
};

export default ChocoTable;