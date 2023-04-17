import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];
const COLORS = ['#38A27B', '#C1E2D6', '#3D419F'];

const AssignmentMark = () => {
    return (
        <section className='w-[360px] bg-[#F8F8FF] custom_shadow'>
            <div className='p-6'>
                <div>
                    <p className='text-[#1B1D48] text-[18px] leading-[27px] font-semibold poppins'>Assignment Mark</p>

                </div>
                <PieChart width={800} height={300} >

                    <Pie
                        data={data}
                        cx={120}
                        cy={114}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                </PieChart>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, magnam!</p>
            </div>
        </section>
    );
};

export default AssignmentMark;