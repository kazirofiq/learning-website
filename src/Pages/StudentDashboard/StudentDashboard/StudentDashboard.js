import React from 'react';
import StudentMarks from '../StudentsMark/StudentMarks';
import useTitle from '../../../hooks/useTitle';

const StudentDashboard = () => {

    useTitle('Student Analytics - ');

    return (
        <StudentMarks></StudentMarks>
    );
};

export default StudentDashboard;