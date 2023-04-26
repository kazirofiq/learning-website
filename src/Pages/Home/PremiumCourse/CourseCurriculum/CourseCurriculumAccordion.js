import React from "react";
import play from '../../../../assest/course_curriculum/play_circle_filled.png';
import lock from '../../../../assest/course_curriculum/unlock,lock open,pad lock,access,lock open alt,.png';

const CourseCurriculumAccordion = () => {
    return (
        <section className="">
            <div className="grid grid-cols-1 justify-center items-center">
                <div className="container flex flex-col justify-center my-3">
                    <div className="space-y-4 lg:w-[730px] w-[320px]">
                        <div className="collapse collapse-arrow bg-white">
                            <input type="checkbox" className="peer" />

                            <div className="rounded-[10px] border-solid border-2 border-[#C3C4E1] peer-checked:border-[#3D419F] collapse-title text-[#666666] peer-checked:text-[#3D419F] h-[49px] lg:h-[61px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">Greetings and Instroduction</p>
                            </div>

                            {/* <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666]">
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 01</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 02</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="collapse collapse-arrow bg-white">
                            <input type="checkbox" className="peer" />

                            <div className="rounded-[10px] border-solid border-2 border-[#C3C4E1] peer-checked:border-[#3D419F] collapse-title text-[#666666] peer-checked:text-[#3D419F] h-[49px] lg:h-[61px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">Design Principle</p>
                            </div>

                            {/* <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666]">
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 01</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 02</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                            </div> */}
                        </div>


                        <div className="collapse collapse-arrow bg-white">
                            <input type="checkbox" className="peer" />

                            <div className="rounded-[10px] border-solid border-2 border-[#C3C4E1] peer-checked:border-[#3D419F] collapse-title text-[#666666] peer-checked:text-[#3D419F] h-[49px] lg:h-[61px]">
                                <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">Learn Tool Easiest Way</p>
                            </div>

                            {/* <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666]">
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 01</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src={play} alt="" className="w-[14px] h-[14px]" />
                                        <p className="text-sm leading-[21px]">Lesson 02</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm leading-[21px]">00.05.00</p>
                                        <img src={lock} alt="" className="w-[14px] h-[14px]" />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCurriculumAccordion;