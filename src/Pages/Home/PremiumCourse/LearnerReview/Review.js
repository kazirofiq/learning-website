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
                            <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Rasel Mondol</p>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                <img src={rating} alt="" className='w-[79px] h-[11px]' />
                                <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>30-03-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[15.5px] lg:mt-[22px]'>
                        <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>This course was a great match. I feel more confident in my skills in Adobe. I've worked with Adobe previously but always came in contact with errors and could not figure out what I was doing wrong and this course identified all of the mistakes I was making. I would recommend this course to all beginners wanting to learn more about the program. I would also make the suggestion of following what Derrick is doing, verbatim if that means pausing to follow along in whatever Adobe program he is using that really helped me work through these projects in this course. I'm excited to further what I learned and begin the Graphic Design Bootcamp: Advanced Training.</p>
                        <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course was a great match. I feel more confident in my skills in Adobe. I've worked...<Link><span className='text-blue-500'>more</span></Link></p>
                    </div>
                </div>

                <div className='w-[320px] lg:w-[730px] mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                    <div>
                        <img src="" alt="" />
                        <div className='poppins'>
                            <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Rakib Ahmed</p>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                <img src={rating} alt="" className='w-[79px] h-[11px]' />
                                <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>17-03-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[15.5px] lg:mt-[22px]'>
                        <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>This course is a great basic course for the beginner who is trying to get into graphic design. It goes over a good chunk of the tools that are available in Adobe. Keep in mind though that true artistic talent is not necessarily learned, and Derrick is extremely talented. He does a great job of explaining things so even those of us who aren't talented can understand and feel like we can actually do this.</p>
                        <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course is a great basic course for the beginner who is trying to get into graphic...<Link><span className='text-blue-500'>more</span></Link></p>
                    </div>
                </div>

                <div className='flex justify-center '>
                    <a href='/' className='mt-6 lg:mt-10 text-sm lg:text-base leading-[21px] lg:leading-6 bs_sm lg:bs text-white lg:font-semibold font-medium poppins'>See More Review</a>
                </div>
            </div>
        </section>
    );
};

export default Review;