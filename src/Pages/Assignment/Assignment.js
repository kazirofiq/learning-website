import React from 'react';
import assignment from '../../assest/assignment/Assignment Vector.png'
import './Assignment.css';
import AssignmentResult from './AssignmentResult/AssignmentResult';
import AssignmentFreeResource from './AssignmentFreeResource/AssignmentFreeResource';
import AddFAQ from '../Home/PremiumCourse/AddFAQ/AddFAQ';

const Assignment = () => {
    return (
        <div className=' w-[320px] lg:w-[732px] lg:mt-0 mt-8 h-[378px] lg:h-[572px] mx-5 lg:mx-0 bg-white custom_shadow' >
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

            <div className='flex justify-center items-center mx-auto lg:w-[323.3px] w-[192.89px] lg:h-[238px] h-[142px] mt-6 lg:mt-10'>
                <img src={assignment} alt="" />
            </div>

            <div className='flex relative mt-6 lg:mt-10 items-center justify-center mx-auto w-[288px] lg:w-[344px] h-[40px]'>
                <input
                    type="text"
                    placeholder="Paste Google Drive Link Here"
                    className="input border-1 border-solid border-[#C3C4E1] w-[190px] lg:w-[344px] h-[40px] focus:outline-none"
                />
                <a href=' ' className='absolute right-[-45px] text-sm lg:text-base leading-[21px] lg:leading-6 py-2 px-5 rounded-[12px] text-white lg:font-semibold font-medium poppins bg-[#3D419F]'>Submit</a>
            </div>
            {/* <AddFAQ></AddFAQ> */}
        </div>


        // <AssignmentResult></AssignmentResult>
        // <AssignmentFreeResource></AssignmentFreeResource>
    );
};

export default Assignment;