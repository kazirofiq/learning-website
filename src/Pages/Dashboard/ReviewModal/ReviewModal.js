import React from 'react';
import fullstar from '../../../assest/course_image/fullstar.png';
import halfstar from '../../../assest/course_image/halfstar.png';
import borderstar from '../../../assest/course_image/star_border2.png';

const ReviewModal = () => {
    return (
        <div>

            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="relative mx-auto bg-white rounded-[20px]">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white">✕</label>
                    <div className="poppins px-5 py-5">
                        <div className='w-[348px] h-[414px] border'>
                            <div className='mx-[24px] my-[24px]'>
                                <p className='text-[#333333] font-semibold text-xl text-center'>Write a review</p>
                                <p className='text-[#666666] font-normal text-[14px] mt-3'>Your Rating</p>
                                <div className='flex items-center gap-x-1 mt-1'>
                                    <img className='h-5 w-5' src={fullstar} alt='' />
                                    <img className='h-5 w-5' src={fullstar} alt='' />
                                    <img className='h-5 w-5' src={fullstar} alt='' />
                                    <img className='h-5 w-5' src={halfstar} alt='' />
                                    <img className='h-7 w-7' src={borderstar} alt='' />
                                </div>
                                <div className="mt-4">
                                    <label className="label">
                                        <span className="text-[#666666] font-normal text-[14px]">Your Comment</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-[126px] w-full" placeholder="Write your comment here"></textarea>
                                </div>
                                <div className='flex items-center mt-3 gap-x-[6px]'>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" />
                                    <p className='text-[#656565] text-xs font-normal leading-[18px]'>I understood that my review will be posted <br /> Publickly</p>
                                </div>
                                <div className='mt-4'>
                                    <button className='w-full bg-[#3D419F] rounded-xl py-2 text-white font-normal text-base leading-6'>Submit review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;