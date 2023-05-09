import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgRectangle5 from '../../../assest/workshop/Rectangle 5.png'
import bgRectangle1 from '../../../assest/workshop/Rectangle 1.png'
import bgRectangle2 from '../../../assest/workshop/Rectangle 2.png'
import bgRectangle3 from '../../../assest/workshop/Rectangle 3.png'
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



    const coursess = [
        {
            id: 1,
            image: bgRectangle1,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 2,
            image: bgRectangle2,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 3,
            image: bgRectangle5,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 4,
            image: bgRectangle3,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
    ]
    return (
        <div className=''>

            <div className='mt-6 lg:mt-12 md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0 mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                {
                    courses.map(course =>
                        <Link to={`/upcomingdetails/${course._id}`}>
                            <div key={course._id} className="card w-[255px] h-[282px] lg:h-[300px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                                <figure><img className='h-[143px]' src={course.image} alt="Shoes" /></figure>
                                <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                    <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333]">{course.title.length > 20 ? course.title.slice(0, 19) + '...' : course.title}</h2>
                                    <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>{course.instructor}</p>
                                    <div className="">
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