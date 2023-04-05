import React from 'react';
import assignment from '../../assest/assignment/Assignment Vector.png'

const Assignment = () => {
    return (
        <div className='rounded-2xl w-[320px] lg:w-[732px] h-[572px] mx-5 lg:mx-0 bg-white' >
            <p className='pt-10 poppins text-xl font-medium leading-[30px] tracking-wider text-[#1B1D48] text-center'>Time Remaining</p>

            <div className="grid grid-flow-col gap-4 justify-center text-center mt-4">
                <div className="w-[88px] h-[88px] p-2 bg-[#3D419F] rounded-[10px] ">
                    <span className="countdown ">
                        <span className='text-[#FFFFFF] poppins text-[32px] leading-9 font-bold' style={{ "--value": 15 }}></span>
                    </span>
                    <p className='text-sm leading-[20px] font-normal text-[#C3C4E1] text-center'>Days</p>
                </div>
                <div className="w-[88px] h-[88px] p-2 bg-[#3D419F] rounded-[10px] ">
                    <span className="countdown ">
                        <span className='text-[#FFFFFF] poppins text-[32px] leading-9 font-bold' style={{ "--value": 10 }}></span>
                    </span>
                    <p className='text-sm leading-[20px] font-normal text-[#C3C4E1] text-center'>Hours</p>
                </div>
                <div className="w-[88px] h-[88px] p-2 bg-[#3D419F] rounded-[10px] ">
                    <span className="countdown ">
                        <span className='text-[#FFFFFF] poppins text-[32px] leading-9 font-bold' style={{ "--value": 24 }}></span>
                    </span>
                    <p className='text-sm leading-[20px] font-normal text-[#C3C4E1] text-center'>Minutes</p>
                </div>
                <div className="w-[88px] h-[88px] p-2 bg-[#3D419F] rounded-[10px] ">
                    <span className="countdown ">
                        <span className='text-[#FFFFFF] poppins text-[32px] leading-9 font-bold' style={{ "--value": 36 }}></span>
                    </span>
                    <p className='text-sm leading-[20px] font-normal text-[#C3C4E1] text-center'>Seconds</p>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <img src={assignment} alt="" />
            </div>

            <div className='flex mt-10 items-center justify-center mx-auto w-[344px] h-[40px]'>
                <div>
                    <input
                        type="text"
                        placeholder="Paste Google Drive Link Here Submit"
                        className="input border-1 border-solid border-[#C3C4E1] w-[344px] h-[40px] outline-none"
                    />
                </div>
                <div>
                    {/* <p className='bg-[#3D419F] text-[#FFFFFF]'>Submit</p> */}
                    <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-6 py-3 px-5 rounded-[12px] text-white lg:font-semibold font-medium poppins bg-[#3D419F]'>Previous</a>
                </div>
            </div>

        </div>
    );
};

export default Assignment;