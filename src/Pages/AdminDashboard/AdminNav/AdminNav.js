import React from 'react';
import { Link } from 'react-router-dom';
import adminLogo from "../../../assest/logo/Logo (White).png";
import { MdOutlineAssignment, MdOutlineTopic } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { FaFirstOrderAlt } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
const AdminNav = () => {
  return (
    <div className=" w-full bg-[#1B1D48]    h-screen  ">
      <div className='w-[134px] mx-auto mt-[19px]'>
        <Link to='/'><img src={adminLogo} alt="" /></Link>
      </div>
      <div className="  w-full  ">

        <ul className="menu w-[224px] mx-auto p-2 rounded-box">
          <li>
            <Link to="/admindashboard/mycourse">
              <div className="flex gap-4 items-center hover:">
                <MdOutlineTopic></MdOutlineTopic>
                <h2>My Courses</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/student-list">
              <div className="flex gap-4 items-center">
                <GiGraduateCap></GiGraduateCap>
                <h2>Student List</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/assignment-list">
              <div className="flex gap-4 items-center">
                <MdOutlineAssignment></MdOutlineAssignment>
                <h2>Assignment</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/update-coupon">
              {/* <Link to="/dashboard/profile"> */}
              <div className="flex gap-4 items-center">
                <RiCoupon2Line className='text-white' />
                <h2>Coupon</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/upload-Resource">
              {/* <Link to="/dashboard/profile"> */}
              <div className="flex gap-4 items-center">
                <FaFirstOrderAlt className='text-white'></FaFirstOrderAlt>
                <h2>Resources</h2>
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>
          </li>

        </ul>
        {/* divider */}
        <div className="divider "></div>
        {/* profile */}
        {/* <ul className="menu   p-2 rounded-box">
          <li>
            <div
              //   onClick={handleLogout}
              className="flex items-center w-[224px] mx-auto text-red-600"
            >
              <BiLogIn className='text-white'></BiLogIn>
              <h2 className='text-white'>Log Out</h2>
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default AdminNav;