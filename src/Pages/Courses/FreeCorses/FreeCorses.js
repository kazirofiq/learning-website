import React from 'react';
import bgReactangle1 from '../../../assest/workshop/Rectangle 1.png'
import bgReactangle2 from '../../../assest/workshop/Rectangle 2.png'
import bgReactangle3 from '../../../assest/workshop/Rectangle 3.png'
import bgReactangle4 from '../../../assest/workshop/Rectangle 4.png'
import monitor from '../../../assest/workshop/monitor.png'
import './FreeCorses.css';
import { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import { Link } from 'react-router-dom';

const FreeCorses = () => {

    useTitle('Free Course - ');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const FreeCourses = [
        {
            id: 1,
            image: bgReactangle1,
            title: "KDP Full Course",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=JK3YTuw9ltU&list=PLsIOHULf2KxOpkfZYlxG7m42XOw167QoI'
        },
        {
            id: 2,
            image: bgReactangle2,
            title: "Fiverr Basic to Advance Course",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=Sy_S5dYvwiQ&list=PLsIOHULf2KxPv2fQeVH2FfawyYosXF1vU'
        },
        {
            id: 3,
            image: bgReactangle3,
            title: "Line Art Basic To Advance",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=FMDCYRRrdVc&list=PLsIOHULf2KxP0pF4UW4Tvww60IK1OTjco'
        },
        {
            id: 4,
            image: bgReactangle4,
            title: "Adobe Illustrator Basic Course",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=VD3EJ7-ADUU&list=PLsIOHULf2KxPM2Yxq8HlaSS-hPKZuHQjS'
        },
        {
            id: 5,
            image: bgReactangle4,
            title: "Pro Tips Using ChatGPT",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=VD3EJ7-ADUU&list=PLsIOHULf2KxPM2Yxq8HlaSS-hPKZuHQjS'
        },
        {
            id: 6,
            image: bgReactangle4,
            title: "Freelancing Basic Guide",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=wOX6gKqjRVs&list=PLsIOHULf2KxNP81kPZMzk9bbUDOaE6zVY'
        },
        {
            id: 7,
            image: bgReactangle4,
            title: "Live Class About KDP",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=dwWgwzcYeSY&list=PLsIOHULf2KxMvaVXPOR2lCuvq7uDFJn-c'
        },
        {
            id: 8,
            image: bgReactangle4,
            title: "Pro Tips For Fiverr",
            mentor: "Rakib Ahmed",
            price: 150,
            link: 'https://www.youtube.com/watch?v=Ql-GzdtcFoQ&list=PLsIOHULf2KxOKBIu4ny-gisgJx0i_er_k'
        },
    ]

    return (
        <div className='mb-6'>
            <h3 className='mt-6 font-bold text-2xl leading-8 text-[#1B1D48] lg:mx-[145px] text-center lg:text-left md:text-left'>Free Course</h3>
            <div className='mt-5 mb-5 lg:mt-[32px] md:mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-[145px] gap-5 ml-16 md:ml-0'>
                {
                    FreeCourses.map(freecorse =>
                        <Link to={`${freecorse.link}`} target='blank'>
                            <div className="card w-[255px] free-courses bg-[#FFFFFF]">
                                <figure><img className=' rounded-t-[10px]' src={freecorse.image} alt="Shoes" /></figure>
                                <div className="px-4 pt-3 free-courses-text pb-5 lg:pb-6 bg-[#FFFFFF]">
                                    <div className='flex items-center gap-x-[5px]'>
                                        <img src={monitor} alt='monitor'></img>
                                        <p className='font-normal text-xs leading-[18px] text-[#666666]'>24 Video</p>
                                    </div>
                                    <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">{freecorse?.title?.length > 20 ? freecorse?.title.slice(0, 19) + '...' : freecorse.title}</h2>
                                    <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                                </div>
                            </div>

                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default FreeCorses;