import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='py-36'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='relative'>
                    <img src={person} className=' w-[460px] h-[450px] rounded-lg' alt="" />
                    <img src={parts} className='absolute right-0 -bottom-0 w-1/2 h-1/2  border-8 border-white rounded-xl' alt="" />
                </div>
                <div>
                    <h6 className='text-danger font-bold'>About Us</h6>
                    <h1 className='font-bold py-3 text-6xl'>We are qualified & of experience in this field</h1>
                    <p className='py-2 text-xl text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='pb-2 text-xl text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn btn-danger px-4'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;