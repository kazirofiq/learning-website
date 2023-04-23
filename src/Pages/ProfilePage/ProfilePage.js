import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import ResponsiveBottomNav from './ResponsiveBottomNav/ResponsiveBottomNav';


const ProfilePage = () => {
    return (
        <div className='' style={{ gridTemplateColumns: "1fr 4fr" }}>
            <ProfileDetails />
            <div className='lg:hidden block'>
                <ResponsiveBottomNav />
            </div>
        </div>
    );
};

export default ProfilePage;