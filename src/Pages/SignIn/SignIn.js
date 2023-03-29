import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../assest/bg-img/login.png';
import './login.css';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    return (
        <div className='bg bg-center' style={{ backgroundImage: `url(${login})`, height: 700, }}>
            <div className="hero text-black">
                <div className="hero-content flex-col lg:flex-row p-0 lg:gap-36 mt-5 md:mt-10 mb-10 md:mb-16">
                    <div className="text-center lg:text-left hidden lg:block">
                        {/* <img className='bgStyel' src={login} alt="" /> */}
                    </div>
                    <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100 text-black overflow-hidden">
                        <div className="card-title justify-center py-4 pb-0">Welcome Back</div>
                        <form className="card-body"
                        //  onSubmit={handleSubmit(handleLogin)}
                        >
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email Address is required",
                                    })}
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                                {errors.email &&
                                    <p role="alert" className="text-red-500">
                                        {errors.email?.message}
                                    </p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-black">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is Required",
                                        minLength: { value: 6, message: 'Password must be 6 character' }
                                    })}
                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                />
                                {errors.password &&
                                    <p className='text-red-600' role="alert">{errors.password?.message}</p>
                                }
                            </div>
                            {/* {loginError && <p className='text-red-500'>{loginError}</p>
              } */}
                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="mr-2 checkbox checkbox-xs" />
                                        <span className="label-text">Keep me logged in</span>
                                        {/* <input type="checkbox" className="w-5 checkbox checkbox-primary ml-1" /> */}
                                    </label>
                                </div>
                                <div>
                                    <label className="label">
                                        <Link to="/reset" className="label-text-alt link text-black">
                                            Forgot password?
                                        </Link>
                                    </label>
                                </div>
                            </div>
                            <input className="btn text-white" value="Login Securely" type="submit" />
                            <p className="text-center">
                                <small>
                                    <span>New User?</span>
                                    <Link className="text-black font-bold" to="/signup">Create an Account</Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;