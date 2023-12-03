import React, { useContext } from 'react';
import logo from '../assets/logo.svg'
import { PiHandbag } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import { AuthProvider } from './Context';

const Headers = () => {
    const { user, logOut } = useContext(AuthProvider)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('you sign out successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const navItems = <>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/'>Home</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/about'>About</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/service'>Service</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/blog'>Blog</Link></li>
        <li><Link className='no-underline text-black font-semibold text-xl' to='/contact'>Contact</Link></li>

    </>
    return (
        <div className='mx-auto sticky top-0 bg-white z-10'>
            <div className="navbar bg-white flex justify-between items-center ">
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
                <div className="text-xl">

                    {/* <AiOutlineSearch className='mx-3'></AiOutlineSearch> */}
                    {/* <Button variant="outline-danger">Appointment</Button> */}
                    {console.log(user)}
                    <Link to='/bookings' className='mx-3'>
                        <PiHandbag></PiHandbag>
                    </Link>
                    {
                        user ?
                            <div className='flex items-center'>
                                <p className='mb-0 px-3'> {user.displayName}</p>
                                <img className='w-10 rounded-full mx-3' src={user.photoURL} alt="" />
                                <Button onClick={handleLogOut} className='no-underline bg-white btn text-danger rounded border-1 border-danger px-3 py-2'>LogOut</Button>
                            </div>
                            :
                            <>
                                <Link to='/login' className='no-underline text-danger rounded border-1 border-danger px-3 py-2'>Login</Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Headers;