import React from 'react';
import avatarBig from '../../../../assest/Profile_image/Avatar Big.png';
import uploadIcon from "../../../../assest/icon/upload.png";
const UploadImageCard = () => {
    return (
        <div className="card w-full bg-base-100 mt-6">
            <div className='flex items-center'>
                <img className='w-[120px] h-[120px] mr-6' src={avatarBig} alt="" />
                <div>
                    <input type="file" id="upload" hidden />
                    <label for="upload" className='inline-block items-center bg-[#3D419F] py-2 px-4 rounded-[10px] cursor-pointer'>
                        <div className='flex items-center'>
                            <img className='mr-[10px]' src={uploadIcon} alt="" />
                            <span className='text-[#FFFFFF] font-medium text-base'>
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