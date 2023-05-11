import React from 'react';

const QuizResult = (props) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full text-slate-800'>
            <p>your Score :{props.score}</p>
            <p>Total Quiz :{props.totalScore}</p>
        </div>
    );
};

export default QuizResult;