import React, { useContext } from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { AuthProvider } from './Context';
import Header from './BeforeLogIn/Header';

const Common = () => {
    const {user} = useContext(AuthProvider)
    return (
        <div className='bg-white w-4/5 mx-auto'>
            {
                // user? 
                <>
                <Headers></Headers>
                <Outlet></Outlet>
                <Footer></Footer>
                 </>
                // :
                // <>
                // <Header></Header>
                // <Outlet></Outlet>
                // </>
            }
        </div>
    );
};

export default Common;