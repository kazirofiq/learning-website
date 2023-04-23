import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import ProfileCard from '../Pages/ProfilePage/ProfileCard/ProfileCard';
import { Outlet } from 'react-router-dom';
import ResponsiveBottomNav from '../Pages/ProfilePage/ResponsiveBottomNav/ResponsiveBottomNav';
import Footer from '../Pages/Shared/Footer/Footer';

const ProfileLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#F8F8FF]'>
                <div className='lg:w-[1110px] w-[360] lg:p-0 md:p-0 p-5 mx-auto md:grid lg:grid lg:gap-x-[30px] md:gap-x-[20px]' style={{ gridTemplateColumns: "1fr 4fr" }}>
                    <div className='ml-[50px] md:ml-0 lg:ml-0 hidden lg:block md:block'>
                        <ProfileCard />
                    </div>
                    <Outlet></Outlet>
                    <div className='lg:hidden block'>
                        <ResponsiveBottomNav />
                    </div>
                </div>
            </div>
            <div className='hidden lg:block md:block'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProfileLayout;