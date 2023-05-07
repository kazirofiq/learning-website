import React from 'react';

const QuizResult = (props) => {
    return (
        <div>
            <p>your Score :{props.score}</p>
            <p>Total Quiz :{props.totalScore}</p>
        </div>
    );
};

export default QuizResult;