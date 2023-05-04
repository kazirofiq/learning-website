import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import useTitle from '../../../hooks/useTitle';
const WorkShopRoute = () => {

    useTitle('Work Shop - ');

    const location = useLocation();
    const [activeDraft, setActiveDraft] = useState(false);
    useEffect(() => {
        if (location.pathname === "/workshop/previous") {
            setActiveDraft(true)
        }
        else {
            setActiveDraft(false)
        }
    }, [location.pathname])

    return (
        <div>
            <div className='flex items-center justify-center mt-[40px] lg:mt-[96px] md:mt-[70px]'>
                <Link to='/workshop/upcoming'>
                    <button className={`px-6 py-2 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left border inline-block text-[#C3C4E1] font-medium  focus:text-white focus:outline-none ${activeDraft || "bg-[#3D419F] text-white"}`}>
                        Upcoming
                    </button>
                </Link>
                <Link to='/workshop/previous'>
                    <button className={`px-6 py-2 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left border inline-block bg-[#ECECF5] text-[#C3C4E1] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F] ${activeDraft && "bg-[#3D419F]"}`}>
                        Previous
                    </button>
                </Link>
            </div >
        </div>
    );
};

export default WorkShopRoute;