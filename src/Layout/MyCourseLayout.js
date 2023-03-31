import React from 'react';
import { Outlet } from 'react-router';
import MyCourse from '../Pages/MyCourse/MyCourse';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MyCourseLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <section className='bg-[#F8F8FF]'>
           <div className='lg:w-[1110px] mx-auto'>
        <div className='grid lg:grid-cols-[1fr_350px] grid-cols-1 mb-6'>
            
            {/* <div 
            onClick={toggleSidebar}
             className={`fixed lg:hidden w-full h-full z-[9999] bg-[#00000075] 
             ${hidden}`}></div> */}
            <div className='m-8 h-screen'>
                <input className='hidden'
                //  onClick={toggleSidebar}
                  type="checkbox" id='toggle-sidebar'/>
                <Outlet></Outlet>
                {/* <Header></Header>
                <Dashboard></Dashboard> */}
                
                </div>
                <div className={'transition w-[95%] sm:w-1/2 pr-6 lg:w-full  lg:-translate-x-0 fixed lg:static z-[99999] '}><MyCourse></MyCourse></div>
        </div>
        </div> 
        </section>
        </>
    );
};

export default MyCourseLayout;