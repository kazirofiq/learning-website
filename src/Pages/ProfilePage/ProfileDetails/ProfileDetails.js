import React from 'react';
import UploadImageCard from './UploadImageCard/UploadImageCard';
import AboutMe from './AboutMe/AboutMe';

const ProfileDetails = () => {
    return (
       <div className='p-6 bg-[#FFFFFF] shadow-sm'>
            <h1 className='text-[#1B1D48] font-semibold text-base'>My Profile</h1>
            <UploadImageCard />
            <AboutMe />
       </div>
    );
};

export default ProfileDetails;