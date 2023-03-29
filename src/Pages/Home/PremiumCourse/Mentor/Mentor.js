import React from 'react';
import mentor_image from '../../../../assest/mentor/mentor.png'
import fb from '../../../../assest/mentor/social_icon/fb.png'
import twitter from '../../../../assest/mentor/social_icon/twitter.png'
import linkedin from '../../../../assest/mentor/social_icon/linkedin.png'
import instagram from '../../../../assest/mentor/social_icon/instagram.png'
import { Link } from 'react-router-dom';

const Mentor = () => {
    return (
        <section className='w-[320px] lg:w-[1110px] mx-auto my-6 bg-slate-300'>
            <div className='w-[320px] lg:w-[743px] bg-red-100'>
                <p className='text-xl lg:text-2xl text-center lg:text-start font-bold leading-[30px] lg:leading-9 text-[#1B1D48] poppins w-[320px]'>Meet Your Mentor</p>

                <div className='lg:flex block mx-auto'>
                    <div className='w-[320px] lg:w-[186px]'>
                        <img src={mentor_image} alt="" className='lg:w-[186px] h-[194.02px] mx-auto lg:mr-[17px] mt-[9px]' />
                    </div>

                    <div className='poppins mt-5 mx-5 lg:text-start text-center'>
                        <p className='text-[#333333] text-base lg:text-xl leading-[30px] font-semibold'>Rasel Mondol</p>
                        <p className='text-[#666666] text-[12px] leading-[18px] font-light'>Graphic and UI/UX Designer | Instructor
                        </p>
                        <p className='lg:block hidden w-[320px] lg:w-[520px] mt-4 text-[#666666] text-base leading-[21px] lg:leading-6 font-normal'>Experienced in working with creatives (image, poster, flyer, cards
                            <br /> etc.) for companies and help them grow through branding and
                            <br /> showcasing their products</p>

                        {/* <p className='block lg:hidden w-[320px] lg:w-[520px] mt-4 text-[#666666] text-base leading-[21px] lg:leading-6 font-normal'>Experienced in working with creatives (image,
                            <br /> poster, flyer, cards etc.) for companies and
                            <br /> help them grow through branding and
                            <br /> showcasing their products</p> */}

                        <div className='flex lg:mx-0 mx-auto lg:w-[104px] w-[92px] gap-3 lg:gap-4 mt-4 lg:mt-6'>
                            <Link><img src={fb} alt="" /></Link>
                            <Link><img src={twitter} alt="" /></Link>
                            <Link><img src={instagram} alt="" /></Link>
                            <Link><img src={linkedin} alt="" /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mentor;