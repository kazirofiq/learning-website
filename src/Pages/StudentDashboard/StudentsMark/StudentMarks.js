import React from 'react';
import AssignmentMark from './AssignmentMark/AssignmentMark';
import QuizMark from './QuizMark/QuizMark';
import ModuleProgressbar from './ModuleProgressbar/ModuleProgressbar';

const StudentMarks = () => {
    return (
        <div className='mx-6 grid grid-cols-3 gap-[28px] mt-[40px]'>
            <ModuleProgressbar></ModuleProgressbar>
            <AssignmentMark></AssignmentMark>
            <QuizMark></QuizMark>
        </div>
    );
};

export default StudentMarks;