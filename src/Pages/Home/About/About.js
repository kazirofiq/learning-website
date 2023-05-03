import React from 'react';
import bg from "../../../assest/bg-img/Elements.png"
import phone from "../../../assest/banner/Video.png"
const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',

            }} className="bg-[#FFFFFF]">
            <section >
                <div className="hero lg:pt-20  pb-[84px]">
                    <div className="hero-content flex-col lg:flex-row-reverse md:mx-[145px] gap-x-[120px] ">
                        <div className='flex-1 lg:text-left text-center'>
                            <p className='lg:text-lg text-base font-medium text-[#333333]'>About us</p>
                            <h1 className="lg:text-[40px] lg:leading-[60px] md:text-3xl text-2xl font-bold text-[#38A27B]"><span className='text-[#1B1D48]'>What Is </span>Learn With Rakib?</h1>
                            <p className="mt-3 lg:mt-0 md:mt-6 text-[16px] lg:leading-[24px] lg:text-base md:text-base text-[#666666]">Learn With Rakib is your go-to platform for KDP mastery! As your mentor, I provide expert classes on self-publishing on Kindle. Join with me to unlock your publishing success!.</p>
                            {/* <button className="mt-6 lg:mt-10 md:mt-10 px-4 py-2 lg:px-8 lg:py-4 bg-[#3D419F] text-white rounded-xl lg:font-bold font-normal lg:text-base text-sm">Learn More</button> */}
                            <div className='flex items-center gap-x-3 mt-6 lg:mt-10 ml-[100px] lg:ml-0 md:ml-[240px]'>
                                <img className='h-[44px] w-[44px] lg:w-[53px] lg:h-[53px]' src={phone} alt='' />
                                <div>
                                    <p className='text-[#666666] font-normal text-sm leading-[21px]'>Need Help?</p>
                                    <h4 className='text-[#333333] lg:text-[16px] text-sm font-semibold lg:font-bold leading-[24px]'><a href="tel:+8801612-039047">+8801612-039047</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <iframe className="rounded-lg border-none w-full max-h-[300px] lg:max-h-[initial]" width="363" height="363" src="https://www.youtube.com/embed/1-is8wiplZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;