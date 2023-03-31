import React from 'react';
import rating from '../../../../assest/learner_review/rating.png'
import './LearnerReview.css'
import Review from './Review';

const LearnerReview = () => {
    return (
        <section className='max-w-[1110px] mx-auto' id='learnerReview'>

            <p className='text-[#1B1D48] text-center lg:text-start text-[20px] lg:text-2xl poppins font-semibold lg:font-bold leading-[30px] lg:leading-9'>Learner Review (15 Rating)</p>

            <div className='block lg:flex gap-0 lg:gap-[58px] w-[320px] lg:w-[730px] poppins mt-0 lg:mt-6 mb-4 lg:mb-6 rounded-2xl custom_shadow mx-auto lg:mx-0'>
                <div className='pt-3 pb-5 lg:py-[69.5px] pl-0 lg:pl-8 grid justify-center'>
                    <p className='text-center lg:text-start text-[#333333] text-[56px] lg:text-[80px] leading-[84px] lg:leading-[120px] font-bold poppins'>4.5</p>
                    <div className='flex items-center'>
                        <img src={rating} alt="" className='' />
                        <p className='text-[#666666] text-center lg:text-start text-sm lg:text-base leading-[21px] lg:leading-6'>(15 Ratigns)</p>
                    </div>
                </div>

                <div className='w-[320px] lg:w-[430px] grid content-center'>
                    <div className='flex items-center mb-3 text-[#333333] lg:mb-[15px] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                        <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] '>Excellent</p>
                        <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[6px] lg:h-[10px]" value="70" max="100"></progress>
                        <p className='pl-[5px] lg:pl-[10px]'>70%</p>
                    </div>
                    <div className='flex items-center mb-3 text-[#333333] lg:mb-[15px] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                        <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] '>Very Good</p>
                        <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[5.5px] lg:h-[10px]" value="20" max="100"></progress>
                        <p className='pl-[5px] lg:pl-[10px]'>20%</p>
                    </div>
                    <div className='flex items-center mb-3 text-[#333333] lg:mb-[15px] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                        <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] '>Average</p>
                        <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[5.5px] lg:h-[10px]" value="30" max="100"></progress>
                        <p className='pl-[5px] lg:pl-[10px]'>30%</p>
                    </div>
                    <div className='flex items-center mb-3 text-[#333333] lg:mb-[15px] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                        <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] '>Poor</p>
                        <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[6px] lg:h-[10px]" value="2" max="100"></progress>
                        <p className='pl-[5px] lg:pl-[10px]'>2%</p>
                    </div>
                    <div className='flex items-center mb-3 text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                        <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] '>Terrible</p>
                        <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[6px] lg:h-[10px]" value="0" max="100"></progress>
                        <p className='pl-[5px] lg:pl-[10px]'>0%</p>
                    </div>
                </div>
            </div>
            <Review></Review>
        </section>
    );
};

export default LearnerReview;