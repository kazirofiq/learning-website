import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (2).png';
import './Navbar.css';
import { BiChevronDown } from "react-icons/bi";
import avater from '../../../assest/Profile_image/Avatar.png'




const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const menuItems = (
        <>

            <li>
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="cursor-pointer flex items-center"
                    >
                        <span className="text-[#333333] capitalize text-base font-normal">
                            Course
                        </span>{" "}
                        <BiChevronDown className='text-[#333333]' />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-0 lg:mt-9 w-[165px] h-[74px] font-normal text-sm leading-[21px] rounded-[10px] border border-[#3D419F] bg-[#FFFFFF]"
                    >
                        <li>
                            <Link to='/premium_course' className='text-[#333333] bg-[#FFFFFF] h-[36px] py-2 px-6'>Premium Course </Link>
                        </li>
                        <li>
                            <Link to='/freecorses' className='text-[#333333] bg-[#ECECF5] rounded-t-[12px] h-[36px] py-2 px-6'>Free Course</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="cursor-pointer flex items-center"
                    >
                        <span className="text-[#333333] capitalize text-base font-normal">
                            Resource
                        </span>{" "}
                        <BiChevronDown className='text-[#333333]' />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-0 lg:mt-9 w-[147px] h-[74px] font-normal text-sm leading-[21px] rounded-[10px] border border-[#3D419F] bg-[#FFFFFF]"
                    >
                        <li>
                            <Link to='/resource' className='text-[#333333] bg-[#FFFFFF] h-[36px] py-2 px-6'>Free Resource </Link>
                        </li>
                        <li>
                            <Link to='/kdptools' className='text-[#333333] bg-[#ECECF5] rounded-t-[12px] h-[36px] py-2 px-6'>KDP Tool</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className='text-[#333333] text-base font-normal'><Link to="/consultetion">Consultancy</Link></li>
            <li>
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="cursor-pointer flex items-center"
                    >
                        <span className="text-[#333333] capitalize text-base font-normal">
                            Workshop
                        </span>{" "}
                        <BiChevronDown className='text-[#333333]' />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-0 lg:mt-9 w-[121px] h-[74px] font-normal text-sm leading-[21px] rounded-[10px] border border-[#3D419F] bg-[#FFFFFF]"
                    >
                        <li>
                            <Link to='/upcoming' className='text-[#333333] bg-[#ECECF5] rounded-[10px] h-[36px] py-2 px-6'>Upcoming</Link>
                        </li>
                        <li>
                            <Link to='/previous' className='text-[#333333] bg-[#FFFFFF] h-[36px] py-2 px-6'>Previous</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className='text-[#333333] text-base font-normal'><Link to='/dashboard'>My Course</Link></li>
            <Link to='/login' ><li className="lg:text-base login inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F]">Login </li></Link>
            <Link to='/signup' ><li className="lg:text-base inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F] su">Sign Up</li></Link>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={avater} alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content w-[168px] bg-[#FFFFFF] mt-7 rounded-xl">
                    <li className='w-[136px] mx-4 mt-4 border rounded-lg hover:text-white'>
                        <Link to='/profile' className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className='font-medium text-sm leading-4'>My Profile</span>
                        </Link>
                    </li>
                    <li className='w-[136px] mx-4 my-2 border rounded-lg hover:text-white'>
                        <Link className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                            <span className='font-medium text-sm leading-4'>Dashboard</span>
                        </Link>
                    </li>
                    <li className='w-[136px] mx-4 mb-4 border rounded-lg hover:text-white'>
                        <Link className="px-3 py-2 bg-[#FFFFFF]  hover:bg-[#3D419F] hover:text-white text-[#333333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                            <span className='font-medium text-sm leading-4'>Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <section className='bg-[#FFFFFF]'>
            <div className="max-w-[1350px] lg:px-11 mx-auto py-[28px]">
                <div className="relative flex items-center justify-between lg:px-0 px-5">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="Learn with Rakib Logo" />
                    </Link>
                    <ul className="items-center hidden space-x-[18px] lg:flex">
                        {menuItems}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img src={logo} alt="Learn With Rakib Logo" />
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            {menuItems}

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;