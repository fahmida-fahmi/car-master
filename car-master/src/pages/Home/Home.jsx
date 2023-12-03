import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import PopularProduct from './PopularProduct';

const Home = () => {

    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <PopularProduct></PopularProduct>
        </div>
    );
};

export default Home;