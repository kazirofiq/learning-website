import React from 'react';
import CourseCurriculum from '../CourseCurriculum/CourseCurriculum';
import FreeVideo from '../FreeVideo/FreeVideo';
import Mentor from '../Mentor/Mentor';

const PremiumCourseHome = () => {
    return (
        <div className=''>
            <CourseCurriculum></CourseCurriculum>
            <Mentor></Mentor>
            <FreeVideo></FreeVideo>
        </div>
    );
};

export default PremiumCourseHome;