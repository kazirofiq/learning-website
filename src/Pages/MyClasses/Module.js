import React, { useContext, useEffect, useState } from 'react';
import Lesson from './Lesson';

const Module = ({ modules }) => {
    const { module, lessons, moduleNo } = modules;

    return (
        <div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />

                <div className="grid mt-2 lg:mt-3 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-base lg:text-[18px] peer-checked:text-base peer-checked:leading-6 leading-6 lg:leading-[27px] font-semibold lg:font-medium peer-checked:font-bold poppins ">
                    <p className="">Module {moduleNo}:{module}</p>
                    <div>
                        <p className='text-[#666666] text-xs lg:text-sm font-normal lg:font-light leading-[18px] lg:leading-[21px]'></p>
                    </div>
                </div>

                <div className="collapse-content w-[320px] lg:w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                    {
                        lessons.map((lesson, i) =>
                            <Lesson
                                key={i}
                                lesson={lesson}
                                moduleNo={moduleNo}
                                i={i}
                            >
                            </Lesson>
                        )

                    }
                </div>
            </div>
        </div >
    );
};

export default Module;