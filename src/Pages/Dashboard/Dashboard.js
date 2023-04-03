import React from 'react';
import video from '../../assest/my_class/my_class.png';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className=''>
            <img src={video} alt="" className='rounded-2xl w-[320px] lg:w-[732px] mx-5 lg:mx-0' />

            <div className='lg:flex hidden items-center content-center justify-between w-[732px] mt-[29px]'>
                <div className=''>
                    <p className='text-[#333333] text-[20px] leading-[30px] font-semibold poppins'>Topic : Greetings and Instroduction</p>
                    <p className='text-[#555555] text-sm leading-[21px] font-light poppins mt-2'>Video : 1-2 Future and Earning Opportunity</p>
                </div>
                <div className='flex items-center gap-3'>
                    <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-[#666666] border-[1px] border-[#666666] border-solid lg:font-semibold font-medium poppins bg-[#F8F8FF]'>Previous</a>
                    <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-white bg-[#3D419F] lg:font-semibold font-medium poppins'>Next</a>
                </div>
            </div>

            <div className='block lg:hidden items-center content-center justify-between w-[320px] lg:w-[732px] mt-[18px] mx-5 lg:mx-0'>
                <div className='flex items-center justify-center gap-3 mb-5'>
                    <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-[#666666] border-[1px] border-[#666666] border-solid lg:font-semibold font-medium poppins bg-[#F8F8FF]'>Previous</a>
                    <a href=' ' className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-white bg-[#3D419F] lg:font-semibold font-medium poppins'>Next</a>
                </div>
                <div className=''>
                    <p className='text-[#333333] text-base leading-6 font-semibold poppins'>Topic : Greetings and Instroduction</p>
                    <p className='text-[#555555] text-xs leading-[18px] font-light poppins mt-2'>Video : 1-2 Future and Earning Opportunity</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;