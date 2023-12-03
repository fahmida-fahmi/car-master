import React from 'react';
import Title from './Title';
import { Outlet } from 'react-router-dom';


const Common = () => {
    return (
        <div className='bg-[#fff] py-5 m-10 rounded-2xl' >
            <Title></Title>
            <Outlet></Outlet>
        </div>
    );
};

export default Common;