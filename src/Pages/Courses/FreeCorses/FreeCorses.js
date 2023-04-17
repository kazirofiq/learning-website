import React from 'react';
import bgReactangle1 from '../../../assest/workshop/Rectangle 1.png'
import bgReactangle2 from '../../../assest/workshop/Rectangle 2.png'
import bgReactangle3 from '../../../assest/workshop/Rectangle 3.png'
import bgReactangle4 from '../../../assest/workshop/Rectangle 4.png'
import monitor from '../../../assest/workshop/monitor.png'

const FreeCorses = () => {

    const FreeCourses = [
        {
            id: 1,
            image: bgReactangle1,
            title: "Fiverr Crash Course",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 2,
            image: bgReactangle2,
            title: "Amazon Kdp Full Course",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 3,
            image: bgReactangle3,
            title: "Ui Design full Guideline",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 4,
            image: bgReactangle4,
            title: "Fiverr Crash Course",
            mentor: "Rakib Ahmed",
            price: 150
        },
    ]

    return (
        <div>
            <h3 className='mt-10 lg:mt-[96px] font-bold text-2xl leading-8 text-[#1B1D48] lg:mx-[145px] text-center lg:text-left md:text-left'>Free Course</h3>
            <div className='mt-5 lg:mt-[32px] md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0'>
                {
                    FreeCourses.map(freecorse =>
                        <div className="card w-[255px] h-[251px] lg:h-[262px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                            <figure><img className='h-[143px]' src={freecorse.image} alt="Shoes" /></figure>
                            <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                <div className='flex items-center gap-x-[5px]'>
                                    <img src={monitor} alt='monitor'></img>
                                    <p className='font-normal text-xs leading-[18px] text-[#666666]'>24 Video</p>
                                </div>
                                <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">{freecorse.title}</h2>
                                <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FreeCorses;