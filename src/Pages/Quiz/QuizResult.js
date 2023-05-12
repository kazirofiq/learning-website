import React from 'react';
import winerImg from "../../assest/login-svg/winner-trophy-2.fb9a5aaf.svg";

const QuizResult = (props) => {
    return (
        // <div className='flex flex-col justify-center items-center w-full h-full text-slate-800'>
        //     <p>your Score :{props.score}</p>
        //     <p>Total Quiz :{props.totalScore}</p>
        // </div>

        <div className='w-full'>
            <div className='flex justify-center items-center h-[450px] poppins bg-[#150F2D] rounded-xl'>
                <div>
                    <img className='mx-auto' src={winerImg} alt="" />
                    <div className='w-[150px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center flex-col items-center mt-3 p-4 rounded-xl'>
                        <span className='text-lg text-white'>Your Score</span>
                        <div>
                            <span className='text-3xl font-semibold text-white'>{props.score}/{props.totalScore}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;