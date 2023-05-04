import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import EduCationEditing from '../../ProfileDetailsEdit/EduCationEditing/EduCationEditing';


const Education = () => {
  

  const { user } = useContext(AuthContext);
  const { data: student = {}, refetch } = useQuery({
    queryKey: ["education", user?.uid],
    queryFn: () =>
      fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`).then((res) => res.json()),
  });

  const [isChecked, setIsChecked] = useState(Boolean);
  const checkSwitch = (value) => {
    return setIsChecked(!value);
  }

  return (
    <div className='poppins mb-[128px]'>
      <div className="flex justify-between items-center">
        <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
          Education
        </h1>
        <label htmlFor="editEducationModal">
          <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
            <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
            <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
          </div>
        </label>
      </div>
      <div className='lg:grid flex lg:flex-row flex-col grid-cols-2'>
        <div className='mt-3'>
          <label htmlFor="education" className='block text-[#666666] font-normal text-sm mb-2'>Your Education level</label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.education || "N/A"}</p>
        </div>
        <div className='mt-3'>
          <label htmlFor="education" className='block text-[#666666] font-normal text-sm mb-2'>Exam/Degree Title</label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.degree || "N/A"}</p>
        </div>
        <div className='mt-3'>
          <label htmlFor="education" className='block text-[#666666] font-normal text-sm mb-2'>Institution Name</label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.intitution || "N/A"}</p>
        </div>
        <div className='mt-3'>
          <label htmlFor="education" className='block text-[#666666] font-normal text-sm mb-2'>Approximate Passing year</label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.passingYear || "N/A"}</p>
        </div>
        

      </div>
      <EduCationEditing>
      </EduCationEditing>
    </div>
  );
};

export default Education;