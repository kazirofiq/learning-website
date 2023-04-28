import React from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadImgIcon from "../../../assest/icon/uploadPhoto.png";
import crosX from "../../../assest/icon/Cross@2x.png";
import cros from "../../../assest/icon/Cross.png";

const UploadFile = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div>
            <div className='mt-4 px-6 pb-6'>
         <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-medium text-sm mb-2"
          >
            Upload Image <span className='text-[#333333]'>(For Idea Or Inspiration)</span>
          </label>
          <div className='flex flex-col lg:flex-row lg:grid grid-cols-2 gap-x-6'>
          <div className='bg-[#F8F8FF] w-[288px] lg:w-[381px] rounded-xl' {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className='flex justify-center items-center flex-col w-[288px] h-[135px] lg:w-[381px] lg:h-[159px] rounded-[12px] border-[1px] border-dashed border-[#3D419F]'>
        <img src={UploadImgIcon} alt="" />
        <div className='mt-3'>
          <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
        </div>
    </div> 

          :

          <div className='flex justify-center items-center flex-col w-[288px] h-[135px] lg:w-[381px] lg:h-[159px] rounded-[12px] border-[1px] border-dashed border-[#3D419F]'>
              <img src={UploadImgIcon} alt="" />
              <div className='mt-3'>
                <p className='font-semibold text-sm text-[#333333]'>Drag & Drop image or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                <p className='font-light text-xs text-[#666666]'>Video, Pdf or Text file (max. 2.0 GB)</p>
              </div>
          </div>
      }
    </div>

    <div className="card lg:w-[381px] w-[288px] h-[111px] bg-[#F8F8FF] shadow-md pr-4 pl-[10px] py-[10px] lg:mt-0 mt-4">
       <div>
       <div className='rounded-xl mt-3'>
            <div className="flex items-center">
        <img className='w-10 h-10 mr-[5px] cursor-pointer' src={crosX} alt="" />
        <div className='flex items-center justify-between w-full'>
            <p className='text-[#333333] font-normal text-base'>KDP Course Video 12.Mp4</p>
            <img className='cursor-pointer' src={cros} alt="" />
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
    );
};

export default UploadFile;