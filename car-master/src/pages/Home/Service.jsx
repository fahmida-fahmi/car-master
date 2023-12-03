import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services,setServices] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div className='flex justify-center flex-col '>
            <div className='text-center'>
                <h6 className='text-danger font-bold'>Service</h6>
                <h1 className='font-bold text-6xl'>Our Service Area</h1>
                <p className='text-xl w-2/3 mx-auto py-3 text-gray-500'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    
                ></ServiceCard>)}
            </div>
            <button className='btn btn-outline-danger w-1/6 mx-auto my-5'>More Services</button>
        </div>
    );
};

export default Service;