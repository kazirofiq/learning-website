import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ResponsiveBottomNav from './ResponsiveBottomNav/ResponsiveBottomNav';
import { Outlet } from 'react-router-dom';


const ProfilePage = () => {
    return (
        <div className='lg:w-[1110px] w-[360] lg:p-0 p-5 mx-auto lg:grid lg:gap-x-[30px]' style={{ gridTemplateColumns: "1fr 4fr" }}>
            <div className='lg:block hidden'>
                <ProfileCard />
            </div>
            <div>
                {/* <ProfileDetails /> */}
                <Outlet>

                </Outlet>
            </div>
            <div className='lg:hidden block'>
                <ResponsiveBottomNav />
            </div>
        </div>
    );
};

export default ProfilePage;