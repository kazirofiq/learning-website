import React from 'react';
import avater from '../../../assest/Profile_image/Avatar.png'
import rating from '../../../assest/learner_review/rating.png'
import { Link } from 'react-router-dom';
const Reviews = () => {

    const reviews = [
        {
            id: 1,
            image: avater,
        },
        {
            id: 2,
            image: avater,
        },
        {
            id: 3,
            image: avater,
        },
        {
            id: 4,
            image: avater,
        },
        {
            id: 5,
            image: avater,
        },
        {
            id: 6,
            image: avater,
        },
        {
            id: 7,
            image: avater,
        },
        {
            id: 8,
            image: avater,
        },
        {
            id: 9,
            image: avater,
        },
        {
            id: 10,
            image: avater,
        },
    ]

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[30px] mt-[11px]  lg:mt-[48px] md:mt-[30px]  mb-10 lg:mb-[96px] md:mb-[60px]'>
            {
                reviews.map(review => (
                    <div>
                        <div className='mx-auto lg:mx-0 border-solid border-[0.5px] border-[#3D419F] rounded-2xl p-5 lg:p-8 mt-3'>
                            <div className='flex items-center gap-x-6'>
                                <img className='h-12 w-12' src={avater} alt="" />
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
                    </div>
                ))
            }
        </div>
    );
};

export default Reviews;