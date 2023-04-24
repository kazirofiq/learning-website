import React from 'react';
import './FrequentlyAskedQuestion.css';

const FrequentlyAskedQuestion = () => {
    return (
        <section className='max-w-[1110px] mx-5 lg:mx-auto py-8 lg:py-10' id='frequentlyAskedQuestion'>
            <p className='hidden lg:block text-6 lg:text-[40px] leading-[36px] lg:leading-[60px] font-bold text-[#1B1D48] poppins text-center'>Frequently Asked <span className='text-[#38A27B]'>Question</span></p>

            <p className='block lg:hidden text-[24px] text-center lg:text-[40px] leading-[36px] lg:leading-[60px] font-bold text-[#1B1D48] poppins'>Frequently Asked
                <br /><span className='text-[#38A27B]'>Question</span></p>
            <div className="grid grid-cols-1 justify-center items-center mx-auto">
                <div className="flex flex-col justify-center mt-6 lg:mt-12 mx-auto">
                    <div className="space-y-4 max-w-[730px] mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">What is the KDP Mastery course about?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>The KDP Mastery course is a comprehensive guide to self-publishing on Amazon's Kindle Direct Publishing (KDP) platform, covering everything from manuscript preparation to marketing strategies for success.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px] mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">Who is this course for?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>This course is designed for aspiring authors, self-publishers, and individuals interested in learning how to effectively publish and market their books on Amazon through the KDP platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px]  mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> What will I learn in this course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>No, this course is suitable for beginners and does not require any prior experience in self-publishing or KDP. All the necessary concepts and techniques will be explained in a step-by-step manner.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px]  mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> Is any prior experience required to take this course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>No, this course is suitable for beginners and does not require any prior experience in self-publishing or KDP. All the necessary concepts and techniques will be explained in a step-by-step manner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 max-w-[730px]  mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> How long does the course take to complete?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>It may take around 4 months to complete all the modules.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 lg:w-[730px] w-[320px] mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> Can I access the course materials after completing the course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Yes, once you enroll in the course, you will have lifetime access to the course materials, including any future updates or additions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 lg:w-[730px] w-[320px] mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> Are there any bonuses or additional resources included in the course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Yes, the course includes bonus resources such as templates, checklists, and exclusive access to a private community for further support and networking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 lg:w-[730px] w-[320px] mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">Is there any refund policy?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Yes, there is a refund policy. Please refer to the course terms and conditions for detailed information on the refund policy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 lg:w-[730px] w-[320px] mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins"> Can I ask questions or seek clarification during the course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Yes, you can ask questions or seek clarification through the course platform, and Rakib or his team will provide prompt support and assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 lg:w-[730px] w-[320px] mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">How do I enroll in the KDP Mastery course?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>You can enroll in the course by visiting Rakib's website, Learn With Rakib, and following the enrollment instructions to gain instant access to the course materials and start your self-publishing journey today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestion;