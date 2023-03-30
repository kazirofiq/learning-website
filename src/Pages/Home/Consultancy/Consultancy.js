import React from 'react';
import consultancy from '../../../assest/bg-img/Image.png'

const Consultancy = () => {
    return (
        <section className='bg-[#F8F8FF]'>
            <div className="hero lg:pl-44 max-w-[1350px] lg:pb-[87px] lg:pt-[13px]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-32">
                    <div className='lg:text-left text-center'>
                        {/* <p className='lg:text-lg text-base font-medium text-[#333333]'>About us</p> */}
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold my-4 text-[#38A27B]"><span className='text-[#1B1D48]'>Design Consultation for <br /></span>Your Creative Growth</h1>
                        <p className="mt-3 lg:mt-6 md:mt-6 text-sm lg:text-base md:text-base text-[#666666]">Expert guidance for designers to jumpstart their careers and <br /> expand their work. Personalized consultations to identify strengths,<br /> set goals, and develop strategies. </p>
                        <button className="mt-6 lg:mt-10 md:mt-10 px-4 py-2 lg:px-8 lg:py-4 bg-[#3D419F] text-white rounded-xl lg:font-bold font-normal lg:text-base text-sm">Learn More</button>
                    </div>
                    {/* <iframe className=" lg:w-1/2 rounded-lg" width="363" height="363" src="https://www.youtube.com/embed/lJ5z7sdFMKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <img width="363" height="363" src={consultancy} alt="" />
                </div>
            </div>
        </section>

    );
};

export default Consultancy;