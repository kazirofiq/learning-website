import React from 'react';
import rating from '../../../assest/learner_review/rating.png'
import reviewer from '../../../assest/Consultency/Ellipse 34.png'

import { Link } from 'react-router-dom';

const ConsultationReviews = () => {
    return (
        <section className='px-[20px] lg:px-[145px]'>
            <div className='' id='LearnerReview'>
                <h2 className='text-[40px] font-bold leading-[48px] text-center text-[#191D23]'>What our Learner Say</h2>
                <div className='flex mt-7'>
                    <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='max-w-[600px]  mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                            <div className='flex items-center'>
                                <img src={reviewer} alt="" />
                                <div className='poppins pl-5'>
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

                        <div className='max-w-[600px]  mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                            <div className='flex items-center'>
                                <img src={reviewer} alt="" />
                                <div className='poppins pl-5'>
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
                    </div>
                </div>
                <div className='flex justify-center '>
                    <a href='/' className='mt-6 lg:mt-10 text-sm lg:text-base leading-[21px] lg:leading-6 bs_sm lg:bs text-white lg:font-semibold font-medium poppins'>See More Review</a>
                </div>
            </div>
        </section>
    );
};

export default ConsultationReviews;