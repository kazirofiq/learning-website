import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentNav from '../StudentNav/StudentNav';
import StudentHeader from '../StudentHeader/StudentHeader';

const StudentDashboardLayout = () => {
    return (
        <div className='grid lg:grid-cols-[256px_1fr] grid-cols-1'>
            <div className="bg-[#1B1D48] h-screen">
                <StudentNav></StudentNav>
            </div>
            <div className='p-4 bg-[#F8F8FF]'>
                <StudentHeader></StudentHeader>
                <Outlet>

                </Outlet>
            </div>
        </div>
    );
};

export default StudentDashboardLayout;