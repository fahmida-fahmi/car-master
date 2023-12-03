import React, { useContext, useRef } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { FcGoogle, } from "react-icons/fc";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AuthProvider } from '../../share/Context';

const Login = () => {

    const { login, googleSignIn, resetPassword } = useContext(AuthProvider)
    // const {name} = new URLSearchParams(window.location.search)
    const emailRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log(from);

    const handleForm = event => {
        event.preventDefault()
        const form = event.target
        const password = form.password.value
        const email = form.email.value
        const loggedUser = { password, email }
        console.log(loggedUser);

        login(email, password)
            .then(result => {
                const login = result.user
                console.log(login);
                alert('successfully logged in ')
                navigate(from, { replace: true })
                // result.user.displayName = name

            })
            .catch(error => {
                console.log(error);
                alert('email or password is not correct')

            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const login = result.user
                console.log(login);
                alert('successfully logged in ')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const passwordReset = () => {
        const email = emailRef.current.value
        if (!email) {
            alert('please enter email first')
        }
        else {
            alert('an email has been sent')
        }
        resetPassword(email)
            .then(() => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="m-5 min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <form onSubmit={handleForm} className="card  w-full max-w-sm shadow-2xl bg-base-100 px-5">
                    <h1 className="text-5xl font-bold text-center py-3">Login now!</h1>
                    <div className="card-body flex justify-center">
                        <div className="">
                            <label htmlFor="" className='block'>Email</label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered bg-white my-3" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" />
                            <label className="label">
                                <a onClick={passwordReset} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6">

                            <button className="btn btn-danger w-full">Sign in</button>

                        </div>
                        <div className='text-center py-3'>
                            or Sign in with
                        </div>
                        <div className='flex justify-center text-xl'>
                            <div onClick={handleGoogleSignIn} className='p-3 bg-gray-200 rounded-full cursor-pointer'>

                                <FcGoogle></FcGoogle>
                            </div>
                            <Link className='p-3 bg-gray-200 rounded-full mx-3 text-blue-600'>

                                <BiLogoLinkedin></BiLogoLinkedin>
                            </Link>
                            <Link className='p-3 bg-gray-200 rounded-full text-blue-800'>
                                <FaFacebookF></FaFacebookF>
                            </Link>
                        </div>

                        <div>
                            <p>don't have any account <Link to='/signUp'>Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;