import React from 'react';
import Chart from 'react-apexcharts';
import Kdp_Mastery from '../../../../assest/student_dashboard/Kdp Mastery.png'

const ModuleProgressbar = () => {
    const config = {
        chart: {
            type: 'donut',
        },

        colors: ['#38A27B', '#C1E2D6'],

        series: [80, 20],
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
                        <p className='poppins text-[#1B1D48] font-semibold text-[18px] leading-[27px]'>Module Progress</p>
                        <img src={Kdp_Mastery} alt="" />
                    </div>
                    <div className="donut flex justify-center">
                        <Chart options={config} series={config.series} type="donut" width={'200'} />
                    </div>
                    <div className='mt-3 flex justify-evenly text-[#333333] w-[250px] mx-auto'>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <p>Total Module</p>
                            <p>{config.series[0]}</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <div className='flex justify-center items-center gap-[4px]'>
                                <div className='bg-[#38A27B] w-[8px] h-[8px] rounded-full'></div>
                                <p>Complete</p>
                            </div>
                            <p className='ml-[12px]'>{config.series[1]}%</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <div className='flex justify-center items-center gap-[4px]'>
                                <div className='bg-[#C1E2D6] w-[8px] h-[8px] rounded-full'></div>
                                <p>Incomplete</p>
                            </div>
                            <p className='ml-[12px]'>{config.series[2]}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleProgressbar;