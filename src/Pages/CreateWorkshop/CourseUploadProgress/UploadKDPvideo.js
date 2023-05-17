import React from 'react';
import videoIcon from '../../../assest/icon/video-camera.png';
import crossIcon from '../../../assest/icon/Cross.png';
const UploadKDPvideo = ({ videoStatus, fileInfo, handleCancelUpload }) => {
    return (
        <div className='mt-4 poppins'>
            <div className='bg-[#F8F8FF] rounded-xl p-[15px]'>
                <div className="flex items-center">
                    <img className='w-10 h-10 mr-[5px]' src={videoIcon} alt="" />
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-[#333333] font-normal text-base'>{fileInfo?.name}</p>
                        <img onClick={handleCancelUpload} className='cursor-pointer' src={crossIcon} alt="" />
                    </div>
                </div>
                <div className='flex flex-col ml-[44px]'>
                    <span className='text-[#666666] font-light text-xs'>{(fileInfo?.size / 1048576).toFixed(2)} MB</span>
                    <div className='flex items-center'>
                        <progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value={videoStatus} max="100"></progress>
                        <span className='text-[#333333] font-normal text-base'>{videoStatus}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadKDPvideo;