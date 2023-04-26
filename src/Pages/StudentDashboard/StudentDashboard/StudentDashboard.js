import React from 'react';
import AssignmentMark from '../StudentsMark/AssignmentMark/AssignmentMark';
import ModuleProgressbar from '../StudentsMark/ModuleProgressbar/ModuleProgressbar';
import QuizMark from '../StudentsMark/QuizMark/QuizMark';

const StudentDashboard = () => {
    return (
        <div className='mx-6 grid grid-cols-3 gap-[28px] mt-[40px]'>
            <ModuleProgressbar></ModuleProgressbar>
            <AssignmentMark></AssignmentMark>
            <QuizMark></QuizMark>
        </div>
    );
};

export default StudentDashboard;