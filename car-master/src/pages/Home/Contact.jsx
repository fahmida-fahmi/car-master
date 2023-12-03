import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";


const Contact = () => {
    return (
        <div className='grid grid-cols-3 gap-10 bg-black text-white p-20 rounded-xl items-center my-5'>
            <div className='flex'>
                <SlCalender className='text-5xl'></SlCalender>
                <div className='ms-3'>
                    <p className='mb-0'>We are open monday-friday</p>
                    <h3 className='m-0 text-2xl'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex'>
                <FaPhoneVolume className='text-5xl'></FaPhoneVolume>
                <div className='ms-3'>
                    <p className='mb-0'>Have a question?</p>
                    <h3 className='m-0 text-2xl'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex'>
                <FiMapPin className='text-5xl'></FiMapPin>
                <div className='ms-3'>
                    <p className='mb-0'>Need a repair? our address</p>
                    <h3 className='m-0 text-2xl'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;