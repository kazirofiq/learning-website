import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import right_arrow from '../../../../assest/student_dashboard/Vector.png'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { server } from '../../../../variables/server';
import { VedioContext } from '../../../../contexts/VedioProvider';

const ModuleProgressbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Kdp Mastery");
    const items = ["Kdp Mastery", "UI/UX Design", "Animation", "UI/UX"];

    const { allModules } = useContext(VedioContext);
    const { user } = useContext(AuthContext);
    const [courseInfo, setCourseInfo] = useState(null);

    useEffect(() => {
        if (user?.uid) {
            fetch(`${server}/users/uid?uid=${user?.uid}`)
                .then(res => res.json())
                .then(data => {
                    setCourseInfo(data.enrolledCourses.find(course => course.id === allModules[1]?.courseId));
                })
                .catch(err => console.error(err))
        }
    }, [user, allModules])

    const decent = (100 - courseInfo?.completed)
    // console.log(decent);
    console.log(courseInfo);


    const toggleSelect = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const config = {
        chart: {
            type: 'donut',
        },

        colors: ['#38A27B', '#C1E2D6'],

        series: [courseInfo?.completed, decent],
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            }
        }

    };

    return (
        <div>
            <div className='w-[360px] h-[262px] bg-[#F8F8FF] custom_shadow'>
                <div className='p-6'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='poppins text-[#1B1D48] font-semibold text-[18px] leading-[27px]'>Module Progress</p>
                        </div>
                        <div >
                            <div className="relative">
                                <button
                                    type="text"
                                    id=""
                                    className="input gap-2 w-[123px] h-[26px] rounded-[20px] shadow-none bg-[#E2E3F1] flex items-center focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
                                    aria-haspopup="listbox"
                                    aria-expanded={isOpen}
                                    onClick={toggleSelect}
                                >
                                    <span className="block truncate text-left text-[#3D419F] poppins font-normal text-[12px] leading-[18px]">
                                        {selectedItem}
                                    </span>
                                    <span className="absolute inset-y-0 right-[9px] flex items-center pr-2 pointer-events-none">
                                        <img
                                            className={isOpen ? "rotate-90" : ""} style={{ width: 6 }}
                                            src={right_arrow}
                                            alt=""
                                        />
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="flex justify-end bg-[#E2E3F1]">
                                        <ul
                                            className="absolute mt-1 custom_shadow w-[123px] bg-[#FFFFFF] max-h-40 overflow-auto z-10"
                                            tabindex="-1"
                                            role="listbox"
                                            aria-labelledby="listbox-label"
                                            aria-activedescendant="listbox-item-3"
                                        >
                                            {items.map((item) => (
                                                <li
                                                    key={item}
                                                    className={`${selectedItem === item
                                                        ? "poppins font-normal text-[12px] leading-[18px]  text-[#333333] px-4 border-b py-[7px]"
                                                        : "font-semibold text-[#666666] poppins text-[12px] leading-[18px] px-4 border-b py-[7px]"
                                                        } cursor-pointer select-none relative`}
                                                    onClick={() => handleItemClick(item)}
                                                >
                                                    <div className="flex items-center">
                                                        <span
                                                            className={`${selectedItem === item
                                                                ? "font-semibold"
                                                                : "font-normal"
                                                                } block truncate`}
                                                        >
                                                            {item}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="donut flex justify-center">
                        <Chart options={config} series={config.series} type="donut" width={'200'} />
                    </div>
                    <div className='mt-3 flex justify-evenly text-[#333333] w-[250px] mx-auto'>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <p>Total Module</p>
                            <p>{allModules.length}</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <div className='flex justify-center items-center gap-[4px]'>
                                <div className='bg-[#38A27B] w-[8px] h-[8px] rounded-full'></div>
                                <p>Complete</p>
                            </div>
                            <p className='ml-[12px]'>{config.series[0]}%</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <div className='flex justify-center items-center gap-[4px]'>
                                <div className='bg-[#C1E2D6] w-[8px] h-[8px] rounded-full'></div>
                                <p>Incomplete</p>
                            </div>
                            <p className='ml-[12px]'>{config.series[1]}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleProgressbar;