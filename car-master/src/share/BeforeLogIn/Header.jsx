import React from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = <>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/'>Home</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/about'>About</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/about'>Service</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/about'>Blog</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/about'>Contact</Link></li>
    </>
    return (
        <div className='w-4/5 mx-auto'>
            <div className="navbar bg-white flex justify-between items-center">
                <div className="pb-5">
                    <div className="dropdown xl:hidden">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl px-0">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="hidden lg:flex nav-link">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;