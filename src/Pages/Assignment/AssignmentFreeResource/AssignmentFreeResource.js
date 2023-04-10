import React from 'react';
import downloadIcon from '../../../assest/assignment/DownloadSimple.png';

const AssignmentFreeResource = () => {
    return (
        <div className=' w-[320px] lg:w-[732px] lg:mt-0 mb-[20px] mt-8 h-[208px] lg:h-[225px] mx-5 lg:mx-0 bg-white custom_shadow' >
            <p className='lg:pt-10 pt-6 poppins text-[20px] lg:text-2xl font-semibold lg:font-bold leading-[30px] lg:leading-[36px] text-[#1B1D48] text-center'>Free Resource</p>

            <div className='mt-2 lg:block hidden'>
                <p className='text-center text-[#666666] text-[14px] font-normal leading-[21px] poppins'>Download this resource and boost your learning speed</p>
            </div>

            <div className='mt-2 lg:hidden block'>
                <p className='text-center text-[#666666] text-[14px] font-normal leading-[21px] poppins'>Download this resource and boost your
                    <br /> learning speed</p>
            </div>

            <div className='flex justify-center mt-8'>
                <div className='flex justify-between text-sm lg:text-base leading-[21px] lg:leading-6 py-2 px-5 rounded-[10px] text-white lg:font-semibold font-medium poppins bg-[#3D419F] w-[191px]'>
                    <a href=' ' className=' '>Download Now</a>
                    <img src={downloadIcon} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AssignmentFreeResource;