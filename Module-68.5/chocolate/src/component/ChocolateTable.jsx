import React, { useEffect, useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import chocolateIcon from '../../images/chocolate-bar 1.png'
import { Link, useLoaderData } from 'react-router-dom';
import ChocoTable from './ChocoTable';

const ChocolateTable = () => {
    const chocolateLoader = useLoaderData()
    const [chocolates, setChocolates] = useState(chocolateLoader)
    console.log(chocolates);


    return (
        <div className='w-4/5 mx-auto family'>
            <button>
                <Link to='/addChocolate' className='text-black no-underline  flex items-center py-2 px-4 rounded border text-xl'>
                    <BsPlusLg></BsPlusLg>
                    <p className='px-2'>New Chocolate</p>
                    <img src={chocolateIcon} alt="" />
                </Link>
            </button>
            <div className='bg-[#e1cfc1] grid grid-cols-5 text-left rounded-md w-full mt-4'>
                <p className='py-3 px-3 font-bold w-full'>Image</p>
                <p className='py-3 px-3 font-bold'>Name</p>
                <p className='py-3 px-3 font-bold'>Country/Factory</p>
                <p className='py-3 px-3 font-bold'>Category</p>
                <p className='py-3 px-3 font-bold'>Action</p>
            </div>
            <div>

                {
                    chocolates.map(chocolate => <ChocoTable
                        key={chocolate._id}
                        chocolates={chocolates}
                        chocolate={chocolate}
                        setChocolates={setChocolates}
                    ></ChocoTable>
                    )
                }
            </div>




        </div>
    );
};

export default ChocolateTable;