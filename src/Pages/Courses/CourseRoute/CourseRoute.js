import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"

const CourseRoute = () => {

    const location = useLocation();
    // console.log(location.pathname);
    const [activeDraft, setActiveDraft] = useState(false);
    useEffect(() => {
        if (location.pathname === "/mycourses/previousworkshop") {
            setActiveDraft(true)
        }
        else {
            setActiveDraft(false)
        }
    }, [location.pathname])

    return (
        <div>
            <div className='flex items-center justify-center mt-[40px] lg:mt-[96px] md:mt-[70px]'>
                <Link to='/mycourses'>
                    <button className={`px-6 py-2 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left border inline-block text-[#C3C4E1] font-medium  focus:text-white focus:outline-none ${activeDraft || "bg-[#3D419F] text-white"}`}>
                        My Courses
                    </button>
                </Link>
                <Link to='/mycourses/previousworkshop'>
                    <button className={`px-6 py-2 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left border inline-block text-[#C3C4E1] font-medium  focus:text-white focus:outline-none ${activeDraft && "bg-[#3D419F]"}`}>
                        Workshop
                    </button>
                </Link>
            </div >
        </div>
    );
};

export default CourseRoute;