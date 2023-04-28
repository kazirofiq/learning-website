import React from 'react';
import { Link } from 'react-router-dom';
import rating from '../../../../assest/learner_review/rating.png'
import './LearnerReview.css'

const Review = () => {
    return (
        <section className=''>
            <div className='w-[320px] lg:w-[730px] mx-auto lg:mx-0'>
                <div className=' border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8'>
                    <div>
                        <img src="" alt="" />
                        <div className='poppins'>
                            <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Rashidul Sony</p>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                <img src={rating} alt="" className='w-[79px] h-[11px]' />
                                <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>30-03-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[15.5px] lg:mt-[22px]'>
                        <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>"Learn with Rakib" is an amazing platform to learn about KDP. I was looking for a platform to learn about Amazon KDP from scratch, then I found this website. The mentor of this website is a very skillful person, he has an amazing ability to teach something new. So, If you're an aspiring author looking to self-publish your work on Amazon's Kindle Direct Publishing platform, then this website is an excellent resource to check out. The website offers a comprehensive guide to KDP, with step-by-step instructions</p>
                        <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course was a great match. I feel more confident in my skills in Adobe. I've worked...<Link><span className='text-blue-500'>more</span></Link></p>
                    </div>
                </div>

                <div className='w-[320px] lg:w-[730px] mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                    <div>
                        <img src="" alt="" />
                        <div className='poppins'>
                            <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Md Nishat</p>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                <img src={rating} alt="" className='w-[79px] h-[11px]' />
                                <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>17-03-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[15.5px] lg:mt-[22px]'>
                        <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>I am extremely satisfied with the offerings of Learn With Rakib. The website provides a wealth of resources, including a premium paid course on KDP and consultation services on various freelancing topics. Rakib's expertise and passion for teaching shine through in the quality of the content and guidance provided. It has been a valuable investment in my freelancing career, and I am grateful for the knowledge and support received.</p>
                        <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course is a great basic course for the beginner who is trying to get into graphic...<Link><span className='text-blue-500'>more</span></Link></p>
                    </div>
                </div>

                <div className='flex justify-center '>
                    <Link to='/allreviews' className='mt-6 lg:mt-10 text-sm lg:text-base leading-[21px] lg:leading-6 bs_sm lg:bs text-white lg:font-semibold font-medium poppins'>See More Review</Link>
                </div>
            </div>
        </section>
    );
};

export default Review;