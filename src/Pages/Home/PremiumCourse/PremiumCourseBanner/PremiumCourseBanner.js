import React from 'react';
import bannerImg from "../../../../assest/banner/Header.png"
import AboutTheCourse from '../AboutTheCourse/AboutTheCourse';
import CourseCurriculam from '../CourseCurriculam/CourseCurriculam';
import EnrollMentCard from '../EnrollMentCard/EnrollMentCard';
import PremiumCourseNavebar from '../Navebar/PremiumCourseNavebar';
import WhatWillYouLearn from './../WhatWillYouLearn/WhatWillYouLearn';
const PremiumCourseBanner = () => {
    return (
        <div className='poppins'>
            <img src={bannerImg} alt="" />
           <div className='grid lg:w-[1110px] mx-auto mt-[38px] gap-[30px]' style={{gridTemplateColumns:"4fr 1fr"}}>
           <div className='lg:w-[743px]'>
                <h2 className='text-[#38A27B] text-[40px] font-bold leading-[60px]'><span className='text-[#1B1D48]'>Graphic Design Bootcamp:<br /> </span> Photoshop, Illustrator, InDesign</h2>
                <p className='text-[16px] font-normal leading-6 text-[#666666] mt-[18px]'>Learn With Rakib is an interesting platform that will teach you in <br /> more an interactive way</p>
                <PremiumCourseNavebar />
                <AboutTheCourse />
                <WhatWillYouLearn />
                <CourseCurriculam />
            </div>
            <EnrollMentCard />
           </div>
        </div>
    );
};

export default PremiumCourseBanner;