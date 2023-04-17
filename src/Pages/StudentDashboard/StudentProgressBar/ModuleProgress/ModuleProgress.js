import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 72 },
    { name: 'Group B', value: 28 },
];
const COLORS = ['#38A27B', '#C1E2D6'];

const ModuleProgress = () => {
    return (
        <section className='w-[360px] bg-[#F8F8FF] custom_shadow'>
            <div className='p-6'>
                <div>
                    <p className='text-[#1B1D48] text-[18px] leading-[27px] font-semibold poppins'>Module Progress</p>

                </div>
                <PieChart width={214} height={118} >

                    <Pie
                        data={data}
                        cx={120}
                        cy={118}
                        startAngle={180}
                        endAngle={0}
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
                    {/* <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie> */}

                </PieChart>
            </div>
        </section>
    );
};

export default ModuleProgress;