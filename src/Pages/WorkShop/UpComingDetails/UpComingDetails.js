import React, { useEffect, useState } from 'react';
import bannerImg from "../../../assest/banner/Header.png";
import WhatWillYouLearn from '../../Home/PremiumCourse/WhatWillYouLearn/WhatWillYouLearn';
import WorkShopEnrollMentCard from '../EnrollMentCard/WorkShopEnrollMentCard';
import TextWorkShop from '../TextWorkShop/TextWorkShop';
import { server } from '../../../variables/server';
import { useParams } from 'react-router';

const UpComingDetails = () => {

    const { workshopId } = useParams();
    const [course, setCourse] = useState({})

    console.log(course);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(`${server}/workshops/${workshopId}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [workshopId])


    return (
        <div>
            <div>
                <img className='w-full lg:h-[480px] object-cover' src={bannerImg} alt="" />
                <div className='poppins lg:w-[1110px] mx-auto w-[360px]'>
                    <div className='lg:grid flex flex-col lg:flex-row mt-6 lg:mt-[38px] gap-4 lg:gap-[30px]' style={{ gridTemplateColumns: "4fr 1fr" }}>
                        <div>
                            <TextWorkShop />
                            <div className='lg:block hidden'>
                                <div className='lg:w-[727px] w-[320px]'>
                                    <WhatWillYouLearn />
                                </div>
                                <div className='mt-10 mb-24'>
                                    <h1 className='font-bold text-[#333333] text-2xl'>How to complete Payment?</h1>
                                    <p className='font-normal text-base text-[#666666] mt-3'>To know the process <span className='font-bold text-base text-[#3D419F] cursor-pointer'>Watch this Video</span></p>
                                </div>
                            </div>
                        </div>
                        <WorkShopEnrollMentCard />
                    </div>
                    <div className='lg:hidden block'>
                        <div className='lg:w-[727px] w-[320px]'>
                            <WhatWillYouLearn />
                        </div>
                        <div className='mt-10 mb-24'>
                            <h1 className='font-bold text-[#333333] text-2xl'>How to complete Payment?</h1>
                            <p className='font-normal text-base text-[#666666] mt-3'>To know the process <label className='font-normal text-base text-[#666666] mt-3r' htmlFor='howToPay'><span className='font-bold text-base text-[#3D419F] cursor-pointer '>Watch this Video</span></label></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComingDetails;