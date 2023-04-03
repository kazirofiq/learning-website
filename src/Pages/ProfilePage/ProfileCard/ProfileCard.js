import React from 'react';
import profileImg from '../../../assest/Profile_image/Avatar.png';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import accountIcon from "../../../assest/icon/account.png";
import planner from "../../../assest/icon/planner.png";
import ExternalLink from "../../../assest/icon/External Link.png";
import OrderHistory from "../../../assest/icon/order history.png";
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
    <div className="card w-[255px] bg-base-100 shadow-xl poppins">
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
      <div className="items-center text-center mb-4 w-full inline-block lg:mt-[15px] lg:px-4 px-5">
        <Link to='/profile'>
          <button className="rounded-[8px] h-[40px] w-[223px] text-sm lg:text-base font-normal text-[#FFFFFF] bg-[#3D419F]  py-[10px] lg:w-full mx-auto flex items-center justify-center">
            <img className='mr-[13px]' src={accountIcon} alt="" />
            <span>My Profile</span>
          </button>
        </Link>
      </div>
      <div className='mt-4 px-[35px] pb-8'>
        <ul className='grid grid-cols-1 gap-y-[31px]'>
          <li className='flex items-center'>
            <img className='mr-[15px]' src={planner} alt="" />
            <h4 className='text-[#666666] font-normal text-base'>My Planner</h4>
          </li>
          <li className='flex items-center'>
            <img className='mr-[15px]' src={ExternalLink} alt="" />
            <h4 className='text-[#666666] font-normal text-base'>Important Link</h4>
          </li>
          <li className='flex items-center'>
            <img className='mr-[15px]' src={OrderHistory} alt="" />
            <h4 className='text-[#666666] font-normal text-base'>Order History</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;