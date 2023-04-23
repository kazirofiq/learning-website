import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import WorkShopRoute from '../Pages/WorkShop/WorkShopRoute/WorkShopRoute';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';

const WorkShopLayout = () => {
    return (
        <div>
            <Navbar />
            <WorkShopRoute />
            <Outlet />
            <Footer />
        </div>
    );
};

export default WorkShopLayout;