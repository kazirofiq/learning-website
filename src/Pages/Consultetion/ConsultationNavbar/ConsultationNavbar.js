import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConsultationNavbar.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const ConsultationNavbar = () => {

    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {

        const handleScroll = () => {
            const menuItemIds = ['aboutTheCourse', 'WhatWillYouLearn', 'PricingCategory', 'frequentlyAskedQuestion', 'LearnerReview'];
            const menuItems = menuItemIds.map(id => document.getElementById(id));
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            let activeIndex = menuItemIds.length + 1;

            menuItems.forEach((item, index) => {
                const top = item.offsetTop - 50; // subtract header height
                const bottom = top + item.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    activeIndex = index;
                }
            });

            setActiveItem(menuItemIds[activeIndex]);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleItemClick = (itemId) => {
        const scrollPosition = document.getElementById(itemId).offsetTop - 50; // subtract header height
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        setActiveItem(itemId);
    };

    return (
        <div className={activeItem === "free-course" ? 'hidden' : "sticky top-0 rounded-[10px] lg:z-20"}>
            <div className='lg:px-[145px]' >
                <nav className="bg-[#ECECF5] rounded-[10px] mt-[32px] lg:block hidden lg:w-[48%]">
                    <ul className="flex justify-between h-[37px] items-center">
                        <li className=''>
                            <Link className={activeItem === 'aboutTheCourse' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#C3C4E1] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('aboutTheCourse')}>
                                <a href="#aboutTheCourse">Details</a>
                            </Link>
                        </li>
                        <li>
                            <Link className={activeItem === 'WhatWillYouLearn' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#C3C4E1] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('WhatWillYouLearn')}>
                                <a href="#WhatWillYouLearn">What You Learn</a>
                            </Link>
                        </li>
                        <li>
                            <Link className={activeItem === 'PricingCategory' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#C3C4E1] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('PricingCategory')}>
                                <a href="#PricingCategory">Pricing Plan</a>
                            </Link>
                        </li>
                        <li>
                            <Link className={activeItem === 'frequentlyAskedQuestion' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#C3C4E1] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('frequentlyAskedQuestion')}>
                                <a href="#frequentlyAskedQuestion">FAQ</a>
                            </Link>
                        </li>
                        <li>
                            <Link className={activeItem === 'LearnerReview' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#C3C4E1] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('LearnerReview')}>
                                <a href="#LearnerReview">Review</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Responsive nav */}
                <nav className="bg-[#ECECF5] rounded-[10px] mt-6 hidden mx-auto">
                    <ul className="flex justify-between h-[37px] items-center">
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            // modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <li className=''>
                                    <Link className={activeItem === 'aboutTheCourse' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('aboutTheCourse')}>
                                        <a href="#aboutTheCourse">Details</a>
                                    </Link>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Link className={activeItem === 'WhatWillYouLearn' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('WhatWillYouLearn')}>
                                        <a href="#WhatWillYouLearn">What You learn</a>
                                    </Link>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Link className={activeItem === 'PricingCategory' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('PricingCategory')}>
                                        <a href="#PricingCategory">Pricing Plan</a>
                                    </Link>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Link className={activeItem === 'frequentlyAskedQuestion' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('frequentlyAskedQuestion')}>
                                        <a href="#frequentlyAskedQuestion">FAQ</a>
                                    </Link>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Link className={activeItem === 'LearnerReview' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center'} onClick={() => handleItemClick('LearnerReview')}>
                                        <a href="#LearnerReview">Review</a>
                                    </Link>
                                </li>
                            </SwiperSlide>
                        </Swiper>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ConsultationNavbar;