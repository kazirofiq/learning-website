import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
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


const GreetingsInstroduction = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div className='poppins'>
      <div className='flex justify-between items-center gap-2'>
        {/* Module 1 style */}
        <div className='flex items-center w-full'>
          <input type="text" placeholder="Module Name & Number" className="input bg-transparent w-full focus:outline-none placeholder:text-[#1B1D48] font-semibold text-lg text-[#1B1D48] pl-0" />
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
          htmlFor="Lesson1-1"
          className="block text-[#666666] font-normal text-sm mb-2"
        >
          Lesson 1-1:
        </label>
        <input type="text" id='Lesson1-1' placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
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
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <img className='w-10 h-10 mr-[6px]' src={redVideoIcon} alt="" />
                      <h3 className='font-normal text-base text-[#E8291D]'>Upload failed, try again</h3>
                    </div>
                    <img className='cursor-pointer' src={redCros} alt="" />
                  </div>
                  <div className='ml-[46px]'>
                    <p className='font-light text-xs text-[#E8291D]'>Graphic Design Bootcamp.Mp4</p>
                    <h2 className='font-normal text-base text-[#E8291D]'>Try again</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <img className='mr-3' src={plusIcon} alt="" />
          <span className='font-normal text-base text-[#3D419F] cursor-pointer'>Add More</span>
        </div>
      </div>

      {/* Module 2 style */}
      <div className='flex justify-between items-center mt-[38px]'>
        <h3 className='font-semibold text-lg text-[#1B1D48] mr-3'>Module 2 : Greetings and Instroduction</h3>
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
          htmlFor="Lesson1-1"
          className="block text-[#666666] font-normal text-sm mb-2"
        >
          Lesson 1-2:
        </label>
        <input type="text" id='Lesson1-1' placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
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
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <img className='w-10 h-10 mr-[6px]' src={videoIcon} alt="" />
                      <h3 className='font-normal text-base text-[#333333]'>KDP Course Video 12.Mp4</h3>
                    </div>
                    <img className='cursor-pointer' src={Cross} alt="" />
                  </div>
                  <div className='ml-[46px]'>
                    <span className='font-light text-xs text-[#666666]'>3.5 MB</span>
                    <div className='flex items-center'>
                      <progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value="65" max="100"></progress>
                      <span className='text-[#333333] font-normal text-base'>65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <img className='mr-3' src={whitePlusIcon} alt="" />
          {/* <label htmlFor="addLesson"> */}
          <span className='font-normal text-base text-[#C3C4E1] cursor-pointer'>Add More</span>
          {/* </label> */}
        </div>
        <div className='w-[291px]'>
          <div className='flex justify-end items-center'>
            <img className='cursor-pointer' src={Cross} alt="" />
          </div>
          <div className='w-[291px] h-12 border-[1px] border-[#C3C4E1] rounded-[10px] flex items-center px-4 py-3'>
            <div className='flex items-center cursor-pointer'>
              <img className='mr-3' src={plusIcon} alt="" />
              <span className='font-normal text-base text-[#3D419F]'>Add Lesson</span>
            </div>
            <div className='flex items-center mx-3'>
              <span className='font-normal text-base text-[#C3C4E1]'>or</span>
            </div>
            <div className='flex items-center cursor-pointer'>
              <img className='mr-3' src={plusIcon} alt="" />
              <span className='font-normal text-base text-[#3D419F]'>Add Quiz</span>
            </div>
          </div>

        </div>
        <Buttons setRoute={'/admindashboard/course-create/course-curriculum-quiz'} text={'Save & Continue'} />
      </div>
      {/* Add lesson and add quiz modal component */}
      {/* <AddLessonModal /> */}
    </div>

  );
};

export default GreetingsInstroduction;