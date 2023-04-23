import React, { useCallback } from 'react';
import trash from "../../../assest/icon/trash.png";
import UploadImgIcon from "../../../assest/icon/Cloud-upload.png";
import redVideoIcon from "../../../assest/icon/video-camera-red.png";
import redCros from "../../../assest/icon/Cross-red.png";
import Cross from "../../../assest/icon/Cross.png";
import plusIcon from "../../../assest/icon/plus.png";
import whitePlusIcon from "../../../assest/icon/plus-white.png";
import videoIcon from "../../../assest/icon/video-camera.png";
import AddLessonModal from '../AddLessonModal/AddLessonModal';
import Buttons from '../../CreateCourse/Buttons/Buttons';
import { useDropzone } from 'react-dropzone';
import checkedIcon from "../../../assest/icon/Checked Square.png";
import QuizAccordion from './QuizAccordion/QuizAccordion';
import MakeCoverTemplate from './MakeCoverTemplate/MakeCoverTemplate';

const CourseCurriculumQuiz = () => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className='poppins'>
            <div className='flex justify-between items-center'>
               {/* Module 1 style */}
            <div className='flex items-center'>
            <h3 className='font-semibold text-lg text-[#1B1D48] mr-3'>Module 3 : Types of Niches in Amazon KDP</h3>
            <img className='cursor-pointer' src={trash} alt="" />
            </div>
            <div>
            <button className="w-[152px] h-[40px] text-[#3D419F] border-[1px] border-[#3D419F] flex items-center justify-center rounded-lg">
              <span>
                <img className='mr-2' src={plusIcon} alt="" />
                </span> 
                Add Module
              </button>
            </div>
            </div>

            <div className='mt-3 pb-8 px-6 pt-6 shadow-md rounded-xl bg-[#ffffff]'>
            <label
            htmlFor="Lesson1-3"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Lesson 1-3:
          </label>
          <input type="text" id='Lesson1-3' placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
         <div className='mt-4'>
         <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Upload File
          </label>
          <div className='grid grid-cols-2 gap-x-6'>
          <div className='bg-[#F8F8FF] w-[420px] rounded-xl' {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
        <img src={UploadImgIcon} alt="" />
        <div className='mt-3'>
          <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
        </div>
    </div> 

          :

          <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
              <img src={UploadImgIcon} alt="" />
              <div className='mt-3'>
                <p className='font-semibold text-sm text-[#333333]'>Drag & Drop image or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                <p className='font-light text-xs text-[#666666]'>Video, Pdf or Text file (max. 2.0 GB)</p>
              </div>
          </div>
      }
    </div>
    <div>
    <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
       <div>
       <div className='bg-[#F8F8FF] rounded-xl p-[15px] mt-3'>
            <div className="flex items-center">
        <img className='w-10 h-10 mr-[5px]' src={videoIcon} alt="" />
        <div className='flex items-center justify-between w-full'>
            <p className='text-[#333333] font-normal text-base'>KDP Course Video 12.Mp4</p>
            <img src={checkedIcon} alt="" />
        </div>
</div>
<div className='flex flex-col ml-[44px]'>
<span className='text-[#666666] font-light text-xs'>3.5 MB</span>
<div className='flex items-center'>
<progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value="100" max="100"></progress>
<span className='text-[#333333] font-normal text-base'>100%</span>
</div>
</div>
            </div>
      </div>
</div>
    </div>
          </div>
         </div>
            {/* Quiz Accordion component */}
            <div className='mt-3'>
            <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Lesson 1-4: Quiz
          </label>
          <input type="text" id='Upload-File' placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-full h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
             <div className='mt-5'>
             <QuizAccordion />
             </div>
            </div>
            <MakeCoverTemplate />
            </div>
        </div>
    );
};

export default CourseCurriculumQuiz;