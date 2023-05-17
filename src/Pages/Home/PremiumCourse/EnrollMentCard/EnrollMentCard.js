import React from 'react';
import access from "../../../../assest/buyCourseCardIcon/access.png";
import lesson from "../../../../assest/buyCourseCardIcon/Lesson.png";
import instractor from "../../../../assest/buyCourseCardIcon/Instructor.png";
import group from "../../../../assest/buyCourseCardIcon/Group.png";
import time from "../../../../assest/buyCourseCardIcon/Time.png";
import { useState } from 'react';
import { useEffect } from 'react';
import './EnrollMentCard.css';
import PricingSection from './PricingSection/PricingSection';
const EnrollMentCard = () => {

    const [activeItem, setActiveItem] = useState(null);
    // const [isModalChecked, setIsModalChecked] = useState(false);

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
        activeItem === undefined
        &&
        <div className={`${(activeItem !== "frequentlyAskedQuestion") ? `lg:mt-[-200px] mx-auto` : "hidden"} ${(activeItem === "free-course" || activeItem === "frequentlyAskedQuestion") ? "hidden" : ""}`}>
            <div className="card poppins w-[320px] lg:w-[350px] bg-base-100 shadow-xl inline-block sticky top-0">

                <iframe className="w-[320px] lg:w-[350px] yt-video-rounded h-[300px] rounded-lg" src="https://player.vdocipher.com/v2/?otp=20160313versASE323czxXBX5KQ1tFFcIliU2oeit2Js8i1KRzT2v1ubP8pDNZmr&playbackInfo=eyJ2aWRlb0lkIjoiODI1OTJkMTcxNzg4NDc0OTlhYTdiMmI1NjViNWRlZGYifQ==" title="YouTube video player" frameborder="0" allow="accelerometer; mute; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>

                {/* <EnrollMentCardModal modalId="openEnrollMentModal" setIsChecked={setIsModalChecked}>
                    <iframe className="w-[320px] lg:w-[730px] lg:h-[450px] h-[300px]" src={`${isModalChecked && "https://player.vdocipher.com/v2/?otp=20160313versASE323czxXBX5KQ1tFFcIliU2oeit2Js8i1KRzT2v1ubP8pDNZmr&playbackInfo=eyJ2aWRlb0lkIjoiODI1OTJkMTcxNzg4NDc0OTlhYTdiMmI1NjViNWRlZGYifQ=="}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </EnrollMentCardModal> */}
                <div className="card-body lg:px-[25px] p-3 mt-4 lg:mt-[0px]">
                    <div className=''>
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={instractor} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Instructor</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>Rakib Ahmad</h4>
                        </div>
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={time} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Duration</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>4 Month</h4>
                        </div>
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={lesson} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Lesson</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>250+</h4>
                        </div>
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={group} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Course Level</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>Advance</h4>
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
                    <PricingSection />
                </div>
            </div>
        </div>

    );
};

export default EnrollMentCard;