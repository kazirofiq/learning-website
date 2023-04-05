import React from 'react';
import UploadImageCard from './UploadImageCard/UploadImageCard';
import AboutMe from './AboutMe/AboutMe';
import Address from './Address/Address';
import Education from './Education/Education';
import ProfileCompleteProgressbar from '../ProfileCompletedRange/ProfileCompleteProgressbar';

const ProfileDetails = () => {
    return (
       <div className=''>
           <div className='p-6 bg-[#FFFFFF] shadow-sm'>
           <h1 className='text-[#1B1D48] font-semibold text-base'>My Profile</h1>
            <UploadImageCard />
            <div className='w-[150px] h-[58px] lg:hidden block'>
              <ProfileCompleteProgressbar />
            </div>
            <AboutMe />
           </div>
           <div className='p-6 bg-[#FFFFFF] shadow-sm mt-6'>
             <Address />
           </div>
           <div className='p-6 bg-[#FFFFFF] shadow-sm mt-6'>
             <Education />
           </div>
       </div>
    );
};

export default ProfileDetails;