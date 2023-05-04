import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import CourseRoute from '../Pages/Courses/CourseRoute/CourseRoute';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import useTitle from '../hooks/useTitle';
const CourseLayout = () => {

    useTitle('My Course - ');

    return (
        <div>
            <div>
                <Navbar />
                <CourseRoute />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default CourseLayout;