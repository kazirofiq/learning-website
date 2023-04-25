import React, { useEffect } from 'react';
import PremiumCourseBanner from '../PremiumCourseBanner/PremiumCourseBanner';

const PremiumCourseHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className=''>
            <PremiumCourseBanner />
        </div>
    );
};

export default PremiumCourseHome;