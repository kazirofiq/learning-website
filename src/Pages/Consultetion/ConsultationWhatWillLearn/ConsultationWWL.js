import React from 'react';
import checkIcon from "../../../assest/buyCourseCardIcon/Group 1000003311.png";
const ConsultationWWL = () => {
    return (
        <div className='py-[48px]'>
            <div className='mt-6 poppins px-[20px] lg:px-[145px]'>
                <div className='mx-auto max-w-[750px mx-auto]' id="WhatWillYouLearn">
                    <h2 className='font-bold text-2xl text-[#1B1D48] text-center'>What Will You Learn?</h2>
                    <div className='mt-2 lg:mt-5 mx-auto max-w-[750px]'>
                        <ul className='mt-2 lg:mt-5  justify-center mx-auto grid grid-cols-1 lg:grid-cols-2'>
                            <li className='flex items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Learn Figma Basic to Advanced Design</span>
                            </li>
                            <li className='flex  items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Create quick wireframes</span>
                            </li>
                            <li className='flex items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Become a UX designer</span>
                            </li>
                            <li className='flex items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Downloadable exercise files</span>
                            </li>
                            <li className='flex items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>You will be able to add UX designer to</span>
                            </li>
                            <li className='flex items-center pb-4' pb-4>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Build a UX project from beginning to end</span>
                            </li>
                            <li className='flex items-center pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Build & test a full website design</span>
                            </li>
                            <li className='flex items-center'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Learn to design websites & phone apps</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationWWL;