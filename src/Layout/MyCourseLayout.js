import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Breadcrumb from '../Pages/Others/Breadcrumb/Breadcrumb';
import MyClasses from '../Pages/MyClasses/MyClasses';

const MyCourseLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className='bg-[#F8F8FF] pt-0 lg:pt-[34px]'>
                <div className='lg:w-[1110px] w-[360px] mx-auto'>
                    <Breadcrumb></Breadcrumb>
                    <div className='grid lg:grid-cols-[1fr_350px] grid-cols-1 mb-6'>
                        <div className='mt-0 lg:my-[22px] '>
                            <input className='hidden'
                                type="checkbox" id='toggle-sidebar' />
                            <Outlet></Outlet>
                        </div>
                        <MyClasses></MyClasses>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyCourseLayout;