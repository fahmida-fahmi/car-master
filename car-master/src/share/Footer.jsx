import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='bg-base-200 text-base-content py-20'>
            <div className='w-4/5 mx-auto footer flex justify-between'>

            <div className='w-1/6'>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            </div>

        </footer>
    );
};

export default Footer;