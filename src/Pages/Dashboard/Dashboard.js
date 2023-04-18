import React, { useContext } from 'react';
import star from '../../assest/course_image/star_border.png';
import pen from '../../assest/course_image/Edit, pen write.png';
import './Dashboard.css'
import { VedioContext } from '../../contexts/VedioProvider';
import { Link } from 'react-router-dom';
import ReviewModal from './ReviewModal/ReviewModal';

const Dashboard = () => {

  const { selectedOption } = useContext(VedioContext)

  return (
    <div className='lg:-mt-20 -mt-0'>
      <div className='lg:flex hidden items-center content-center justify-between w-[732px] mt-[29px]'>
        <div className=''>
          <p className='text-[#333333] text-[20px] leading-[30px] font-semibold poppins'>Topic : Greetings and Instroduction</p>
          <p className='text-[#555555] text-sm leading-[21px] font-light poppins mt-2'>Video : {selectedOption || ""}</p>
          <div className='flex items-center mt-8 gap-x-[76px]'>
            <div>
              <p className='text-[#333333] text-[20px] leading-[30px] font-semibold poppins'>Reviews</p>
              <div className='flex gap-x-1 mt-1'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
              </div>
            </div>
            <Link>
              <div htmlFor="review-modal" className='flex items-center gap-x-2 bg-[#3D419F] h-[40px] w-[178px] px-4 py-2 text-white font-medium rounded-lg'>
                <img className='h-5 w-5' src={pen} alt='' />
                <button>Write a Review</button>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3 -mt-[90px]'>
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
          <p className='text-[#555555] text-xs leading-[18px] font-light poppins mt-2'>Video : {selectedOption || ""}</p>
        </div>
        <div className='flex items-center mt-8 gap-x-[56px] lg:gap-x-[76px]'>
          <div>
            <p className='text-[#333333] text-[20px] leading-[30px] font-semibold poppins'>Reviews</p>
            <div className='flex gap-x-1 mt-1'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
            </div>
          </div>
          <label className='flex items-center gap-x-2 bg-[#3D419F] h-[40px] w-[178px] px-4 py-2 text-white font-medium rounded-lg'>
            <img className='h-5 w-5' src={pen} alt='' />
            <button  >Write a Review</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;