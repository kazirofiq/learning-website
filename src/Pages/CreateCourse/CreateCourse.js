import React from 'react';
import CreateCourseNav from './CreateCourseNav/CreateCourseNav';
import SideCategory from './SideCategory/SideCategory';
import CourseDetailsInput from './CourseDetailsInput/CourseDetailsInput';

const CreateCourse = () => {
  return (

    <div className='poppins'>
      <div className=''>
        <div className='shadow-lg p-6'>
          <CourseDetailsInput />
        </ div>
      </div>
    </div>
  );
};

export default CreateCourse;