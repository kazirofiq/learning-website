import React from 'react';
import UploadVideoCurriculum from '../UploadVideo/UploadVideoCurriculum';


const MakeCoverTemplate = () => {
    return (
        <div className='mt-3'>
            <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Lesson 1-5:
          </label>
            <input type="text" placeholder="How to make book cover template for kdp" className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            <div>
                <UploadVideoCurriculum />
            </div>
          </div>
    );
};

export default MakeCoverTemplate;