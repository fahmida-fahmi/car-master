import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../assets/images/banner/4.jpg'
import Facility from './Facility';

const SingleService = () => {
    const serviceLoader = useLoaderData()
    const { _id, price, service_id, title, img, description, facility } = serviceLoader
    return (
        <div>
            <div className='mt-5 relative'>
                <img className='rounded-2xl h-[300px] w-full ' src={banner} alt="" />
                <div className='absolute top-0 h-[300px] w-full bg-gradient-to-r from-black to-gray-200 rounded-2xl opacity-50'></div>
                <p className='absolute text-6xl font-semibold text-white top-1/3 ps-5'>Service Details</p>
                <button className='btn btn-danger absolute left-1/2 bottom-0'> <Link to='/'>Home</Link>/ Service Details</button>
            </div>
            <div className=''>
                <div className='mt-5 w-4/6'>
                    <img className='w-full rounded-2xl' src={img} alt="" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {/* <div> */}
                        {
                            facility.map(e => {
                                <div className='border-red-600 rounded-3xl bg-slate-600'>
                                    <h4>{e.name}</h4>
                                    <p>{e.details}</p>
                                    {console.log(e.name)}
                                </div>
                            })
                        }
                    {/* </div> */}
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className='my-5'>

                    <Link to={`/checkout/${_id}`} className='no-underline px-5 py-2 text-white rounded-2xl   bg-slate-600'>Checkout</Link>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default SingleService;