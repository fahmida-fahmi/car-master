import React, { useContext, useRef } from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Form, Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthProvider } from '../../share/Context';


const SignUp = () => {

    const {register,googleSignIn} = useContext(AuthProvider)
    const emailRef = useRef(null)
    const navigate = useNavigate()

    const handleForm = event =>{
        event.preventDefault()

        const form = event.target 
        const email = form.email.value 
        const password  = form.password.value 
        const name  = form.name.value 
        const loggedUser = {email,password,name}
        console.log(loggedUser);

        register(email, password)
        .then(result => {
            result.user.displayName = name
            const login = result.user 
            console.log(login);
            console.log(result.user.displayName);
            alert('user successfully created')
            navigate(`/login`)

        })
        .catch(error =>{
            console.log(error);
        })

        
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=> {
            const login = result.user 
            console.log(login);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="m-5 w-4/5 mx-auto bg-white">
            <div className="flex lg:flex-row hero-content">
                <div className="text-center lg:text-left w-full">
                    <img src={loginImg} alt="" />
                </div>
                <Form onSubmit={handleForm} className="card w-full shadow-2xl bg-base-100 px-5">
                    <h1 className="text-4xl font-bold text-center py-4">Sign UP now!</h1>
                    <div className="card-body flex justify-center">
                    <div className="">
                            <label htmlFor="" className='block'>Name</label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered bg-white my-3 w-full" required/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='block'>Email</label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="w-full input input-bordered bg-white my-3" required/>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white w-full" />
                        </div>
                        <div className="mt-6">
                            
                                <button className="btn btn-danger w-full">Sign Up</button>

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

                        <div className='text-center py-3'>
                            <p>already have an account <Link to='/login'>Log in</Link></p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;