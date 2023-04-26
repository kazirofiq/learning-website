import React from 'react';
import profileImg from '../../../assest/Profile_image/Avatar.png';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import accountIcon from "../../../assest/icon/account.png";
import planner from "../../../assest/icon/planner.png";
import ExternalLink from "../../../assest/icon/External Link.png";
import OrderHistory from "../../../assest/icon/order history.png";
import { ArrowTopRightOnSquareIcon, ClipboardIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid'
const percentage = 60;
const customColor = '#3D419F';
const styles = {
  path: {
    stroke: customColor,
  },
  trail: {
    stroke: '#d6d6d6',
  },
  text: {
    fill: customColor,
  },
};
const textStyle = {
  textAnchor: 'middle',
  dominantBaseline: 'middle',
};

const ProfileCard = () => {
  return (
    <div className="card w-[255px] bg-base-100 shadow-xl poppins lg:mt-[84px] md:mt-[50px] mt-8">
      <figure className="px-10 pt-10">
        <img src={profileImg} alt="profile_image" className="rounded-xl" />
      </figure>
      <div className='px-[59px] mt-4'>
        <h1 className='text-[#1B1D48] lg:font-semibold lg:text-xl'>Rasel Mondol</h1>
        <div className='flex justify-center items-center mt-4'>
          <div className=' flex justify-center items-center mr-[12px]'>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={styles}
              textStyle={textStyle}
              width={58}
              height={58}
            />
          </div>

          <h5 className='font-normal text-base leading-[19px] text-[#333333]'>Profile Complete</h5>
        </div>
      </div>
      <div className='px-4 mt-6'>
        <hr />
      </div>
      <div className='mt-4 px-4 pb-6'>
        <Link to='/profile'>
          <button className='gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            <UserIcon className='h-5 w-5' />
            My Profile
          </button>
        </Link>
        <Link to='/profile/Planner'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            <ClipboardIcon className='h-5 w-5' />
            My Planner
          </button>
        </Link>
        <Link to='/profile/importent'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            <ArrowTopRightOnSquareIcon className='h-5 w-5' />
            Important Link
          </button>
        </Link>
        <Link to='/profile/orderhistory'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            <ClockIcon className='h-5 w-5' />
            Order History
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;