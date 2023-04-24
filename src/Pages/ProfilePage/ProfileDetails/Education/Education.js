import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import EducationEdit from '../../ProfileDetailsEdit/EducationEdit/EducationEdit';

const Education = () => {
  const [isChecked, setIsChecked] = useState(Boolean);
  const checkSwitch = (value) => {
    return setIsChecked(!value);
  }

  return (
    <div className='poppins'>
      <div className="flex justify-between items-center">
        <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
          Education
        </h1>
        <label htmlFor="edit-education-modal">
          <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
            <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
            <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
          </div>
        </label>
      </div>
      <EducationEdit />
      <div className='lg:grid flex lg:flex-row flex-col grid-cols-2'>
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Your Education level
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Higher secondary</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Exam/Degree Title
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Higher secondary</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Institution Name
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Lions school and collage, Rangpur</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Approximate Passing year
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;