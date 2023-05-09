import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import image from "../../../assest/banner/Header1.png";

const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`)
            .then(res => res.json())
            .then(user => {
                user?.enrolledCourses?.map(course => {
                    fetch(`https://learn-with-rakib.onrender.com/courses/${course.id}`)
                        .then(res => res.json())
                        .then(courseInfo => {
                            courseInfo.completed = course.completed
                            setCourses([
                                ...courses,
                                courseInfo
                            ])
                        })
                        .catch(err => console.error(err))
                })
            })
            .catch(err => console.error(err))
    }, [user?.uid]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='mx-[35px] lg:mx-[145px] md:mx-[20px]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-[24px] md:mt-[34px] lg:mt-[48px] mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                {/* {
                    courses?.map((mycourse, i) =>
                        <div key={i} className="card lg:w-[255px] md:w-[255px] w-[320px] h-[363px] lg:h-[326px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                            <figure><img className='lg:h-[143px] md:h-[143px] h-[179px] w-full' src={mycourse.image} alt="Course" /></figure>
                            <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">{mycourse.title.length > 30 ? mycourse.title.slice(0, 29) + "..." : mycourse.title}</h2>
                                <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>{mycourse.instructor}</p>
                                <div className='flex items-center gap-x-3'>
                                    <progress className="progress progress-secondary w-56 mt-1" value={mycourse.completed} max="100"></progress><span>{mycourse.completed}%</span>
                                </div>
                                <Link to='/batch-1'>
                                    <div className="w-full bg-[#3D419F] rounded-lg mt-[16px]">
                                        <button className='px-[74.5px] py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                } */}


                <div className="card lg:w-[255px] md:w-[255px] w-[320px] h-[363px] lg:h-[326px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                    <figure><img className='lg:h-[143px] md:h-[143px] h-[179px] w-full' src={image} alt="Course" /></figure>
                    <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                        <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">KDP Mastery: The Complete...</h2>
                        <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                        <div className='flex items-center gap-x-3'>
                            <progress className="progress progress-secondary w-56 mt-1" value="0" max="100"></progress><span>0%</span>
                        </div>
                        <Link to='/batch-1'>
                            <div className="w-full bg-[#3D419F] rounded-lg mt-[16px]">
                                <button className='px-[74.5px] py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyCourses;