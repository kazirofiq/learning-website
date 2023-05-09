import React, { useEffect } from 'react';
import PremiumCourseBanner from '../PremiumCourseBanner/PremiumCourseBanner';
import useTitle from '../../../../hooks/useTitle';

const PremiumCourseHome = () => {

    useTitle('Premium Course - ');

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