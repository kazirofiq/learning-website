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
            <div className='flex items-center  justify-center mt-[40px] md:mt-[70px]'>
                <nav className="bg-[#ECECF5] rounded-[10px] mt-[32px] lg:block hidden w-[240px]">
                    <ul className="flex justify-between h-[40px] items-center">
                        <li className=''>
                            <Link to='/workshop/upcoming' className={` ${activeDraft || "bg-[#3D419F] text-white"} text-[#C3C4E1] h-[40px] flex items-center w-[120px] justify-center' : 'bg-[#ECECF5] rounded-[10px]  justify-center`}>
                                Upcoming
                            </Link>
                        </li>
                        <li>
                            <Link to='/workshop/previous' className={` ${activeDraft && "bg-[#3D419F] text-white"} text-[#C3C4E1] h-[40px]  flex items-center w-[120px]  justify-center' : 'bg-[#ECECF5] rounded-[10px]  justify-center`}>
                                Previous
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div >
        </div>
    );
};

export default WorkShopRoute;