import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import vedioImage from '../assest/Kdp_Tools/Video Player.png'
import KdpRoute from '../Pages/KdpTools/KdpRoute/KdpRoute';

const KdpLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#F8F8FF]'>
                <div className='mx-[20px] lg:mx-[240px] md:mx-[20px]'>
                    <div className='text-left lg:text-center md:text-center lg:pt-[96px] pt-10 md:pt-16'>
                        <h2 className='lg:leading-[48px] md:leading-[40px] leading-[36px] md:text-3xl lg:text-[32px] text-2xl text-[#1B1D48] font-bold'>Free Amazon <span className='text-[#38A27B]'>KDP Tools</span></h2>
                        <p className='lg:leading-[24px] leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#666666] mt-2 lg:mt-3 md:mt-3'>Level up your self-publishing journey with countless free tools and resources <br /> developed by Learn with Rakib</p>
                    </div>
                    <section class="overflow-hidden sm:grid grid-cols-[300px_1fr] xl:grid-cols-2 mt-8 lg:mt-[48px] md:mt-10 gap-x-5 items-center">
                        <div class="">
                            <KdpRoute></KdpRoute>
                        </div>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </section>
                    <div className='text-left lg:text-center md:text-center mt-8 lg:mt-12 md:mt-10'>
                        <h2 className='lg:leading-[48px] md:leading-[40px] leading-[36px] md:text-3xl lg:text-[32px] text-2xl text-[#1B1D48] font-bold'>More Free <span className='text-[#38A27B]'>KDP Resources</span></h2>
                        <p className='lg:leading-[24px] leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#666666] mt-2 lg:mt-3 md:mt-3'>Explore more than 3,600 template for<span className='text-[#333333] font-bold'> Download</span> without any cost!</p>
                    </div>
                    <div className='flex justify-center items-center mt-6 lg:mt-12 md:mt-10 pb-10 lg:pb-[96px] md:pb-[60px]'>
                        <img src={vedioImage} alt='' />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default KdpLayout;