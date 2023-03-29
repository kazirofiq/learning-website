import React from 'react';
import FreeVideo from '../FreeVideo/FreeVideo';
import Mentor from '../Mentor/Mentor';
import PremiumCourseBanner from '../PremiumCourseBanner/PremiumCourseBanner';

const PremiumCourseHome = () => {
    return (
        <div className=''>
            <PremiumCourseBanner />
            <Mentor></Mentor>
            <FreeVideo></FreeVideo>
        </div>
    );
};

export default PremiumCourseHome;