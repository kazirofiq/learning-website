import React from 'react';
import bgRectangle1 from '../../../assest/workshop/Rectangle 1.png'
import bgRectangle2 from '../../../assest/workshop/Rectangle 2.png'
import bgRectangle3 from '../../../assest/workshop/Rectangle 3.png'
import bgRectangle4 from '../../../assest/workshop/Rectangle 4.png'
import star from '../../../assest/workshop/star.png'
import clock from '../../../assest/workshop/clock.png'
import profile from '../../../assest/workshop/profile.png'
import { Link } from 'react-router-dom';

const pre = () => {

    const Previouscourses = [
        {
            id: 1,
            image: bgRectangle4,
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
            image: bgRectangle3,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 4,
            image: bgRectangle1,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
    ]

    return (
        <div className='mt-[40px] lg:mt-[107px] md:mt-[100px]'>
            <div className='flex items-center justify-center'>
                <Link to='/upcomingcourse'>
                    < button className='bg-[#ECECF5] px-6 py-2 text-[#C3C4E1] rounded-[10px] border-[1px] hover:border-[#3D419F] focus:bg-[#3D419F] active:bg-[#3D419F] focus:text-white font-medium text-base leading-6' > Upcoming</button >
                </Link>
                <Link to=''>
                    <button className='bg-[#ECECF5] px-6 py-2 text-[#C3C4E1] rounded-[10px] border-[1px] hover:border-[#3D419F] focus:bg-[#3D419F] active:bg-[#3D419F] focus:text-white font-medium text-base leading-6'>Previous</button>
                </Link>
            </div >
            <div className='mt-6 lg:mt-12 md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0'>
                {
                    Previouscourses.map(previous =>
                        <div className="card w-[255px] h-[330px] lg:h-[352px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                            <figure><img className='h-[143px]' src={previous.image} alt="Shoes" /></figure>
                            <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-x-1'>
                                        <img className='h-3' src={profile} alt='profile'></img>
                                        <p className='font-normal text-xs leading-[18px] text-[#666666]'>50 Students</p>
                                    </div>
                                    <div className='flex items-center gap-x-1'>
                                        <img className='h-3' src={clock} alt='profile'></img>
                                        <p className='font-normal text-xs leading-[18px] text-[#666666]'>3 Hours</p>
                                    </div>
                                </div>
                                <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">How To Publish A Book On Amazon: The Full ...</h2>
                                <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                                <div className='flex gap-x-[6px] items-center'>
                                    <img className='h-3' src={star} alt='' />
                                    <img className='h-3' src={star} alt='' />
                                    <img className='h-3' src={star} alt='' />
                                    <img className='h-3' src={star} alt='' />
                                    <img className='h-3' src={star} alt='' />
                                    <p>(15)</p>
                                </div>
                                <div className="">
                                    <p className='font-semibold lg:font-bold text-sm lg:text-base leading-6 text-[#333333] mt-3 lg:mt-4 md:mt-4'>$150</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default pre;