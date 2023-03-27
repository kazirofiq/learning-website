import React from 'react';
import image_rectangle from '../../../../assest/amazing_resource/Image.png';
import elements from '../../../../assest/amazing_resource/Elements.png';
import '../AmazingResource/AmazingResource.css';

const AmazingResource = () => {
    return (
        <section className='w-full lg:h-[555px] bg-[#1B1D48]' style={{
            backgroundImage: `url(${elements})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: ""
        }}>
            <div className='mx-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 max-w-[1350px] lg:mx-auto py-[40px] lg:py-[93px]'>
                <div className='text-white mx-auto sm:mt-0 w-[315px] lg:w-[540px] lg:text-left md:text-left text-center poppins'>
                    <p className=''>Amazing Resource</p>
                    <h2 className='text-[24px] lg:text-[40px] leading-9 lg:leading-[60px] font-bold lg:mt-0 mt-1'>

                        Amazon KDP Book Interior
                        <br />
                        Template <span className='text-[#38A27B]'>Free Download</span></h2>

                    <p className='lg:text-base text-sm leading-5 lg:leading-6 lg:mt-8 mt-3 lg:mb-12
                            mb-6 text-justify'>Learn with Rakib is a platform that Will help you to learn, How to become a self-publisher. Learn with Rakib is a platform that Will help you to learn, How to become a self-publisher.</p>
                    <a href='/' className='gs_sm lg:gs text-[#3D419F] text-sm lg:text-lg font-bold'>Learn More</a>
                </div>
                <div>
                    <img src={image_rectangle} alt="" className='lg:w-[547.74px] sm:w-[320px]' />
                </div>
            </div>
        </section >
    );
};

export default AmazingResource;