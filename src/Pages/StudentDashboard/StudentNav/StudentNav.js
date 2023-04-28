import React from 'react';
import { Link } from 'react-router-dom';
import adminLogo from "../../../assest/logo/Logo (White).png";
import { BiLogIn } from "react-icons/bi";
import analytic from '../../../assest/student_dashboard/analytic.png'
import leader_board from '../../../assest/student_dashboard/leader-board.png'

const StudentNav = () => {
    return (
        <div className="w-full bg-[#1B1D48] h-screen">
            <div className='w-[134px] mx-auto mt-[19px]'>
                <Link to='/'>
                    <img src={adminLogo} alt="" />
                </Link>
            </div>
            <div className="w-full">

                <ul className="menu w-[224px] mx-auto p-2 rounded-box">
                    <li>
                        <Link to="/student-dashboard/analytic">
                            <div className="flex gap-4 items-center hover:">
                                <img src={analytic} alt="" />
                                <h2>Analytic</h2>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/student-dashboard/leader-board">
                            <div className="flex gap-4 items-center hover:">
                                <img src={leader_board} alt="" />
                                <h2>Leader Board</h2>
                            </div>
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