import React from 'react';
import time from '../../../../assest/course_curriculum/Time.png'
import group from '../../../../assest/course_curriculum/Group (1).png'
import video from '../../../../assest/course_curriculum/video.png'
import CourseCurriculumAccordion from './CourseCurriculumAccordion';

const CourseCurriculum = () => {
    return (
        <section className='' id='courseCurriculum'>
            <div className='mt-10 mb-10'>
                <h1 className='font-bold text-[#333333] text-2xl'>How to complete Payment?</h1>
                <p className='font-normal text-base text-[#666666] mt-3'>To know the process <label className='font-normal text-base text-[#666666] mt-3r' htmlFor='howToPay'><span className='font-bold text-base text-[#3D419F] cursor-pointer '>Watch this Video</span></label></p>
            </div>
            <div className=''>
                <div className='lg:w-[730px] w-[320px] py-4 lg:py-[22px] bg-[#F8F8FF] '>
                    <div className=''>
                        <div>
                            <p className='text-[#1B1D48] text-[20px] lg:text-2xl font-bold leading-[30px] lg:leading-9 mb-[11px] poppins'>The Course Curriculam</p>
                        </div>

                        <div className='flex gap-2 lg:gap-4 w-[320px] lg:w-[375px]'>
                            <div className='flex gap-1 lg:gap-[6px] items-center'>
                                <img src={group} alt="" className='w-[10.23px] h-[9.21px]' />
                                <p className='text-xs leading-[18px] text-[#666666]'>Advance Level</p>
                            </div>
                            <div className='flex gap-1 lg:gap-[6px] items-center'>
                                <img src={video} alt="" className='w-[10.23px] h-[9.21px]' />
                                <p className='text-xs leading-[18px] text-[#666666]'>250+ Lessons</p>
                            </div>
                            <div className='flex gap-1 lg:gap-[6px] items-center'>
                                <img src={time} alt="" className='w-[10.23px] h-[9.21px]' />
                                <p className='text-xs leading-[18px] text-[#666666]'>00.00.00 Total Hours</p>
                            </div>
                        </div>
                        <CourseCurriculumAccordion></CourseCurriculumAccordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCurriculum;