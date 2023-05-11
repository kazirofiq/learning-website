import React, { useEffect, useState } from "react";
import "./MyCourse.css";

import { AiOutlinePlus } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const MyCourse = () => {
  useTitle('My Course - ');
  const location = useLocation();
  const [activeDraft, setActiveDraft] = useState(false);

  useEffect(() => {
    if (location.pathname === "/admindashboard/mycourse/draftcourse") {
      setActiveDraft(true)
    }
    else {
      setActiveDraft(false)
    }
  }, [location.pathname]);

  return (
    <div className="table-back bg-white mt-6 ">
      <h2 className="p-4 text-[#282B6B] text-[24px] font-semibold leading-[24px]">Courses</h2>
      <div className="grid grid-cols-[1fr_120px]">
        <div className="p-4">
          <ul className=" menu-horizontal bg-[#ECECF5] hover:text-white rounded-xl">
            <li className={`py-1 rounded-xl px-5 ${activeDraft || "bg-[#3D419F]"}`}>
              <Link to="/admindashboard/mycourse"
              //   onClick={setActive("courseList")}
              >Course List</Link>
            </li>
            <li className={`py-1 rounded-xl px-5 ${activeDraft && "bg-[#3D419F]"}`}>
              <Link to="/admindashboard/mycourse/draftcourse"
              //   onClick={setActive("draftCourse")}
              >Draft Course</Link>
            </li>
          </ul>
        </div>

        <div className="flex create justify-center items-center mr-4 border-[#3D419F] gap-2">
          <AiOutlinePlus className="text-[#3D419F]"></AiOutlinePlus>
          <h2 className="text-[#3D419F] font-[400] leading-[24px]">Create</h2>
        </div>
      </div>
      <Outlet></Outlet>
      {/* {
        active === "courseList" && 
      }
      {
        active === "draftCourse" && 
      } */}


    </div>
  );
};

export default MyCourse;
