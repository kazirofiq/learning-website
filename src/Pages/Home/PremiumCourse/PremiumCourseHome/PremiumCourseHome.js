import React from 'react';
import CourseCurriculum from '../CourseCurriculum/CourseCurriculum';
// import CourseCurriculum from '../CourseCurriculum/CourseCurriculum';
import FreeVideo from '../FreeVideo/FreeVideo';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import LearnerReview from '../LearnerReview/LearnerReview';
import Mentor from '../Mentor/Mentor';
import PremiumCourseBanner from '../PremiumCourseBanner/PremiumCourseBanner';

const PremiumCourseHome = () => {
    return (
        <div className=''>
            <PremiumCourseBanner />
            <CourseCurriculum />
            <Mentor></Mentor>
            <LearnerReview></LearnerReview>
            <FrequentlyAskedQuestion />
            <FreeVideo></FreeVideo>
        </div>
    );
};

export default PremiumCourseHome;