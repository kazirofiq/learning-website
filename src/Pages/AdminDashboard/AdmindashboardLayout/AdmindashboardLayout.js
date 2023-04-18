import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';
import AdminHeader from '../AdminHeader/AdminHeader';

const AdmindashboardLayout = () => {
    return (
        <div className='grid lg:grid-cols-[256px_1fr] grid-cols-1'>
            <div className="bg-[#1B1D48] h-screen"><AdminNav></AdminNav></div>
            {/* <div
            //  onClick={toggleSidebar} className={`fixed lg:hidden w-full h-full z-[9999] bg-[#00000075] ${hidden}`}
             ></div> */}
            <div className=' p-4 bg-[#F8F8FF]'>
                {/* <input 
                className='hidden' onClick={toggleSidebar} type="checkbox" id='toggle-sidebar'/> */}
                <AdminHeader></AdminHeader>
                <Outlet></Outlet>
                
                </div>
        </div>
    );
};

export default AdmindashboardLayout;