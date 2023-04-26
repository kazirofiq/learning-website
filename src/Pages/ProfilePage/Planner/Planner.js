import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import UploadedImage from './UploadedImage';

const Planner = () => {
    return (
        <div className='bg-[#F8F8FF]  lg:px-0 md:px-0 py-8 lg:py-[60px] md:py-[50px]'>
            <div className='bg-[rgb(255,255,255)] w-full max-w-[825px]   py-5 lg:my-6 md:py-6 shadow-md rounded-xl'>
            <div>
                <h3 className='px-3 pb-4 text-2xl font-bold'>My Planner</h3>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-y-0 gap-x-0  border-b-2'> 
                    <div className='  border-r-2'>
                        <div className='bg-[#F8F8FF] py-3  px-3 text-gray-500'> Task list</div>
                        <div className=' py-2  px-3 border-b-2'>
                            <div className="form-control">
                                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                                <input type="checkbox" />
                                <span className="pl-2"> Check and finalize the formatting of the manuscript to ensure consistency.</span>
                                </label>
                            </div>
                            

                         </div>
                         <div className=' py-2  px-3 border-b-2'>
                            <div className="form-control">
                                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                                <input type="checkbox" />
                                <span className="pl-2"> Check and finalize the formatting of the manuscript to ensure consistency.</span>
                                </label>
                            </div>
                            

                         </div>
                         <div className=' py-2  p-3 border-b-0'>
                            <div className="form-control">
                                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                                <input type="checkbox" />
                                <span className="pl-2"> Check and finalize the formatting of the manuscript to ensure consistency.</span>
                                </label>
                            </div>
                            

                         </div>
                       
                    </div>
                    <div className=''>
                        <div className='bg-[#F8F8FF] py-3 px-3 text-gray-500'>Note</div>
                        <div className='py-1 px-3  border-b-0'>
                          <p>Just a quick reminder that today's focus is on the KDP interior. Please make sure that all design elements are in place and that the formatting is correct. 
                            Remember to double-check for any errors before uploading the file. Let's aim for a polished and professional final product. Don't hesitate to ask for Mentor if needed.
                          </p>
                        </div>
                    </div>
                </div>
                <div className='py-5 border-b-2 px-3'>
                    <button className='px-3 py-2 border rounded-lg'><AiOutlinePlus  className='inline'/>  Add Task</button>
                </div>
            </div>
            <UploadedImage />
        </div>
        </div>
    );
};

export default Planner;