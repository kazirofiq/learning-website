import React from 'react';
import videoImg from "../../../../assest/staticVideoImg/Rectangle-6734.png";
import videoImgResponsive from "../../../../assest/staticVideoImg/Video Player.png";
import videoPlayIcon from "../../../../assest/staticVideoImg/Frame-56.png";
import access from "../../../../assest/buyCourseCardIcon/access.png";
import enroll from "../../../../assest/buyCourseCardIcon/Enroll 1.png";
import lesson from "../../../../assest/buyCourseCardIcon/Lesson.png";
import instractor from "../../../../assest/buyCourseCardIcon/Instructor.png";
import group from "../../../../assest/buyCourseCardIcon/Group.png";
import time from "../../../../assest/buyCourseCardIcon/Time.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './EnrollMentCard.css';
import PricingSection from './PricingSection/PricingSection';
const EnrollMentCard = () => {

    const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {

  const handleScroll = () => {
    const menuItemIds = ['frequentlyAskedQuestion', 'free-course'];
    const menuItems = menuItemIds.map(id => document.getElementById(id));
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let activeIndex = menuItemIds.length + 1;

    menuItems.forEach((item, index) => {
      const top = item.offsetTop - 50; // subtract header height
      const bottom = top + item.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        activeIndex = index;
      }
    });

    setActiveItem(menuItemIds[activeIndex]);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }, []);

    return (
    //    <div className={activeItem==="free-course" && "hidden"}>
         <div  className={`${
            (activeItem !== "free-course" && activeItem !== "frequentlyAskedQuestion") ? "lg:mt-[-200px] mx-auto" : "hidden"
          } ${
            (activeItem === "free-course" || activeItem === "frequentlyAskedQuestion") ? "hidden" : ""
          }`}>
            <div className="card poppins w-[320px] lg:w-[350px] bg-base-100 shadow-xl inline-block sticky top-0">
                <div className='relative cursor-pointer'>
                    <figure>
                        <img className='lg:block hidden' src={videoImg} alt="video" />
                        <img className='lg:hidden block' src={videoImgResponsive} alt="" />
                        <div className='absolute flex justify-center items-center'>
                            <img className='lg:mr-4 lg:w-full w-9 mr-2' src={videoPlayIcon} alt="" />
                            <h4 className='lg:text-2xl text-lg text-[#FFFFFF] font-bold leading-[36px]'>Preview</h4>
                        </div>
                    </figure>
                </div>

               
                <div className="card-body lg:px-[25px] p-3 mt-4 lg:mt-[0px]">
                    <div className=''>
                        <div className="
                         h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={instractor} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Instructor</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>Rasel Mondol</h4>
                        </div>
                        <div className="
                         h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={time} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Duration</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>3 Month</h4>
                        </div>
                        <div className="
                         h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={lesson} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Lesson</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>24</h4>
                        </div>
                        <div className="
                         h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={enroll} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Enrolled</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>35 Student</h4>
                        </div>
                        <div className="
                         h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={group} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Course Level</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>Intermediate</h4>
                        </div>
                        <div className="
                         h-11 rounded-none border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={access} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Access</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>Life Time</h4>
                        </div>
                    </div>
                    {/* pricing section */}
                    <PricingSection />
                </div>
            </div>
        </div>
    //   </div>
    );
};

export default EnrollMentCard;