import React from 'react';

import '../Assignment.css';

const AssignmentResult = () => {
    return (
        <div className=' w-[320px] lg:w-[732px] lg:mt-0 mb-[20px] mt-8 h-100% lg:h-[314px] mx-5 lg:mx-0 bg-white custom_shadow' >
            <p className='lg:pt-10 pt-6 poppins text-xl font-medium leading-[30px] tracking-wider text-[#1B1D48] text-center'>Time Remaining</p>

            <div className="grid grid-flow-col gap-2 lg:gap-4 justify-center text-center mt-3 lg:mt-4 ">
                <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                    <div>
                        <span className="countdown ">
                            <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": 10 }}></span>
                        </span>
                        <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Days</p>
                    </div>
                </div>
                <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                    <div>
                        <span className="countdown ">
                            <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": 10 }}></span>
                        </span>
                        <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Hours</p>
                    </div>
                </div>
                <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                    <div>
                        <span className="countdown ">
                            <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": 10 }}></span>
                        </span>
                        <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Minutes</p>
                    </div>
                </div>
                <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                    <div>
                        <span className="countdown ">
                            <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": 10 }}></span>
                        </span>
                        <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Seconds</p>
                    </div>
                </div>
            </div>

            <div className='flex my-6 lg:mt-8 gap-[12px] items-center justify-center'>
                <div className="radial-progress progress-secondary " style={{ "--value": 70 }}><span className='text-[#333333] font-bold text-[14.07px] leading-[21.1px]'>70</span></div>
                <div>
                    <p className='text-[#333333] poppins text-[16px] leading-[22.28px] font-normal'>Your Score
                        <br /> Out of 100 Marks</p>
                </div>
            </div>

        </div>

    );
};

export default AssignmentResult;