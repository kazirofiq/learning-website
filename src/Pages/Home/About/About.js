import React from 'react';
import bg from "../../../assest/bg-img/Elements.png"
const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',

            }} className="bg-[#FFFFFF]">
            <section >
                <div className="hero lg:pt-20 pb-[84px]">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-x-[185px]">
                        <div className='lg:text-left text-center'>
                            <p className='lg:text-lg text-base font-medium text-[#333333]'>About us</p>
                            <h1 className="lg:text-[40px] lg:leading-[60px] md:text-3xl text-2xl font-bold text-[#38A27B]"><span className='text-[#1B1D48]'>What Is </span>Learn With Rakib?</h1>
                            <p className="mt-3 lg:mt-0 md:mt-6 text-[16px] lg:leading-[24px] lg:text-base md:text-base text-[#666666]">Learn with Rakib is a platform that Will help you to learn, How to become a self-publisher.</p>
                            <button className="mt-6 lg:mt-10 md:mt-10 px-4 py-2 lg:px-8 lg:py-4 bg-[#3D419F] text-white rounded-xl lg:font-bold font-normal lg:text-base text-sm">Learn More</button>
                        </div>
                        <iframe className=" lg:w-1/2 rounded-lg" width="363" height="363" src="https://www.youtube.com/embed/lJ5z7sdFMKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;