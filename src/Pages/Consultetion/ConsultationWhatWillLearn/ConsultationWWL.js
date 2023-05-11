import React from 'react';
import checkIcon from "../../../assest/buyCourseCardIcon/Group 1000003311.png";
const ConsultationWWL = () => {
    return (
        <div className='pt-0 pb-[36px] lg:pt-[48px] lg-pb-[48px]'>
            <div className='mt-6 poppins px-[20px] lg:px-[145px]'>
                <div className='mx-auto max-w-[750px mx-auto]' id="WhatWillYouLearn">
                    <h2 className='font-bold text-2xl text-[#1B1D48] text-left'>What Will You Learn?</h2>
                    <div className='mt-2 lg:mt-5 max-w-[850px]'>
                        <ul className='mt-2 lg:mt-5  justify-center mx-auto grid grid-cols-1 lg:grid-cols-2'>
                            <li className='flex pb-4 lg:mr-5'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Strategies for self-publishing on Amazon's KDP platform, including book formatting, publishing process, and marketing tips.</span>
                            </li>
                            <li className='flex  pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Techniques for optimizing your profile and gigs on Fiverr to attract more clients and increase your earnings.</span>
                            </li>
                            <li className='flex pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Tips on how to effectively use Freepik, a popular platform for finding and using design resources, to enhance your creative projects.</span>
                            </li>
                            <li className='flex pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Guidance on creating captivating line art illustrations, including techniques for sketching, inking, and adding details.</span>
                            </li>
                            <li className='flex pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Tips and tricks for using Adobe Illustrator, a powerful vector graphics software, to create stunning artwork and designs.</span>
                            </li>
                            <li className='flex pb-4' pb-4>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Insights on how to effectively price your services and negotiate contracts to maximize your freelancing income.</span>
                            </li>
                            <li className='flex pb-4'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Strategies for building a strong online presence and marketing yourself as a freelance creative professional.</span>
                            </li>
                            <li className='flex'>
                                <img className='h-4 w-4 mr-[11px]' src={checkIcon} alt="" />
                                <span className='font-normal text-sm lg:text-base text-[#666666]'>Guidance on time management, productivity, and client communication to help you streamline your freelancing workflow and deliver outstanding results.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationWWL;