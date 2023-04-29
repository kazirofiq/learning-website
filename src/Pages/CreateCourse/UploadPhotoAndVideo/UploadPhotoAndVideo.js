import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './UploadPhotoAndVideo.css';
import UploadCoverImg from '../CourseUploadProgress/UploadCoverImg';
import UploadKDPvideo from '../CourseUploadProgress/UploadKDPvideo';
import UploadImgIcon from "../../../assest/icon/uploadPhoto.png";
import UploadVideoIcon from "../../../assest/icon/Video upload.png";

const UploadPhotoAndVideo = () => {
  // Use Dropzone function
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div className='mt-4 flex items-center gap-x-6'>
            <div>
            <label htmlFor='Will-Learn' className="label text-[#666666] font-normal text-sm">Cover Photo</label>
            <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive 
        ?
        <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
        <img src={UploadImgIcon} alt="" />
        <div className='mt-3'>
          <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
        </div>
    </div> 
          :
          <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
              <img src={UploadImgIcon} alt="" />
              <div className='mt-3'>
                <p className='font-semibold text-sm text-[#333333]'>Drag & Drop image or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                <p className='font-light text-xs text-[#666666]'>SVG, PNG, JPG or GIF (max. 350×250)</p>
              </div>
          </div>
      }
    </div>
            <div>
               <UploadCoverImg />
            </div>
            </div>
            <div>
            <label htmlFor='Promotional-Video' className="label text-[#666666] font-normal text-sm">Promotional Video</label>
          
      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
              <img src={UploadVideoIcon} alt="" />
              <div className='mt-3'>
                <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
              </div>
          </div>
          :
          <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
              <img src={UploadVideoIcon} alt="" />
              <div className='mt-3'>
                <p className='font-semibold text-sm text-[#333333]'>Drag & Drop video or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                <p className='font-light text-xs text-[#666666]'>SVG, PNG, JPG or GIF (max. 350×250)</p>
              </div>
          </div>
      }
    </div>
            <div className='mt-4'>
              <UploadKDPvideo />
            </div>
            </div>
        </div>
    );
};

export default UploadPhotoAndVideo;