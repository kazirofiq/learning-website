import React from 'react';
import rating from '../../../assest/learner_review/Vector.png'
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
                                    <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Dalowar Hosen</p>
                                    <div className='flex items-center gap-2 lg:gap-3'>
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>17-03-2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[15.5px] lg:mt-[22px]'>
                                <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>I am thrilled with the wealth of knowledge and support I have received from Learn With Rakib. The website offers a comprehensive premium paid course on KDP and consultation services on various freelancing topics. Rakib's passion for teaching and expertise in the field have been evident in the quality of the resources and guidance provided. I am grateful for the impact it has had on my freelancing career!</p>
                                <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course is a great basic course for the beginner who is trying to get into graphic...<Link><span className='text-blue-500'>more</span></Link></p>
                            </div>
                        </div>

                        <div className='max-w-[600px]  mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                            <div className='flex items-center'>
                                <img src={reviewer} alt="" />
                                <div className='poppins pl-5'>
                                    <p className='text-start text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 font-bold poppins'>Mohammad Salauddin</p>
                                    <div className='flex items-center gap-2 lg:gap-3'>
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <img src={rating} alt="" className='' />
                                        <p className='text-[#666666] font-light text-center lg:text-start text-xs leading-[18px]'>17-03-2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[15.5px] lg:mt-[22px]'>
                                <p className='lg:block hidden text-[#666666] text-sm font-normal leading-[21px]'>Learn With Rakib has been an invaluable resource for my creative journey. The website offers a wide range of services, including a premium paid course on KDP, free classes on YouTube, and tailored consultation packages. Rakib's insights, strategies, and guidance have helped me enhance my freelancing skills and overcome challenges. I highly recommend Learn With Rakib to anyone looking to level up their creativity and freelancing game</p>
                                <p className='block lg:hidden text-[#666666] text-sm font-normal leading-[21px]'>This course is a great basic course for the beginner who is trying to get into graphic...<Link><span className='text-blue-500'>more</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <Link to='/allreviews' className='mt-6 lg:mt-10 text-sm lg:text-base leading-[21px] lg:leading-6 bs_sm lg:bs text-white lg:font-semibold font-medium poppins'>See More Review</Link>
                </div>
            </div>
        </section>
    );
};

export default ConsultationReviews;