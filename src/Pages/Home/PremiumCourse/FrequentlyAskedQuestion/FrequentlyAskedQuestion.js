import React from 'react';
import './FrequentlyAskedQuestion.css';

const FrequentlyAskedQuestion = () => {
    return (
        <section className='max-w-[1110px] mx-auto'>
            <p className='text-[40px] leading-[60px] font-bold text-[#1B1D48] poppins'>Frequently Asked <span className='text-[#38A27B]'>Question</span></p>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
                <div className="container flex flex-col justify-center my-3">
                    <div className="space-y-4 lg:w-[730px] w-[320px]">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />

                            <div className="grid items-center rounded-[10px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-t-4 bg-[#F8F8FF] peer-checked:bg-[#FFFFFF] collapse-title text-[#1B1D48] peer-checked:text-[#3D419F] h-[49px] lg:h-[75px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-semibold poppins">What is Learn with Rakib</p>
                            </div>

                            <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-b-4 rounded-[10px]">
                                <div className="flex justify-between">
                                    <p className='text-base leading-6 font-normal'>MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 180+ of the world's best.</p>
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