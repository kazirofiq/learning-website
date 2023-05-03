import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import EducationEdit from '../../ProfileDetailsEdit/EducationEdit/EducationEdit';
import EduCationEditing from '../../ProfileDetailsEdit/EduCationEditing/EduCationEditing';


const Education = () => {
  const [editingEducation, setEditingEducation] = useState(null);

  const {user}= useContext(AuthContext);
  const { data: student = {}, refetch } = useQuery({
    queryKey: ["education", user?.uid ],
    queryFn: () =>
      fetch(`http://localhost:5000/users/uid?uid=${user?.uid}`).then((res) => res.json()),
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
        <div className='flex flex-col-reverse lg:hidden'>
          <div className='mt-3'>
            <label htmlFor="Degree-Title" className='block text-[#666666] font-normal text-sm mb-2'>Exam/Degree Title</label>
            <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.degree || "N/A"}</p>
            <div className='flex justify-start items-center'>

              <div className="bg-white border-2  border-[#666666] w-[16px] h-[16px] flex  flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#666666]">
                <svg
                  className="fill-current hidden h-[18px] w-[18px] pointer-events-none text-[#666666]"
                  version="1.1"
                  viewBox="0 0 17 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#3D419F"
                      fill-rule="nonzero"
                    >
                      <path className="" d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
              <label htmlFor='graduated' className="label cursor-pointer font-normal text-xs text-[#666666]">
                Graduated</label>
            </div>
          </div>
          <div className='mt-3'>
            <label htmlFor="Institution-Name" className='block text-[#666666] font-normal text-sm mb-2'>Institution Name</label>
            
            <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.intitution || "N/A"}</p>

          </div>
        </div>

      </div>
      <EduCationEditing>
              </EduCationEditing>
    </div>
  );
};

export default Education;