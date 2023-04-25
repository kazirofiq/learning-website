import React from 'react';
import './ConsultationFAQ.css';

const ConsultationFAQ = () => {
    return (
        <section className='px-[20px] lg:px-[145px] mx-5 lg:mx-auto my-8 lg:my-10' id='frequentlyAskedQuestion'>
            <p className='hidden lg:block text-6 lg:text-[40px] leading-[36px] lg:leading-[60px] font-bold text-[#1B1D48] poppins text-center'>Frequently Asked <span className='text-[#38A27B]'>Question</span></p>

            <p className='block lg:hidden text-[24px] text-center lg:text-[40px] leading-[36px] lg:leading-[60px] font-bold text-[#1B1D48] poppins'>Frequently Asked
                <br /><span className='text-[#38A27B]'>Question</span></p>

            <div className="grid grid-cols-1 justify-center items-center mx-auto">
                <div className="flex flex-col justify-center mt-6 lg:mt-12 mx-auto">
                    <div className="space-y-4 max-w-[730px] mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">How can I book a consultation with Rakib?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>You can book a consultation with Rakib by visiting our website Learn With Rakib and selecting the desired consultation package. Follow the instructions to schedule a convenient time for your consultation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px] mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">What topics are covered in the consultation sessions?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Our consultation sessions cover a wide range of topics related to self-publishing on KDP, freelancing on platforms like Fiverr, using Freepik, creating line art illustrations, and utilizing Adobe Illustrator, along with other relevant topics related to freelancing and creative projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px]  mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">How long is each consultation session?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>The duration of each consultation session depends on the package you choose. We offer different package options with varying session lengths, ranging from 20 minutes to 1 hour. You can select the package that best suits your needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px]  mb-4 mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">Is the consultation personalized to my specific needs and goals?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>Yes, absolutely! Our consultations are tailored to your specific needs and goals. Rakib will provide personalized guidance and strategies based on your individual requirements and creative projects to help you unlock your creativity and achieve your freelancing goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-[730px]  mx-auto lg:mx-0">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[80px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[26px] lg:leading-[27px] font-bold poppins">What if I need to reschedule or cancel my consultation session?</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-sm lg:text-base leading-[21px] lg:leading-6 font-normal'>If you need to reschedule or cancel your consultation session, please contact us at least 5 hours before your scheduled session. We understand that unexpected circumstances may arise, and we will do our best to accommodate your request and find a suitable alternative time for your consultation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFAQ;