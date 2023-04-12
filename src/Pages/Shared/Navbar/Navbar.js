import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (2).png';
import './Navbar.css';
import premium from '../../../assest/icon/premium.png';
import free from '../../../assest/icon/Free (1).png';
import { BiChevronDown } from "react-icons/bi";



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