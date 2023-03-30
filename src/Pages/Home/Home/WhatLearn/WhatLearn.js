import React from 'react';
import './WhatLearn.css'
import ai from '../../../../assest/what-learn/ai.png'
import Amazon from '../../../../assest/what-learn/Amazon.png'
import Freepik from '../../../../assest/what-learn/Freepik.png'
import Fiverrr from '../../../../assest/what-learn/Fiverrr.png'
import circle_1 from '../../../../assest/what-learn/circle-1.png'
import circle_2 from '../../../../assest/what-learn/circle-2.png'
import circle_3 from '../../../../assest/what-learn/circle-3.png'
import circle_4 from '../../../../assest/what-learn/circle-4.png'


const WhatLearn = () => {
const whatlearns = [

    {
        circle: circle_1,
        icon : ai,
        heading: 'Adobe Illustrtor',
        text: 'Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency'
    },
    {
        circle: circle_2,
        icon : Amazon,
        heading: 'KDP',
        text: 'Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency'
    },
    {
        circle: circle_3,
        icon : Fiverrr,
        heading: 'Fiverrr',
        text: 'Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency'
    },
    {
        circle: circle_4,
        icon : Freepik,
        heading: 'Freepik',
        text: 'Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency'
    },
]
    return (
        <div className='py-[5.4rem]'>
            <h2  className='text-center text-[#1B1D48] xs:text-2xl lg:text-4xl  font-bold py-5'>What You will <span style={{color: '#38A27B'}}>learn?</span></h2>
            
            <div class="grid sm:grid-cols-2  md:grid-cols-4 gap-4 ">

            {
                whatlearns.map( whatlearn => <div>
                    <div className='text-center p-5'>
                        <div className='flex justify-center items-center'>
                           <div className='circleIcon'>
                           <img className='circle ' src={whatlearn.circle} alt="" />
                           
                            <div className='glass-card'>
                                 <img className='' src={whatlearn.icon} alt="" />
                            </div>
                           </div>
                        </div>
                        <div>
                            <h2 className=' text-2xl font-bold text-[#1B1D48]'>{whatlearn.heading}</h2>
                            <p>{whatlearn.text}</p>
                        </div>
                       
                    </div>
                </div> )
            }
            </div>
        </div>
    );
};

export default WhatLearn;