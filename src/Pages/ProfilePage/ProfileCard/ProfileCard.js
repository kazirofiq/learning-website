import React, { useContext } from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import profile from '../../../assest/myplanner/profile.svg';
import planner from '../../../assest/myplanner/planner.svg';
import imports from '../../../assest/myplanner/import.svg';
import order from '../../../assest/myplanner/order.svg';
import { AuthContext } from '../../../contexts/AuthProvider';
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
  const { user } = useContext(AuthContext)
  return (
    <div className="card w-[255px] bg-base-100 shadow-xl poppins lg:mt-[84px] md:mt-[50px] mt-8">
      <div className="avatar">
        <div className="w-24  mx-auto mt-3 rounded-full">
          <img src={user?.photoURL} alt="profile_image" className="rounded-full object-cover" />
        </div>
      </div>
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
            {/* <UserIcon className='h-5 w-5' /> */}
            <img className='h-5 w-5' src={profile} alt='' />
            {/* <svg className='focus:' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3582 10.0355C13.9739 9.85281 13.5817 9.69543 13.1827 9.56359C14.475 8.59359 15.3125 7.04902 15.3125 5.3125C15.3125 2.3832 12.9293 0 9.99998 0C7.07065 0 4.68749 2.3832 4.68749 5.3125C4.68749 7.05094 5.52686 8.59703 6.82159 9.56684C5.63534 9.95738 4.52225 10.5651 3.54803 11.3664C1.76163 12.8358 0.519555 14.8854 0.0506881 17.1376C-0.096265 17.8433 0.0797896 18.5682 0.533618 19.1262C0.985219 19.6815 1.65487 20 2.37081 20H11.9922C12.4237 20 12.7734 19.6502 12.7734 19.2188C12.7734 18.7873 12.4237 18.4375 11.9922 18.4375H2.37081C2.03729 18.4375 1.83608 18.2513 1.74584 18.1404C1.59002 17.9488 1.52971 17.6994 1.58038 17.4561C2.39112 13.5617 5.82612 10.717 9.79288 10.621C9.86159 10.6237 9.93061 10.625 9.99998 10.625C10.07 10.625 10.1398 10.6236 10.2091 10.6209C11.4248 10.6495 12.5939 10.9269 13.6874 11.4467C14.0771 11.6319 14.5431 11.4662 14.7284 11.0765C14.9136 10.6868 14.7479 10.2207 14.3582 10.0355ZM10.1905 9.0577C10.1271 9.05656 10.0636 9.05598 9.99998 9.05598C9.93694 9.05598 9.87389 9.0566 9.81092 9.05777C7.83065 8.95898 6.24999 7.31687 6.24999 5.3125C6.24999 3.24473 7.93221 1.5625 9.99998 1.5625C12.0678 1.5625 13.75 3.24473 13.75 5.3125C13.75 7.31637 12.1701 8.95816 10.1905 9.0577Z" fill="#666666" />
            </svg> */}
            My Profile
          </button>
        </Link>
        <Link to='/profile/Planner'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            {/* <ClipboardIcon className='h-5 w-5' /> */}
            <img className='h-5 w-5' src={planner} alt='' />
            My Planner
          </button>
        </Link>
        <Link to='/profile/importent'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            {/* <ArrowTopRightOnSquareIcon className='h-5 w-5' /> */}
            <img className='h-5 w-5' src={imports} alt='' />
            Important Link
          </button>
        </Link>
        <Link to='/profile/orderhistory'>
          <button className='mt-1 gap-x-[14px] flex items-center leading-[24px] text-base rounded-[8px] w-[223px] px-4 py-2 bg-[#FFFFFF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
            {/* <ClockIcon className='h-5 w-5' /> */}
            <img className='h-5 w-5' src={order} alt='' />
            Order History
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;