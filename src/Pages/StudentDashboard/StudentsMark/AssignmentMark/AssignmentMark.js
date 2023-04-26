import React from 'react';
import Chart from 'react-apexcharts';

const AssignmentMark = () => {
    const config = {
        chart: {
            type: 'donut',
        },

        colors: ['#38A27B', '#3D419F', '#C1E2D6'],

        series: [10, 8, 2],
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
                    <div className=''>
                        <p className='poppins text-[#1B1D48] font-semibold text-[18px] leading-[27px]'>Assignment Mark</p>
                    </div>
                    <div className="donut flex justify-center">
                        <Chart options={config} series={config.series} type="donut" width={'200'} />
                    </div>
                    <div className='flex justify-evenly text-[#333333] w-[250px] mx-auto'>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <p>Total</p>
                            <p>{config.series[0]}</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <p>Complete</p>
                            <p>{config.series[1]}</p>
                        </div>
                        <div className='text-[12px] font-semibold leading-[18px] poppins'>
                            <p>Incomplete</p>
                            <p>{config.series[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentMark;