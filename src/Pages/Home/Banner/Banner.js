import React, { useState } from 'react';
import './Banner.css';
import bannerRightPic from '../../../assest/bg-img/bannerright (1).png';
import arrow from '../../../assest/bg-img/Arrow.png'
import start_button from '../../../assest/banner/start_button.png';
import HowItWorksVideo from './HowItWorksVideo';

const Banner = () => {

    const [openVideo, setOpenVideo] = useState(null);

    return (
        <section className='bg-[#F8F8FF]'>
            <div className='max-w-[1350px] lg:px-11 mx-auto flex-row-reverse lg-w-full lg:flex md:flex pt-5 lg:pt-0 pb-[40px] lg:pb-[90px] items-center px-5'>
                <div className='flex-row w-full lg:ml-[31px] lg:mt-3'>
                    <img className='w-full' src={bannerRightPic} alt="" />
                </div>
                <img className='hidden lg:block absolute right-[56%] bottom-[32%]' src={arrow} alt="arrow" />
                <div className='flex-row w-full lg:mr-[31px]'>
                    <h1 className='text-4xl lg:text-[56px] md:text-[50px] text-[#1B1D48] lg:leading-[80px] sm:leading-[60px] mb-[30px] lg:w-[542px] sm:w-[320px] font-bold lg:text-left md:text-left text-center pt-6 lg:p-0'>Learning Online is <span className='text-[#38A27B] lg:block'>Now Much Easier</span></h1>
                    <p className='text-[#666666] leading-6 text-[16px] mb-11 lg:text-left md:text-left text-center'>Learn With Rakib is an interesting platform that will teach you in <br /> more an interactive way</p>

                    <div className='lg:flex items-center sm:block mx-auto lg:mx-0'>
                        <div className='flex justify-center'>
                            <a href='/' className=' gs_sm lg:gs lg:mr-7 text-white text-sm lg:text-lg lg:font-bold font-semibold'> Start Learning</a>
                        </div>
                        <div className='flex justify-center mr-8 lg:mt-0 mt-4'>

                            <label
                                htmlFor="openVideoModal"
                                className="">
                                <img src={start_button} alt="" className='w-12 h-12 lg:w-[60px] lg:h-[60px] cursor-pointer' />
                            </label>

                            {/* Please do not delete below code! */}
                            {/* <Link><PlayAndPauseButton></PlayAndPauseButton></Link> */}
                            <div className='flex items-center'><p className='pl-[12px] poppins font-medium lg:text-lg text-sm'>How It Works</p></div>
                        </div>
                    </div>

                    <div className='flex items-center lg:mt-[39px] mt-7 w-[320px] lg:w-[407px]'>
                        <p className='line'></p>
                        <div className='ml-[20px] lg:ml-8 lg:w-[128px]'>
                            <h4 className='text-3xl lg:text-[32px] text font-bold'>120+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Happy Students</p>
                        </div>
                        <div className='ml-[20px] lg:ml-8 lg:w-[128px]'>
                            <h4 className='text-3xl lg:text-[32px] text font-bold'>25+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Active User</p>
                        </div>
                        <div className='ml-[20px] lg:ml-8 lg:w-[128px]'>
                            <h4 className='text-3xl lg:text-[32px] text font-bold'>5+</h4>
                            <p className='text-sm lg:text-[16px] text2'>Online Classes</p>
                        </div>
                    </div>
                </div>
            </div>

            <HowItWorksVideo
                setOpenVideo={setOpenVideo}
            ></HowItWorksVideo>
            {/* <MessageBox></MessageBox> */}
        </section >
    );
};

export default Banner;