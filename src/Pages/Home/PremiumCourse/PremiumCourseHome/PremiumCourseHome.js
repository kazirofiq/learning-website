import React from 'react';
// import CourseCurriculum from '../CourseCurriculum/CourseCurriculum';
import FreeVideo from '../FreeVideo/FreeVideo';
import LearnerReview from '../LearnerReview/LearnerReview';
import Mentor from '../Mentor/Mentor';
import PremiumCourseBanner from '../PremiumCourseBanner/PremiumCourseBanner';

const PremiumCourseHome = () => {
    return (
        <div className=''>
            <PremiumCourseBanner />
            <Mentor></Mentor>
            <LearnerReview></LearnerReview>
            <FreeVideo></FreeVideo>
        </div>
    );
};

export default PremiumCourseHome;