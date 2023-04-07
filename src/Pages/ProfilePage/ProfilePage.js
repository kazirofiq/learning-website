import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import ResponsiveBottomNav from './ResponsiveBottomNav/ResponsiveBottomNav';


const ProfilePage = () => {
    return (
        <div className='lg:w-[1110px] w-[360] lg:p-0 p-5 mx-auto lg:grid lg:gap-x-[30px]' style={{gridTemplateColumns:"1fr 4fr"}}>
            <div className='lg:block hidden'>
            <ProfileCard />
            </div>
            <ProfileDetails />
            <div className='lg:hidden block'>
                <ResponsiveBottomNav />
            </div>
        </div>
    );
};

export default ProfilePage;