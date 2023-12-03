import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, price, title, img } = service
    return (
        <div className='border rounded-xl mx-auto px-4 pt-4'>
            <img className='h-[210px] rounded-xl' src={img} alt="" />
            <h3 className='pt-3 font-bold'>{title}</h3>
            <div className='flex justify-between text-danger text-xl font-bold'>
                <p> Price: $ {price}</p>
                <div className='cursor-pointer'>
                    <Link to={`services/${_id}`}>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;