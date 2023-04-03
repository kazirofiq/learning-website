import React from 'react';
import { Outlet } from 'react-router';
import MyCourse from '../Pages/MyClasses/MyClasses';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Breadcrumb from '../Pages/Others/Breadcrumb/Breadcrumb';

const MyCourseLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className='bg-[#F8F8FF] pt-[34px]'>
                <div className='lg:w-[1110px] mx-auto'>
                    <Breadcrumb></Breadcrumb>
                    <div className='grid lg:grid-cols-[1fr_350px] grid-cols-1 mb-6'>


                        <div className='my-[22px] '>
                            <input className='hidden'
                                type="checkbox" id='toggle-sidebar' />
                            <Outlet></Outlet>

                        </div>
                        <div className={'w-[350px]'}><MyCourse></MyCourse></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyCourseLayout;