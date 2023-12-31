import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo/Logo (2).png";
import "./Navbar.css";
import { BiChevronDown } from "react-icons/bi";
// import avatar from "../../../assest/Profile_image/Avatar.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useEffect } from "react";
import navicon from "../../../assest/navicon.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useIsAdmin from "../../../hooks/useIsAdmin";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [savedUser, SetSavedUser] = useState(null)
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin, isLoading] = useIsAdmin(user?.uid);

    const handleLogOut = () => {
        logOut().then(() => console.log("Logged Out")).catch(err => console.error("Some Error Occured"))
    }

    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                SetSavedUser(data)
            })
            .catch(err => console.error(err))
    }, [user?.uid])

    const menuItems = (
        <>
            <li>
                <div className="">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="text-[#333333] flex items-center text-base font-normal">
                                Course
                                <BiChevronDown className="text-[#333333]" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute w-[165px] h-[80px] right-0 mt-[40px]  origin-top-right  bg-white focus:outline-none rounded-[10px] border border-[#3D419F]">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to="/premium_course"
                                                className={`${active ? 'bg-[#ECECF5] text-[#333333]' : 'text-[#333333]'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >

                                                Premium Course
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to="/freecorses"
                                                className={`${active ? 'bg-[#ECECF5] text-[#333333] ' : 'text-[#333333] '
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >

                                                Free Course
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </li>
            <li>
                <div className="">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="text-[#333333] flex items-center text-base font-normal">
                                Resource
                                <BiChevronDown className="text-[#333333]" />

                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute w-[165px] h-[80px] right-0 mt-[40px]  origin-top-right  bg-white focus:outline-none rounded-[10px] border border-[#3D419F]">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to="/resource"
                                                className={`${active ? 'bg-[#ECECF5] text-[#333333]' : 'text-[#333333]'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >

                                                Free Resource
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to="/kdptools"
                                                className={`${active ? 'bg-[#ECECF5] text-[#333333] ' : 'text-[#333333] '
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >

                                                KDP Tool
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </li>
            <li className="text-[#333333] text-base font-normal">
                <Link to="/consultetion">Consultancy</Link>
            </li>
            <li className="text-[#333333] text-base font-normal">
                <Link to="/workshop/upcoming">WorkShop</Link>
            </li>
            {
                !user?.uid ? <>
                    <Link to="/login">
                        <li className="lg:text-base login inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F]">
                            Login{" "}
                        </li>
                    </Link>
                    <Link to="/signup">
                        <li className="lg:text-base inline-block rounded border border-[#3D419F] font-normal text-[#282B6B] hover:bg-[#3D419F] hover:text-white focus:outline-none focus:ring active:bg-[#3D419F] su">
                            Sign Up
                        </li>
                    </Link>
                </> : <>
                    {
                        savedUser?.paidPremium && <li className="text-[#333333] text-base font-normal">
                            <Link to="/mycourses">My Course</Link>
                        </li>
                    }
                    <div className="dropdown dropdown-end lg:ml-10">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-10">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL || navicon} alt="" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content w-[168px] bg-[#FFFFFF] mt-7 rounded-xl"
                        >
                            <li className="w-[136px] mx-4 mt-4 border rounded-lg hover:text-white">
                                <Link
                                    to="/profile"
                                    className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="font-medium text-sm leading-4">My Profile</span>
                                </Link>
                            </li>
                            <li className="w-[136px] mx-4 my-2 border rounded-lg hover:text-white">
                                <Link to={(user?.uid && isAdmin) ? "/admindashboard/mycourse" : "/student-dashboard"} className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                        />
                                    </svg>

                                    <span className="font-medium text-sm leading-4">Dashboard</span>
                                </Link>
                            </li>
                            <li className="w-[136px] mx-4 mb-4 border rounded-lg hover:text-white">
                                <span onClick={handleLogOut} className="px-3 py-2 bg-[#FFFFFF]  hover:bg-[#3D419F] hover:text-white text-[#333333]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>
                                    <span className="font-medium text-sm leading-4">Log Out</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            }
        </>
    );
    const menuItem2 = (
        <>
            <div class="flex  justify-between  ">
                <div class=" ">
                    <nav aria-label="Main Nav" class="mt-6 flex flex-col ">


                        <details class="group [&_summary::-webkit-details-marker]:hidden  border-b w-44">
                            <summary class="flex cursor-pointer items-center justify-between  py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                                <div class="flex items-center ">


                                    <span class="text-sm font-medium "> Course </span>
                                </div>

                                <span class="shrink-0 transition duration-300   group-open:-rotate-180">
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

                            <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                                <Link
                                    to="/premium_course"
                                    class="flex items-center  py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >


                                    <span class="text-sm font-medium"> Premium Course </span>
                                </Link>

                                <Link
                                    to="/freecorses"
                                    class="flex items-center   py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >


                                    <span class="text-sm font-medium"> Free Course </span>
                                </Link>
                            </nav>
                        </details>
                        <details class="group [&_summary::-webkit-details-marker]:hidden  border-b w-44">
                            <summary class="flex cursor-pointer items-center justify-between  py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                                <div class="flex items-center ">


                                    <span class="text-sm font-medium "> Resourse </span>
                                </div>

                                <span class="shrink-0 transition duration-300   group-open:-rotate-180">
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

                            <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                                <Link
                                    to="/resource"
                                    class="flex items-center   py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >


                                    <span class="text-sm font-medium"> Free Resourse </span>
                                </Link>

                                <Link
                                    to="/kdptools"
                                    class="flex items-center   py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >


                                    <span class="text-sm font-medium"> KDP Tools </span>
                                </Link>
                            </nav>
                        </details>
                        <Link
                            to="/consultetion"
                            class="flex items-center gap-2  border-b  py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span class="text-sm font-medium">Consultancy</span>
                        </Link>
                        <Link
                            to="/workshop/upcoming"
                            class="flex items-center gap-2  border-b py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span class="text-sm font-medium">WorkShop</span>
                        </Link>
                        <Link
                            to="/mycourses"
                            class="flex items-center gap-2   border-b py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span class="text-sm font-medium">My Course</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
    return (
        <section className="bg-[#FFFFFF]">
            <div className=" md:mx-[145px] hidden md:block   py-[28px]">
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
                                        <ul className="space-y-4">{menuItems}</ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="navbar bg-base-100 sm:block md:hidden">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label
                            htmlFor="my-drawer"
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className=" sm:hidden menu menu-compact dropdown-content  p-2  w-[22.5rem]"
                        >
                            <div className="drawer ">
                                <input
                                    id="my-drawer"
                                    type="checkbox"
                                    className="drawer-toggle"
                                />
                                <div className="drawer-content"></div>

                                <div className={`drawer-side  `}>
                                    <label htmlFor="my-drawer" className="drawer-overlay"></label>

                                    <ul className="menu p-4 bg-base-100 w-52   text-base-content">
                                        {menuItem2}
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="Learn with Rakib Logo" />
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user?.uid ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || navicon} alt="icon" />
                                </div>
                            </label> : <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={navicon} alt="icon" />
                                </div>
                            </label>
                        }

                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content w-[168px] bg-[#FFFFFF] mt-7 rounded-xl"
                        >
                            {
                                user?.uid ? <>
                                    <li className="w-[136px] mx-4 mt-4 border rounded-lg hover:text-white">
                                        <Link
                                            to="/profile"
                                            className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span className="font-medium text-sm leading-4">
                                                My Profile
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="w-[136px] mx-4 my-2 border rounded-lg hover:text-white">
                                        <Link to="/student-dashboard" className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                                />
                                            </svg>

                                            <span className="font-medium text-sm leading-4">
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="w-[136px] mx-4 mb-4 border rounded-lg hover:text-white">
                                        <span onClick={handleLogOut} className="px-3 py-2 bg-[#FFFFFF]  hover:bg-[#3D419F] hover:text-white text-[#333333]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                                />
                                            </svg>
                                            <span className="font-medium text-sm leading-4">Log Out</span>
                                        </span>
                                    </li>
                                </> : <>
                                    <li className="w-[136px] mx-4 mt-4 border rounded-lg hover:text-white">
                                        <Link
                                            to="/login"
                                            className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span className="font-medium text-sm leading-4">
                                                Login
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="w-[136px] mx-4 my-2 border rounded-lg hover:text-white">
                                        <Link to="signup" className="px-3 py-2 bg-[#FFFFFF] hover:bg-[#3D419F] hover:text-white text-[#333333]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                                />
                                            </svg>
                                            <span className="font-medium text-sm leading-4">
                                                Sign Up
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;