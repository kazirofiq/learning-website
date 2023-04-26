import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone';
import UploadImgIcon from '../../../../assest/icon/Cloud-upload.png';
import videoIcon from '../../../../assest/icon/video-camera.png';
import checkedIcon from '../../../../assest/icon/Checked Square.png';
import PlusIcon from '../../../../assest/icon/plus.png';
import Buttons from '../../../CreateCourse/Buttons/Buttons';
const UploadVideoCurriculum = () => {

    // Use Dropzone function
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div>
            <div className='mt-3 pb-8 px-6 pt-6 rounded-xl bg-[#ffffff]'>

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
        <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px] border-[1px] border-dashed border-[#3D419F]'>
        <img src={UploadImgIcon} alt="" />
        <div className='mt-3'>
          <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
        </div>
    </div> 

          :

          <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px] border-[1px] border-dashed border-[#3D419F]'>
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
            <div className='flex items-center mt-5'>
            <img className='mr-3' src={PlusIcon} alt="" />
                  <span className='font-normal text-base text-[#3D419F] cursor-pointer'>Add More</span>
        </div>
        <Buttons setRoute={'/admindashboard/course-create/faq'} text={'Save & Continue'} />
            </div>
        </div>
    );
};

export default UploadVideoCurriculum;