import React from 'react';
import timeIcon from "../../../assest/icon/g597.png";
const TextWorkShop = () => {
    return (
        <div className=''>
            <div>
                <span className='text-[#666666] font-semibold lg:text-base text-sm'>Workshop</span>
                <h1 className='font-bold text-[#1B1D48] mt-2 lg:mt-3 text-2xl lg:text-[40px] leading-9 lg:leading-[60px]'>Unlock Your Freelancing Potential
                    <br className='lg:block hidden' />
                    <span className='text-[#38A27B]'>with Expert Workshops by Rakib</span>
                </h1>
                <p className='text-[#666666] font-normal text-[16px] mt-6'>"Join Our Workshops on KDP, Fiverr, Freepik, and More to Enhance Your <br /> Freelancing Skills and Stay Ahead in the Industry!"</p>
            </div>
            <div className='mt-16 flex items-center gap-[18px]'>
                <button className="bg-[#E8291D] w-[57px] h-[48px] font-bold text-base rounded-[4px] text-[#FFFFFF]">Live</button>
                <div>
                    <p className='text-sm font-normal text-[#666666]'>Workshop live time</p>
                    <div className='flex items-center mt-1'>
                        <img className='mr-2' src={timeIcon} alt="" />
                        <span className='font-medium text-base text-[#333333]'>15 Apr, Wed - 07.00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextWorkShop;