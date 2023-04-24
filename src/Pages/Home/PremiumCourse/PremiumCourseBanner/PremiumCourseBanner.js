import React from 'react';
import bannerImg from "../../../../assest/banner/Header.png"
import bannerResponsiveImg from "../../../../assest/banner/Header1.png"
import AboutTheCourse from '../AboutTheCourse/AboutTheCourse';
import EnrollMentCard from '../EnrollMentCard/EnrollMentCard';
import PremiumCourseNavebar from '../Navebar/PremiumCourseNavebar';
import WhatWillYouLearn from '../WhatWillYouLearn/WhatWillYouLearn';
import CourseCurriculum from './../CourseCurriculum/CourseCurriculum';
import Mentor from './../Mentor/Mentor';
import LearnerReview from './../LearnerReview/LearnerReview';
import FrequentlyAskedQuestion from './../FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import FreeVideo from './../FreeVideo/FreeVideo';
const PremiumCourseBanner = () => {
    return (
        <div className='poppins'>
            <img className='lg:block w-full hidden' src={bannerImg} alt="" />
            <img className='lg:hidden block mx-auto' src={bannerResponsiveImg} alt="" />
            <div className='lg:grid flex flex-col lg:w-[1110px] w-[360px] mx-auto mt-[38px] gap-4 lg:gap-[30px]' style={{ gridTemplateColumns: "4fr 1fr" }}>
                <div className='lg:w-[743px] w-[320px] lg:px-0 px-5'>
                    <h2 className='text-[#38A27B] lg:text-[40px] text-[24px] font-bold lg:leading-[60px] leading-9'><span className='text-[#1B1D48] lg:inline-block block lg:w-[720px] w-[320px]'>Graphic Design Bootcamp:<br /> </span> Photoshop, Illustrator, InDesign</h2>
                    <p className='lg:block hidden text-sm lg:text-[16px] font-normal leading-6 text-[#666666] mt-[18px]'>Learn With Rakib is an interesting platform that will teach you in <br /> more an interactive way</p>
                    <p className='lg:hidden block text-base lg:w-[720px] w-[320px] font-normal leading-6 text-[#666666] mt-[18px]'>Learn With Rakib is an interesting platform that will teach you in more an interactive way</p>
                    <div className='lg:block hidden'>
                        <PremiumCourseNavebar />
                        <AboutTheCourse />
                        <WhatWillYouLearn />
                        <CourseCurriculum />
                        <Mentor></Mentor>
                        <LearnerReview></LearnerReview>
                        <FrequentlyAskedQuestion />
                        <FreeVideo></FreeVideo>
                    </div>

                </div>
                <EnrollMentCard />
                <div className='lg:hidden block'>
                    <PremiumCourseNavebar />
                    <AboutTheCourse />
                    <WhatWillYouLearn />
                    <CourseCurriculum />
                    <Mentor></Mentor>
                    <LearnerReview></LearnerReview>
                    <FrequentlyAskedQuestion />
                    <FreeVideo></FreeVideo>
                </div>
            </div>
        </div>
    );
};

export default PremiumCourseBanner;