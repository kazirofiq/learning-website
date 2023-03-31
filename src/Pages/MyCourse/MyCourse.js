import React from 'react';
import { Link } from 'react-router-dom';

const MyCourse = () => {
    return (
        <div className=" w-full rounded-lg  mr-6 h-screen mt-6 ml-6  ">
      <div className=" bg-white w-full  rounded-lg">
        <ul className="menu bg-white p-2 rounded-box">
          <li>
            <Link to="/dashboard">
              <div className="flex gap-4 items-center hover:">
                <h2>Dashboard</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/document">
              <div className="flex gap-4 items-center">
                <h2>Document</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/calender">
              <div className="flex gap-4 items-center">
                <h2>Calender</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/activity">
              <div className="flex gap-4 items-center">
                <h2>Activity</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/profile">
              <div className="flex gap-4 items-center">
                <h2>Profile</h2>
              </div>
            </Link>
          </li>
        </ul>
        {/* divider */}
        <div className="divider p-10 bg-white"></div>
        {/* profile */}
        <ul className="menu bg-white  p-2 rounded-box">
          <li>
            <div className="flex items-center">
              <input type="checkbox" className="toggle text-sm" checked />
              <h2>Darkmode</h2>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
              <h2>Settings</h2>
            </div>
          </li>
          <li>
            <div
              className="flex items-center text-red-600"
            >
              <h2>Log Out</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default MyCourse;