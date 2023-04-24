import React from 'react';
import { Link } from 'react-router-dom';
import bgRectangle5 from '../../../assest/workshop/Rectangle 5.png'
import bgRectangle1 from '../../../assest/workshop/Rectangle 1.png'
import bgRectangle2 from '../../../assest/workshop/Rectangle 2.png'
import bgRectangle3 from '../../../assest/workshop/Rectangle 3.png'

const Upcoming = () => {
    const courses = [
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
            <Link to='/upcomingdetails'>
                <div className='mt-6 lg:mt-12 md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0 mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                    {
                        courses.map(course =>
                            <div className="card w-[255px] h-[282px] lg:h-[300px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                                <figure><img className='h-[143px]' src={course.image} alt="Shoes" /></figure>
                                <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                    <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333]">How To Publish A Book On Amazon: The Full ...</h2>
                                    <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                                    <div className="">
                                        <p className='font-semibold lg:font-bold text-sm lg:text-base leading-6 text-[#333333] mt-3 lg:mt-4 md:mt-4'>$150</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Link>
        </div>
    );
};

export default Upcoming;