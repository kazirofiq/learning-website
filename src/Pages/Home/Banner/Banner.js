import React from 'react';
import './Banner.css';
import bannerRightPic from '../../../assest/bg-img/bannerright (1).png';
import arrow from '../../../assest/bg-img/Arrow.png'

const Banner = () => {
    return (
        <section className='bg-[#F8F8FF]'>
            <div className='max-w-[1350px] mx-auto flex-row-reverse lg-w-full lg:flex md:flex pt-5 lg:pt-0 pb-[40px] lg:pb-[90px] items-center lg:px-0 px-5 relative'>
                <div className='flex-row w-full lg:ml-[31px] lg:mt-3'>
                    <img className='w-full' src={bannerRightPic} alt="" />
                </div>
                <img className='hidden lg:block absolute right-[56%] bottom-[32%]' src={arrow} alt="arrow" />
                <div className='flex-row w-full lg:mr-[31px]'>
                    <h1 className='text-4xl lg:text-[56px] md:text-[50px] text-[#1B1D48] lg:leading-[80px] sm:leading-[60px] mb-[30px] lg:w-[542px] sm:w-[320px] font-bold lg:text-left md:text-left text-center pt-6 lg:p-0'>Learning Online is <span className='text-[#38A27B] lg:block'>Now Much Easier</span></h1>
                    <p className='text-[#666666] leading-6 text-[16px] mb-11 lg:text-left text-center'>Learn With Rakib is an interesting platform that will teach you in more an interactive way</p>
                    <div className='flex items-center'>
                        <a href='/' className='gssm lg:gs text-white text-sm lg:text-lg font-bold'>Get Started</a>
                        <p className='pl-[30px]'>How it Works</p>
                    </div>

                    <div className='flex items-center lg:mt-[39px] mt-7'>
                        <p className='line'></p>
                        <div className='ml-[10px] lg:ml-8'>
                            <h4 className='text-xl lg:text-[32px] text font-bold'>120+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Happy Students</p>
                        </div>
                        <div className='ml-[10px] lg:ml-8'>
                            <h4 className='text-xl lg:text-[32px] text font-bold'>25+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Active User</p>
                        </div>
                        <div className='ml-[10px] lg:ml-8'>
                            <h4 className='text-xl lg:text-[32px] text font-bold'>5+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Online Classes</p>
                        </div>
                    </div>
                </div>
            </div>
       </section >
    );
};

export default Banner;