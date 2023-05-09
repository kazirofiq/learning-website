import React, { useEffect, useState } from 'react';
import { server } from '../../../variables/server';

const WorkshopCard = ({ workshopId }) => {

    const [workshop, setWorkshop] = useState({});

    useEffect(() => {
        fetch(`${server}/workshops/${workshopId}`)
            .then(res => res.json())
            .then(data => {
                setWorkshop(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [workshopId])

    return (
        <div className="card lg:w-[255px] md:w-[255px] w-[320px] h-[363px] lg:h-[326px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
            <figure><img className='lg:h-[143px] md:h-[143px] h-[179px] w-full' src={workshop.image} alt="Shoes" /></figure>
            <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">{workshop?.title?.length > 20 ? workshop?.title.slice(0, 19) + '...' : workshop.title}</h2>
                <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>{workshop.instructor}</p>
                <div className='flex items-center gap-x-3'>
                    <progress className="progress progress-secondary w-56 mt-1" value="90" max="100"></progress><span>90%</span>
                </div>
                <div className="w-full bg-[#7578d4] rounded-lg mt-[16px]">
                    <button disabled className='px-[74.5px] btn-disabled py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default WorkshopCard;