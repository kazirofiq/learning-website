import React from 'react';
import videoIcon from '../../../assest/icon/video-camera.png';
import videoIconSmall from '../../../assest/icon/video-camera-small.png';
import checkedIcon from '../../../assest/icon/Checked Square.png';
import './CourseUploadProgress.css';
const UploadCoverImg = () => {
    return (
        <div className='mt-4 poppins'>
            <div className='bg-[#F8F8FF] rounded-xl p-[15px]'>
                <div className="flex items-center">
                    <img className='w-10 h-10 mr-[5px]' src={videoIcon} alt="" />
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-[#333333] font-normal text-base'>KDP Course Cover image.Jpg</p>
                        <img src={videoIconSmall} alt="" />
                    </div>
                </div>
                <div className='flex flex-col ml-[44px]'>
                    <span className='text-[#666666] font-light text-xs'>3.5 MB</span>
                    <div className='flex items-center'>
                        <progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value="40" max="100"></progress>
                        <span className='text-[#333333] font-normal text-base'>65%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadCoverImg;