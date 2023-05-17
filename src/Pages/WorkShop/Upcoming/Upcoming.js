import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { server } from '../../../variables/server';

const Upcoming = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(`${server}/workshops`)
            .then(res => res.json())
            .then(workshops => {
                setCourses(workshops)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])
    return (
        <div className=''>

            <div className='mt-6 lg:mt-12 md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0 mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                {
                    courses.map(course =>
                        <Link to={`/upcomingdetails/${course._id}`}>
                            <div className="card w-[255px] free-courses rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                                <figure><img className='h-[143px]' src={course.image} alt="Shoes" /></figure>
                                <div className="px-4 free-courses-text pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                    <div className='flex justify-between'>
                                    </div>
                                    <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">How To Publish A Book On Amazon: The Full ...</h2>
                                    <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                                    <div className="flex justify-between">
                                        <p className='font-semibold lg:font-bold text-sm lg:text-base leading-6 text-[#333333] mt-3 lg:mt-4 md:mt-4'>{course.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }

            </div>

        </div>
    );
};

export default Upcoming;