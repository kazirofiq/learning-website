import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (2).png';
import { GiPriceTag, GiQueenCrown } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {

    const menuItems = (
        <>
            <li tabIndex={0}>
                <Link className="justify-between">
                    Course
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2 border">
                    <li className='border '><Link><GiQueenCrown></GiQueenCrown>Premium Course</Link></li>
                    <li className='border '><Link><GiPriceTag></GiPriceTag>Free Course</Link></li>
                </ul>
            </li>
            <li><Link>Advice</Link></li>
            <li><Link>Resource</Link></li>
            <li><Link>Consultancy</Link></li>
            <li><Link className=''>Review</Link></li>
            <li><Link >Login </Link></li>
            <li><Link>Sign Up</Link></li>
        </>
    );

    return (
        <div className='bg-[#FAF7F5] bg-opacity-90 bg-transparent border-b-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="normal-case text-xl"><img className='w-36' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZQEH2T7-ddsmNUm-Ff8qhVrhvv43XPQuCBzcmFrO&s" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;