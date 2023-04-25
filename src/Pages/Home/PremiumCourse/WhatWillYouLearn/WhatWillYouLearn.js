import React from 'react';
import checkIcon from "../../../../assest/buyCourseCardIcon/Group 1000003311.png";
const WhatWillYouLearn = () => {
    return (
        <div className='mt-6 poppins'>
            <h3 className='font-bold text-2xl text-[#1B1D48]'>What Will You Learn?</h3>
            <div className='mt-2 lg:mt-5'>
                <ul className='mt-2 lg:mt-5 grid grid-cols-1 lg:grid-cols-1 lg:gap-y-5 gap-y-3'>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>How to identify and validate profitable book ideas for Kindle Direct Publishing (KDP)</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Strategies for effective book planning, outlining, and organization</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Techniques for creating high-quality book covers and interior that stand out on KDP</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Best practices for formatting and preparing manuscripts for publishing on KDP</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Insider tips on optimizing book metadata, keywords, and categories for maximum visibility</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Proven marketing strategies to boost book sales, including Amazon ads and book promotions</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'> Building a successful author platform on Amazon, including author pages and book series</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'> Strategies for getting more book reviews and leveraging social media for book promotion</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Exploring the future of AI in self-publishing and staying updated with the latest AI trends and tools.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Tools, resources, and AI power to streamline the self-publishing process and save time and effort.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhatWillYouLearn;