import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Breadcrumb from '../Pages/Others/Breadcrumb/Breadcrumb';
import MyClasses from '../Pages/MyClasses/MyClasses';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ReviewModal from '../Pages/Dashboard/ReviewModal/ReviewModal';

const MyCourseLayout = () => {

    return (
        <>
            <Navbar></Navbar>
            <section className='bg-[#F8F8FF] min-h-full pt-0 lg:pt-[34px]'>
                <div className='lg:w-[1110px] w-[360px] mx-auto'>
                    <Breadcrumb></Breadcrumb>
                    <div className='grid lg:grid-cols-[1fr_350px] h-[413px] grid-cols-1 mb-6'>
                        <div className='mt-0 lg:my-[22px] '>
                            <input className='hidden'
                                type="checkbox" id='toggle-sidebar' />
                            <Outlet></Outlet>
                        </div>
                        <div className='hidden lg:block'>
                            <MyClasses></MyClasses>
                        </div>
                    </div>
                    <Dashboard />
                    <ReviewModal />
                </div>
                <div className='lg:hidden flex items-center justify-center'>
                    <MyClasses />
                </div>
            </section>
            <div className='mt-14 lg:mt-20'>
                <Footer />
            </div>
        </>
    );
};

export default MyCourseLayout;