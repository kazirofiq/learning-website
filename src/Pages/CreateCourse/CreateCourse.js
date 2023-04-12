import React from 'react';
import CreateCourseNav from './CreateCourseNav/CreateCourseNav';
import SideCategory from './SideCategory/SideCategory';

const CreateCourse = () => {
    return (
            <div>
                    <div className='px-4 poppins w-[1160px] mx-auto'>
                            <div className='mt-[41px]'>
                                <span className='text-[#1B1D48] font-semibold text-2xl'>Create New Course</span>
                                <div className='mt-[18px]'>
                                    <SideCategory />
                                </div>
                            </div>
                    </div>
            </div>
    );
};

export default CreateCourse;