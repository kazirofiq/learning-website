import React, { useEffect, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import "./MyCourse.css";

import { AiOutlinePlus } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import CourseList from "../CourseList/CourseList";
import DraftCourse from "../DraftCourse/DraftCourse";
import SendNotification from "../SendNotificationModal/SendNotificationModal";
import SendNotificationModal from "../SendNotificationModal/SendNotificationModal";

const MyCourse = () => {
    
    const location = useLocation();
  // console.log(location.pathname);
  const [activeDraft, setActiveDraft] = useState(false);
  useEffect( () => {
    if(location.pathname === "/admindashboard/mycourse/draftcourse") {
      setActiveDraft(true)
    }
    else{
      setActiveDraft(false)
    }
  }, [location.pathname])
  return (
    <div className="table-back bg-white mt-6 ">
      <h2 className="p-4 text-[#282B6B] text-[24px] font-semibold leading-[24px]">Courses</h2>
      <div className="grid grid-cols-[1fr_120px]">
        <div className="p-4">
          <ul className=" menu-horizontal bg-[#ECECF5] hover:text-white rounded-xl">
            <li className={`hover:bg-[#3D419F]  py-1 rounded-xl px-5 ${activeDraft || "bg-[#3D419F]"}`}>
              <Link to="/admindashboard/mycourse"
            //   onClick={setActive("courseList")}
              >Course List</Link>
            </li>
            <li className={`hover:bg-[#3D419F]  py-1 rounded-xl px-5 ${activeDraft && "bg-[#3D419F]"}`}>
              <Link to="/admindashboard/mycourse/draftcourse"
            //   onClick={setActive("draftCourse")}
              >Draft Course</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex create justify-center items-center mr-4 border-[#3D419F] gap-2">
        <label htmlFor="my-modal-3" className="flex justify-center items-center gap-2 ">
              <AiOutlinePlus className="text-[#3D419F]"></AiOutlinePlus>
            <h2 className="text-[#3D419F] font-[400] leading-[24px]">Create</h2>
      </label>
           
        </div>
      </div>
      <Outlet></Outlet>
      {/* {
        active === "courseList" && 
      }
      {
        active === "draftCourse" && 
      } */}
      
      <SendNotificationModal></SendNotificationModal>
    </div>
  );
};

export default MyCourse;
