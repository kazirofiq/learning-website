import React from 'react';
import checkIcon from "../../../../assest/buyCourseCardIcon/Group 1000003311.png";
const WhatWillYouLearn = () => {
    return (
        <div className='mt-6 poppins'>
            <h3 className='font-bold text-2xl text-[#1B1D48]'>What Will You Learn?</h3>
            <div className='mt-5'>
                <ul className='mt-5 grid grid-cols-2 gap-y-5'>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Learn Figma Basic to Advanced Design</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Create quick wireframes</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Become a UX designer</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Downloadable exercise files</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>You will be able to add UX designer to</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Build a UX project from beginning to end</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Build & test a full website design</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                         <span className='font-normal text-base text-[#666666]'>Learn to design websites & phone apps</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhatWillYouLearn;