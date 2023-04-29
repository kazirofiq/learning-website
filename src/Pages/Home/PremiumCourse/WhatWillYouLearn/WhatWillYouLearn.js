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
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Mastering the art of freelancing on platforms like Fiverr, Freepik, and KDP</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Techniques and strategies to create high-quality line art and illustrations.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Best practices for optimizing gigs, profiles, and listings on freelancing platforms.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Insider tips on how to attract and retain clients for long-term success.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Strategies for pricing, negotiating, and managing freelance projects effectively.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>In-depth knowledge about the latest trends and industry insights in the freelancing world.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Step-by-step guidance on setting up and managing a successful freelancing business.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Practical tips on time management, productivity, and goal-setting for freelancers.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Exploring the future of AI in self-publishing and staying updated with the latest AI trends and tools.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Techniques for building a professional portfolio and branding your freelancing services.</span>
                    </li>
                    <li className='flex items-center'>
                        <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                        <span className='font-normal text-sm lg:text-base text-[#666666]'>Access to exclusive resources, tools, and templates to streamline your freelancing</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhatWillYouLearn;