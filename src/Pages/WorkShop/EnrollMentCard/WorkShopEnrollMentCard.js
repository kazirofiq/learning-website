import React from 'react';
import videoImg from "../../../assest/staticVideoImg/Rectangle-6734.png";
import videoImgResponsive from "../../../assest/staticVideoImg/Video Player.png";
import videoPlayIcon from "../../../assest/staticVideoImg/Frame-56.png";
import access from "../../../assest/buyCourseCardIcon/access.png";
import enroll from "../../../assest/buyCourseCardIcon/Enroll 1.png";
import instractor from "../../../assest/buyCourseCardIcon/Instructor.png";
import group from "../../../assest/buyCourseCardIcon/Group.png";
import time from "../../../assest/buyCourseCardIcon/Time.png";
import './EnrollMentCard.css';
import WorkShopPricingSection from './WorkShopPricingSection/WorkShopPricingSection';

const WorkShopEnrollMentCard = () => {

    return (

        <div className="lg:mt-[-200px] mx-auto" >
            <div className="card poppins w-[320px] lg:w-[350px] bg-base-100 shadow-xl inline-block sticky top-0">
                <div className='relative cursor-pointer'>
                <iframe className="w-[320px] lg:w-[350px] yt-video-rounded h-[300px] rounded-lg" src="https://player.vdocipher.com/v2/?otp=20160313versASE323czxXBX5KQ1tFFcIliU2oeit2Js8i1KRzT2v1ubP8pDNZmr&playbackInfo=eyJ2aWRlb0lkIjoiODI1OTJkMTcxNzg4NDc0OTlhYTdiMmI1NjViNWRlZGYifQ==" title="YouTube video player" frameborder="0" allow="accelerometer; mute; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>

                </div>


                <div className="card-body lg:px-[25px] p-3 mt-6 lg:mt-[0px]">
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
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>2 Hours</h4>
                        </div>
                        {/* <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                    <div className='flex items-center'>
                        <img className='h-5 w-[22px] mr-[9px]' src={lesson} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#333333]'>Lesson</span>
                    </div>
                    <h4 className='font-normal text-sm lg:text-base text-[#333333]'>24</h4>
                </div> */}
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={enroll} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Enrolled</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'>00 Student</h4>
                        </div>
                        <div className="
                 h-11 rounded-none bg-[#FFFFFF] border-b-[1px] border-[#E6E6E6] flex justify-between items-center lg:px-0 px-3">
                            <div className='flex items-center'>
                                <img className='h-5 w-[22px] mr-[9px]' src={group} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#333333]'>Workshop Level</span>
                            </div>
                            <h4 className='font-normal text-sm lg:text-base text-[#333333]'> Advance</h4>
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
                    <WorkShopPricingSection />
                </div>
            </div>
        </div>

    );
};

export default WorkShopEnrollMentCard;