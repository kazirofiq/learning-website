import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Breadcrumb from '../Pages/Others/Breadcrumb/Breadcrumb';
import MyClasses from '../Pages/MyClasses/MyClasses';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ReviewModal from '../Pages/Dashboard/ReviewModal/ReviewModal';
import useTitle from '../hooks/useTitle';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const MyCourseLayout = () => {

    useTitle('Module Detail - ');

    const [isPremium, setIsPremium] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.uid) {
            fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`)
                .then(res => res.json())
                .then(user => {
                    if (user?.paidPremium) {
                        setIsPremium(true)
                    }
                    setIsLoading(false)
                })
                .catch(err => console.error(err))
        }
    }, [user?.uid]);

    return (
        <>
            {
                isLoading ?
                    <div className="flex justify-center items-center w-screen h-screen">
                        <ClipLoader color="#0000ff" size="50" />
                    </div>
                    :
                    isPremium ?
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
                        </> :
                        <Navigate to='/premium_course'></Navigate>
            }
        </>
    );
};

export default MyCourseLayout;