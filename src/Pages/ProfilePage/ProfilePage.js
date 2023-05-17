import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ResponsiveBottomNav from './ResponsiveBottomNav/ResponsiveBottomNav';
import { Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import useTitle from '../../hooks/useTitle';


const ProfilePage = () => {

    useTitle('Profile - ');

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