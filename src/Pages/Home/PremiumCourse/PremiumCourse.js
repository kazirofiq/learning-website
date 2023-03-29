import React from 'react';
import EnrollMentCard from './EnrollMentCard/EnrollMentCard';
import PremiumCourseHome from './PremiumCourseHome/PremiumCourseHome';
import PremiumCourseBanner from './PremiumCourseBanner/PremiumCourseBanner';

const PremiumCourse = () => {
    return (
        <div>
            <PremiumCourseBanner />
            <div className='flex justify-between'>
                    <PremiumCourseHome />
                    <EnrollMentCard />
        </div>
        </div>
        
    );
};

export default PremiumCourse;