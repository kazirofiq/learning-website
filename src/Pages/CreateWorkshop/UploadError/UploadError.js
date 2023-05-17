import React from 'react';
import redCross from "../../../assest/icon/Cross-red.png";

const UploadError = ({ icon, fileInfo, setError }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px] mt-3">
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='w-10 h-10 mr-[6px]' src={icon} alt="" />
                        <h3 className='font-normal text-base text-[#E8291D]'>Upload failed, try again</h3>
                    </div>
                    <img onClick={() => setError(false)} className='cursor-pointer' src={redCross} alt="" />
                </div>
                <div className='ml-[46px]'>
                    <p className='font-light text-xs text-[#E8291D]'>{fileInfo?.name}</p>
                    <h2 className='font-normal text-base text-[#E8291D]'>Try again</h2>
                </div>
            </div>
        </div>
    );
};

export default UploadError;