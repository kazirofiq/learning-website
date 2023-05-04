import React from 'react';
import quizImage from '../../assest/quiz/Quiz.png'
import useTitle from '../../hooks/useTitle';

const Quiz = () => {

    useTitle('Quiz - ');

    return (
        <section className=' w-[320px] lg:w-[732px] lg:mt-0 mb-[20px] mt-8 h-[381px] lg:h-[445px] mx-5 lg:mx-0 bg-white custom_shadow' >
            <div className='flex items-center'>
                <div className='lg:p-10 py-6 px-4'>
                    <div>
                        <p className='poppins text-[14px] lg:text-base font-normal lg:font-medium leading-[21px] lg:leading-6 text-[#333333] text-start'>Quiz</p>
                    </div>

                    <div className='flex items-center text-base lg:text-[18px] leading-[24px] lg:leading-6 poppins font-bold'>
                        <progress className="progress progress-secondary bg-[#E1F1EB] w-[245px] lg:w-[200px] h-[8px] lg:h-[12px]" value="65" max="100"></progress>
                        <p className='text-[#333333] text-xs leading-[18px] font-light ml-1'>05/08</p>
                    </div>

                    <div className='mt-[21px] lg:mt-6'>
                        <p className='lg:block hidden text-[#1B1D48] text-[24px] font-bold leading-[30px] poppins'>What is Your First Reaction To
                            <br /> the Product?</p>
                        <p className='lg:hidden block text-[#1B1D48] text-[20px] font-semibold leading-[30px] poppins'>What is Your First Reaction
                            <br /> To the Product?</p>
                    </div>

                    <div>
                        <div className='mt-3 lg:mt-4'>
                            <div className='flex items-center gap-3 poppins py-2 px-3 hover:bg-[#ECECF5] rounded-[8px] w-[222px]'>
                                <input type="checkbox" checked className="checkbox checkbox-xs" />
                                <p className='text-[14px] lg:text-base text-[#333333] leading-[21px] lg:leading-6 font-normal'>Somewhat Negative</p>
                            </div>
                            <div className='flex items-center gap-3 poppins py-2 px-3 hover:bg-[#ECECF5] rounded-[8px] w-[222px]'>
                                <input type="checkbox" checked className="checkbox checkbox-xs" />
                                <p className='text-[14px] lg:text-base text-[#333333] leading-[21px] lg:leading-6 font-normal'>Full Stack Developer</p>
                            </div>
                            <div className='flex items-center gap-3 poppins py-2 px-3 hover:bg-[#ECECF5] rounded-[8px] w-[222px]'>
                                <input type="checkbox" checked className="checkbox checkbox-xs" />
                                <p className='text-[14px] lg:text-base text-[#333333] leading-[21px] lg:leading-6 font-normal'>Web Designer</p>
                            </div>

                            <div className='flex items-center gap-3 poppins py-2 px-3 hover:bg-[#ECECF5] rounded-[8px] w-[222px]'>
                                <input type="checkbox" checked className="checkbox checkbox-xs" />
                                <p className='text-[14px] lg:text-base text-[#333333] leading-[21px] lg:leading-6 font-normal'>Ui Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-4 lg:mt-8'>
                        <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-4 py-2 px-6 rounded-[10px] text-[#333333] lg:font-medium font-medium poppins border-[1px] border-solid border-[#666666] hover:bg-[#3D419F] hover:text-white'>Previous</a>

                        <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-4 py-2 px-6 rounded-[10px] lg:font-medium font-medium poppins bg-[#3D419F] text-white'>Next</a>
                    </div>
                </div>
                <div>
                    <img src={quizImage} className='lg:block hidden' alt="" />
                </div>
            </div>

        </section>
    );
};

export default Quiz;