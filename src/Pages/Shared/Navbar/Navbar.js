import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (2).png';
import './Navbar.css';
import premium from '../../../assest/icon/premium.png';
import free from '../../../assest/icon/Free (1).png';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = (
        <>
            <li tabIndex={0} className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg  py-2 text-gray-500 hover:text-gray-700"
                    >
                        <span className="text-[#333333] text-base font-normal"> Course </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <li className="mt-2 z-50 flex flex-col space-y-1 absolute lg:left-[-100%] bottom-[-147px] w-[180px] shadow-lg shadow-[#D5D7E9] bg-[#FFFFFF] rounded-[10px]">
                        <Link to='/premium_course' className="rounded-lg text-sm font-medium text-[#333333] pt-[20px] pb-[14px] px-[22px] mx-auto"><img alt='' src={premium} className='inline-block mr-3 text-[#333333]'></img> Primium Course</Link>
                        <hr className='text-[#D5D7E9]' />
                        <Link href="" className="rounded-lg text-sm font-medium text-[#333333] pt-[14px] px-[22px] pb-[20px]"> <img alt='' src={free} className='inline-block mr-3' ></img> Free Course</Link>

                    </li>
                </details>
            </li>
            <li className='text-[#333333] text-base font-normal'><Link>Advice</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Resource</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Consultancy</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Review</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link to='/dashboard'>My Course</Link></li>
            <li className="lg:text-base login inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F]"><Link to='/login' >Login </Link></li>
            <li className="lg:text-base inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F] su"><Link to='/signup' >Sign Up</Link></li>
        </>
    );

    return (
        <section className='bg-[#FFFFFF]'>
            <div className="max-w-[1350px] lg:px-11 mx-auto py-[28px]">
                <div className="relative flex items-center justify-between lg:px-0 px-5">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="Learn with Rakib Logo" />
                    </a>
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
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img src={logo} alt="Learn With Rakib Logo" />
                                            </a>
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