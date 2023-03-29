import React from 'react';
import videoImg from "../../../../assest/staticVideoImg/Rectangle-6734.png";
import videoPlayIcon from "../../../../assest/staticVideoImg/Frame-56.png";
import access from "../../../../assest/buyCourseCardIcon/access.png";
import enroll from "../../../../assest/buyCourseCardIcon/Enroll 1.png";
import lesson from "../../../../assest/buyCourseCardIcon/Lesson.png";
import instractor from "../../../../assest/buyCourseCardIcon/Instructor.png";
import group from "../../../../assest/buyCourseCardIcon/Group.png";
import time from "../../../../assest/buyCourseCardIcon/Time.png";

const EnrollMentCard = () => {
    return (
        <div>
            <div className="card poppins w-[350px] bg-base-100 shadow-xl ">
                <div className='relative cursor-pointer'>
                <figure>
                <img src={videoImg} alt="video" />
                   <div className='absolute flex justify-center items-center'>
                    <img  className='mr-4' src={videoPlayIcon} alt="" />
                    <h4 className='text-[24px] text-[#FFFFFF] font-bold leading-[36px]'>Preview</h4>
                   </div>
                </figure>
                </div>
            
            <div className="card-body p-[25px]">
               <div>
               <div className="alert alert- h-[44px] rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between">
                <div className='flex items-center'>
                    <img className='h-[20px] w-[22px]' src={instractor} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Instructor</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>Rasel Mondol</h4>
        </div>
        <div className="alert alert- h-[44px] rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between">
                <div className='flex items-center'>
                    <img className='h-[20px] w-[22px]' src={time} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Duration</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>3 Month</h4>
        </div>
        <div className="alert alert- h-[44px] rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between">
                <div className='flex items-center'>
                    <img className='h-[20px] w-[22px]' src={lesson} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Lesson</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>24</h4>
        </div>
        <div className="alert alert- rounded-none h-[44px] bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between">
                <div className='flex items-center'>
                    <img className='h-[20px] w-[22px]' src={enroll} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Enrolled</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>35 Student</h4>
        </div>
        <div className="alert alert- rounded-none h-[44px] bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between">
                <div className='flex items-center'>
                <img className='h-[20px] w-[22px]' src={group} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Course Level</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>Intermediate</h4>
        </div>
        <div className="alert alert- rounded-none h-[44px] bg-[#FFFFFF] flex justify-between">
                <div className='flex items-center'>
                    <img className='h-[20px] w-[22px]' src={access} alt="" />
                    <span className='font-normal text-[16px] text-[#333333]'>Access</span>
                </div>
                <h4 className='font-normal text-[16px] text-[#333333]'>Life Time</h4>
        </div>
               </div>
               {/* pricing section */}
               <div className='flex justify-between items-center mt-[46px] px-[32px]'>
                    <h1 className='font-medium text-2xl text-[#777777] line-through'>$1500.00</h1>
                    <h1 className='font-bold text-2xl text-[#3D419F]'>$1150.00</h1>
               </div>
                <div className="card-actions justify-center items-center w-full mt-[30px] px-[32px]">
                <button className="rounded-[10px] text-[16px] font-[600] text-[#FFFFFF] bg-[#3D419F] py-[10px] w-full">Enroll Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EnrollMentCard;