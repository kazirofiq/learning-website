import React from 'react';
import ModuleProgress from '../StudentProgressBar/ModuleProgress/ModuleProgress';
import AssignmentMark from '../StudentProgressBar/AssignmentMark/AssignmentMark';

const StudentDashboard = () => {
    return (
        <div className='w-[880px] mx-auto grid grid-cols-2'>
            <ModuleProgress />
            <AssignmentMark />
        </div>
    );
};

export default StudentDashboard;