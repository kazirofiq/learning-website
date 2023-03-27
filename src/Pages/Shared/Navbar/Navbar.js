import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (2).png';
import './Navbar.css';
import { GiPriceTag, GiQueenCrown } from "react-icons/gi";
import premium from '../../../assest/icon/premium.png';
import free from '../../../assest/icon/Free (1).png';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = (
        <>
            <li tabIndex={0} className="relative">
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700"
                    >
                        <span class="text-sm font-medium"> Course </span>

                        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <nav aria-label="Account Nav" class="mt-2 flex flex-col space-y-1 absolute bottom-[-157px] w-[180px] shadow-lg shadow-[#D5D7E9] bg-[#FFFFFF] rounded-[10px]">
                        <a href="" class="rounded-lg  text-sm font-medium text-[#333333] pt-[20px] pb-[14px] px-[22px] mx-auto"><img src={premium} className='inline-block mr-3 text-[#333333]'></img> Primium Course</a>
                        <hr className='text-[#D5D7E9]'/>
                        <a href="" class="rounded-lg text-sm font-medium text-[#333333] pt-[14px] px-[22px] pb-[20px]"> <img src={free} className='inline-block mr-3'></img> Free Course</a>

                    </nav>
                </details>
            </li>
            <li className='text-[#333333] text-base font-normal'><Link>Advice</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Resource</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Consultancy</Link></li>
            <li className='text-[#333333] text-base font-normal'><Link>Review</Link></li>
            <li className="lg:text-base login inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F]"><Link className='' >Login </Link></li>
            <li className='lg:text-base login inline-block rounded border border-[#3D419F] bg-[#3D419F] font-normal text-white hover:bg-transparent hover:text-[#282B6B] focus:outline-none focus:ring active:text-indigo-500'><Link>Sign Up</Link></li>
        </>
    );

    return (
        <section className='bg-[#FFFFFF]'>
            <div class="max-w-[1350px] mx-auto pt-11 pb-9">
                <div class="relative flex items-center justify-between lg:px-0 px-5">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <img src={logo} alt="Learn with Rakib Logo" />
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        {menuItems}
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
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
                            <div class="absolute top-0 left-0 w-full lg:px-0 px-5">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img src={logo} alt="Learn With Rakib Logo" />
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
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