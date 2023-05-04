import React from 'react';
import kdp_mastery from '../../../assest/student_dashboard/Kdp Mastery.png';
import StudentTable from '../StudentTable/StudentTable';

const LeaderBoard = () => {
    return (
        <section>
            <div className='w-[558.85px] custom_shadow  mt-[40px]'>
                <div className='flex justify-between mx-6 pt-3'>
                    <p className='poppins font-semibold text-[18px] text-[#1B1D48] leading-[27px]'>Leader Board</p>
                    <img src={kdp_mastery} alt="" />
                </div>
                <div>
                    
                </div>
                <StudentTable></StudentTable>
            </div>
            
        </section>
    );
};

export default LeaderBoard