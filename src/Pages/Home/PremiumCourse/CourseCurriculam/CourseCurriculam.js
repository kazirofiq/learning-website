import React from 'react';
import group from "../../../../assest/buyCourseCardIcon/Group (1).png";
import time from "../../../../assest/buyCourseCardIcon/Time1.png";
import lesson from "../../../../assest/buyCourseCardIcon/Lesson1.png";
const CourseCurriculam = () => {
    return (
        <div className='mt-6'>
            <h1 className='font-bold text-2xl text-[#1B1D48]'>The Course Curriculam</h1>
            <div>
                <ul className='flex items-center gap-x-[17px]'>
                    <li className='flex items-center'>
                        <img className='mr-[7px]' src={group} alt="" />
                        <span className='font-light text-xs text-[#666666]'>Intermediate Level</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='mr-[7px]' src={lesson} alt="" />
                        <span className='font-light text-xs text-[#666666]'>15 Lesson</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='mr-[7px]' src={time} alt="" />
                        <span className='font-light text-xs text-[#666666]'>05.25.00 Total Hours</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CourseCurriculam;