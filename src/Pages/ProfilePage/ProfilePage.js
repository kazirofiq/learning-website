import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileDetails from './ProfileDetails/ProfileDetails';

const ProfilePage = () => {
    return (
        <div className='lg:w-[1110px]  mx-auto grid gap-x-[30px]' style={{gridTemplateColumns:"1fr 4fr"}}>
            <ProfileCard />
            <ProfileDetails />
        </div>
    );
};

export default ProfilePage;