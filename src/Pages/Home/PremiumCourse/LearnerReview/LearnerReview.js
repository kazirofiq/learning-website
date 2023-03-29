import React from 'react';
import rating from '../../../../assest/learner_review/rating.png'
import './LearnerReview.css'

const LearnerReview = () => {
    return (
        <section className='max-w-[1110px] mx-auto'>
            <div className='my-6'>
                <p className='text-[#1B1D48] text-center lg:text-start text-[20px] lg:text-2xl poppins font-semibold lg:font-bold leading-[30px] lg:leading-9'>Learner Review (15 Rating)</p>

                <div className='block lg:flex gap-0 lg:gap-[58px] w-[320px] lg:w-[730px] poppins mt-6 rounded-2xl custom_shadow mx-auto lg:mx-0'>
                    <div className='py-[69.5px] pl-0 lg:pl-8'>
                        <p className='text-[#333333] text-[56px] lg:text-[80px] leading-[84px] lg:leading-[120px] font-bold'>4.5</p>
                        <div className='flex items-center'>
                            <img src={rating} alt="" className='' />
                            <p className='text-[#666666] text-sm lg:text-base leading-[21px] lg:leading-6'>(15 Ratigns)</p>
                        </div>
                    </div>

                    <div className='w-[430px] grid content-center'>
                        <div className='flex items-center text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                            <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] mb-[15px]'>Excellent</p>
                            <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[10px]" value="70" max="100"></progress>
                            <p className='pl-[5px] lg:pl-[10px]'>70%</p>
                        </div>
                        <div className='flex items-center text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                            <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] mb-[15px]'>Very Good</p>
                            <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[10px]" value="20" max="100"></progress>
                            <p className='pl-[5px] lg:pl-[10px]'>20%</p>
                        </div>
                        <div className='flex items-center text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                            <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] mb-[15px]'>Average</p>
                            <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[10px]" value="30" max="100"></progress>
                            <p className='pl-[5px] lg:pl-[10px]'>30%</p>
                        </div>
                        <div className='flex items-center text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                            <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] mb-[15px]'>Poor</p>
                            <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[10px]" value="2" max="100"></progress>
                            <p className='pl-[5px] lg:pl-[10px]'>2%</p>
                        </div>
                        <div className='flex items-center text-[#333333] text-sm lg:text-base leading-[21px] lg:leading-6 poppins'>
                            <p className='mr-3 lg:mr-[22px] w-[101px] lg:w-[84px] mb-[15px]'>Terrible</p>
                            <progress className="progress progress-red-200 bg-[#C3C4E1] w-[170px] lg:w-[264px] h-[10px]" value="0" max="100"></progress>
                            <p className='pl-[5px] lg:pl-[10px]'>0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnerReview;