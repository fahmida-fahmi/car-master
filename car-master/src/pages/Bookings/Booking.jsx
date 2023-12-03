import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Booking = ({ order,handleDelete }) => {
    const { _id, img, title, date, price } = order
    console.log(title);
    
    return (
        <div className='grid grid-cols-7 gap-5 items-center my-3'>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline rounded-full bg-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src={img} className='w-48 rounded ' alt="" />
            <p className='col-span-2'>{title}</p>
            <p>{price}</p>
            <p>{date}</p>
            <button className='btn btn-danger capitalize'>pending</button>
        </div>
    );
};

export default Booking;