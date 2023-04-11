import React from 'react';
import adminImg from "../../../assest/Profile_image/adminImg.png";
const CreateCourseNav = () => {
    return (
        <div className='flex justify-between items-center py-6'>
            <div>
                <h1 className='font-medium text-xl text-[#333333]'>Hello, Mondol!</h1>
                <p className='text-xs text-[#666666] font-normal'>Good Morning, Let’s start learning</p>
            </div>
            <div className='flex items-center'>
            <div className='text-right mr-3'>
                <h2 className='text-[#333333] font-medium text-base'>Olivia Rhye</h2>
                <span className='text-[#666666] font-normal text-sm'>Admin</span>
            </div>
            <div>
                    <img src={adminImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default CreateCourseNav;