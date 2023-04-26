import React from 'react';
import { Link } from 'react-router-dom';
import adminLogo from "../../../assest/logo/Logo (White).png";
import { MdOutlineAssignment, MdOutlineTopic } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { AiFillAlert, AiFillMail, AiOutlineMail, AiOutlineRight } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { FaFirstOrderAlt, IconName } from "react-icons/fa";

const StudentNav = () => {
    return (
        <div className="w-full bg-[#1B1D48] h-screen">
            <div className='w-[134px] mx-auto mt-[19px]'>
                <img src={adminLogo} alt="" />
            </div>
            <div className="w-full">

                <ul className="menu w-[224px] mx-auto p-2 rounded-box">
                    <li>
                        <Link to="">
                            <div className="flex gap-4 items-center hover:">
                                <MdOutlineTopic></MdOutlineTopic>
                                <h2>Analytic</h2>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <label
                                // onClick={() => setDeletingClient(client)}
                                htmlFor="confirmation-modal"

                            >
                                <div className="flex gap-4 items-center">
                                    <AiOutlineMail className='text-white font-bold'></AiOutlineMail>
                                    <h2>Leader Board</h2>
                                </div>
                            </label>

                        </Link>
                    </li>
                </ul>
                {/* divider */}
                <div className="divider"></div>
                {/* profile */}
                <ul className="menu p-2 rounded-box">
                    <li>
                        <div
                            //   onClick={handleLogout}
                            className="flex items-center w-[224px] mx-auto text-red-600"
                        >
                            <BiLogIn className='text-white'></BiLogIn>
                            <h2 className='text-white'>Log Out</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StudentNav;