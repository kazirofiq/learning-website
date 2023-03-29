import React from 'react';
import bannerImg from "../../../../assest/banner/Header.png"
import EnrollMentCard from '../EnrollMentCard/EnrollMentCard';
const PremiumCourseBanner = () => {
    return (
        <div className='poppins'>
            <img src={bannerImg} alt="" />
           <div className='grid w-[1010px] mx-auto mt-[38px] gap-[30px]' style={{gridTemplateColumns:"4fr 1fr"}}>
           <div>
                <h2 className='text-[#38A27B] text-[40px] font-bold leading-[60px]'><span className='text-[#1B1D48]'>Graphic Design Bootcamp:<br /> </span> Photoshop, Illustrator, InDesign</h2>
                <p className='text-[16px] font-normal leading-6 text-[#666666] mt-[18px]'>Learn With Rakib is an interesting platform that will teach you in <br /> more an interactive way</p>
            </div>
            <EnrollMentCard />
           </div>
        </div>
    );
};

export default PremiumCourseBanner;