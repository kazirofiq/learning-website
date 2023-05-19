import React from 'react';
import mentor_image from '../../../../assest/mentor/mentor.png'
import fb from '../../../../assest/mentor/social_icon/fb.png'
import linkedin from '../../../../assest/mentor/social_icon/linkedin.png'
import { Link } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';

const Mentor = () => {
    return (
        <section className='w-[320px] lg:w-[1110px] mx-auto my-6' id='mentor'>
            <div className='w-[320px] lg:w-[743px]'>
                <p className='text-xl lg:text-2xl text-center lg:text-start font-bold leading-[30px] lg:leading-9 text-[#1B1D48] poppins w-[320px]'>Meet Your Mentor</p>

                <div className='lg:flex block mx-auto'>
                    <div className='' >
                        <img src={mentor_image} alt="" className='lg:w-[186px] object-cover h-[194.02px] mx-auto lg:mr-[17px] mt-[9px]' />
                    </div>
                    <div className='poppins mt-[3px] lg:mt-5 lg:text-start text-center'>
                        <p className='text-[#333333] text-base lg:text-xl leading-[30px] font-semibold'>Rakib Ahmad</p>
                        <p className='text-[#666666] text-[12px] leading-[18px] font-light'>Author | Instructor
                        </p>
                        <p className=' w-[320px] lg:w-[520px] text-justify mt-4 text-[#666666] text-base leading-[21px] lg:leading-6 font-normal'>
                            Rakib is a seasoned mentor with a passion for teaching self-publishing. With years of experience in the industry, Rakib has honed his expertise in Kindle Direct Publishing (KDP) and has helped countless aspiring authors achieve success on Amazon. His engaging teaching style and practical approach have made him a sought-after instructor on his website, Learn With Rakib, and YouTube channel. Rakib's dedication to empowering others with knowledge and skills in self-publishing has earned him a reputation as a trusted mentor in the industry.
                        </p>

                        {/* <p className='block lg:hidden text-center mx-auto w-[320px] lg:w-[520px] mt-3 lg:mt-4 text-[#666666] text-base leading-[21px] lg:leading-6 font-normal'>Experienced in working with creatives
                            <br />(image, poster, flyer, cards etc.) for
                            <br />companies and help them grow
                            <br />through branding and
                            <br />showcasing their products</p> */}

                        <div className='flex lg:mx-0 mx-auto lg:w-[104px] w-[92px] gap-3 lg:gap-4 mt-4 lg:mt-6 items-center'>
                            <Link target='blank' to='https://www.facebook.com/groups/learnwithrakib'><img className='w-[14px] h-[14px]' src={fb} alt="" /></Link>
                            <Link target='blank' to='https://www.youtube.com/@learnwithrakib17'><AiFillYoutube className='text-xl  text-[#3d419f]'></AiFillYoutube></Link>
                            <Link target='blank' to='https://www.linkedin.com/in/learnwithrakib/'><img className='w-[14px] h-[14px]' src={linkedin} alt="" /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mentor;