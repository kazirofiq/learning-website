import React from 'react';
import avatarBig from '../../../../assest/Profile_image/Avatar Big.png';
import uploadIcon from "../../../../assest/icon/upload.png";
const UploadImageCard = () => {
    return (
        <div className="card w-[263px] lg:w-full bg-base-100 mt-6">
        <div className='flex items-center'>
            <img className='w-24 h-24 lg:w-[120px] lg:h-[120px] mr-6' src={avatarBig} alt="" />
            <div>
                <input type="file" id="upload" hidden/>
                <label for="upload" className='lg:inline-block flex justify-center items-center lg:w-[173px] lg:h-10 h-[37px] w-[151px] bg-[#3D419F] lg:py-2 lg:px-4 rounded-[10px] cursor-pointer'>
                    <div className='flex items-center justify-center'>
                    <img className='mr-[10px] w-4 h-4 lg:w-6 lg:h-6' src={uploadIcon} alt="" />
                    <span className='text-[#FFFFFF] font-medium lg:text-base text-sm'>
                    Upload Photo
                    </span>
                    </div>
                    </label>
            </div>
        </div>
      </div>
    );
};

export default UploadImageCard;