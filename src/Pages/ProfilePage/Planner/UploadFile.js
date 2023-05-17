import React, { useState } from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadImgIcon from "../../../assest/icon/uploadPhoto.png";
import crosX from "../../../assest/icon/Cross@2x.png";
import cros from "../../../assest/icon/Cross.png";

import UploadCoverImg from '../../CreateCourse/CourseUploadProgress/UploadCoverImg';
import DragAndDrop from '../../CreateCourse/DragAndDrop/DragAndDrop';
const UploadFile = () => {
  
  const [imageStatus, setImageStatus] = useState(0);
  const [imageFileInfo, setImageFileInfo] = useState("");
  const [imageError, setImageError] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);

  const handleUploadImage = files => {
    if (files[0].type.split("/")[0] !== "image") {
      setImageError("Please select only image files");
      return;
    }

    setImageError("");
    setImageFileInfo(files[0]);
    const formData = new FormData();
    formData.append("image", files[0]);
  }

    return (
        <div>
            <div className='mt-4 px-6 pb-6'>
         {/* <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-medium text-sm mb-2"
          >
            Upload Image <span className='text-[#333333]'>(For Idea Or Inspiration)</span> */}
          {/* </label> */}
          <div className='flex flex-col lg:flex-row lg:grid grid-cols-2 gap-x-6'>

          <DragAndDrop
        title="Upload Image (For Idea Or Inspiration)"
        isUploading={isImageUploading}
        icon={UploadImgIcon}
        type="image"
        workWithFiles={handleUploadImage}
        isUploaded={""}
      >
        {
          imageError && <p className='text-red-600 text-center font-semibold'>{imageError}</p>
        }
        {
          imageStatus ? <UploadCoverImg
            imageStatus={imageStatus}
            fileInfo={imageFileInfo}
          /> : ""
        }
      </DragAndDrop>
    </div>

    {/* <div className="card lg:w-[381px] w-[288px] h-[111px] bg-[#F8F8FF] shadow-md pr-4 pl-[10px] py-[10px] lg:mt-0 mt-4">
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
    </div> */}
          </div>
         </div>
    );
};

export default UploadFile;