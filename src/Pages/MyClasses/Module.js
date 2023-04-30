import React, { useContext } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import { VedioContext } from '../../contexts/VedioProvider';
import { Link } from 'react-router-dom';

const Module = ({ modules }) => {
    const { module, lessons, moduleNumber } = modules;
    const { onOptionClicked } = useContext(VedioContext)

    return (
        <div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />

                <div className="grid mt-2 lg:mt-3 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-base lg:text-[18px] peer-checked:text-base peer-checked:leading-6 leading-6 lg:leading-[27px] font-semibold lg:font-medium peer-checked:font-bold poppins ">
                    <p className="">Module {moduleNumber}:{module}</p>
                    <div>
                        <p className='text-[#666666] text-xs lg:text-sm font-normal lg:font-light leading-[18px] lg:leading-[21px]'></p>
                    </div>
                </div>

                <div className="collapse-content w-[320px] lg:w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                    {
                        lessons.map((lesson, i) =>
                            <button className="flex justify-between items-center my-1 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left px-2 py-3 bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F] cursor-pointer gap-x-2">
                                <div>
                                    <CheckCircleIcon className='w-[18px] h-[18px]' />
                                </div>
                                <Link to='/vedio/assignment'>
                                    <div>
                                        <p onClick={onOptionClicked(lesson.vedioLesson)} className='lg:w-[275px] w-[248px]'>{moduleNumber}-{`${i + 1}`} :{lesson.vedioLesson}</p>
                                    </div>
                                </Link>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Module;