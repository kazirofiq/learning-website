import React from 'react';
import kdp_mastery from '../../../assest/student_dashboard/Kdp Mastery.png';

const LeaderBoard = () => {
    return (
        <section>
            <div className='w-[558.85px] custom_shadow h-[520px] mt-[40px]'>
                <div className='flex justify-between mx-6 pt-3'>
                    <p className='poppins font-semibold text-[18px] text-[#1B1D48] leading-[27px]'>Leader Board</p>
                    <img src={kdp_mastery} alt="" />
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default LeaderBoard