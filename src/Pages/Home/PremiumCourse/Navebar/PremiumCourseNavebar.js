import React from 'react';
import { Link } from 'react-router-dom';
// import Scrollspy from 'react-scrollspy';



const PremiumCourseNavebar = () => {
    return (
        <div className="bg-[#ECECF5] rounded-[10px] mt-[32px] sticky top-0">
    <ul className="flex justify-between h-[40px] items-center">
      <li className=''>
        <Link className='bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'>
          Overview
        </Link>
      </li>
      <li>
      <Link className='text-[#C3C4E1] rounded-[10px] h-[40px] flex items-center w-[152px] justify-center'>
      Curriculum
        </Link>
        </li>
      <li>
      <Link className='text-[#C3C4E1] rounded-[10px] h-[40px] flex items-center w-[152px] justify-center'>
      Instructor
        </Link>
        </li>
      <li>
      <Link className='text-[#C3C4E1] rounded-[10px] h-[40px] flex items-center w-[152px] justify-center'>
      Reviews
        </Link>
        </li>
      <li>
      <Link className='text-[#C3C4E1] rounded-[10px] h-[40px] flex items-center w-[152px] justify-center'>
      FAQ
        </Link>
        </li>
    </ul>
</div>
    );
};

export default PremiumCourseNavebar;