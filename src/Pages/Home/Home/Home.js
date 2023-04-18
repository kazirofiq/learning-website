import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';
import AmazingResource from './AmazingResource/AmazingResource';
import WhatLearn from './WhatLearn/WhatLearn';
import Banner from '../Banner/Banner';
import Frequently from '../Frequently/Frequently';
import StudentFeedback from '../StudentFeedback/StudentFeedback';
<<<<<<< HEAD
=======
// import MessageBox from '../MessageBox/MessageBox';
import StudentList from '../../StudentList/StudentList';
import AssignmentList from '../../../AssignmentList/AssignmentList';

>>>>>>> 94d40ec85b82a40b21cc53caf8c928a223954643

const Home = () => {
    return (
        <div>
            <Banner />
            <About></About>
            <Course></Course>
            <WhatLearn />
            <Consultancy></Consultancy>
            <AmazingResource></AmazingResource>
            <StudentFeedback></StudentFeedback>
            <Frequently></Frequently>
<<<<<<< HEAD
=======
            <StudentList />
            <AssignmentList></AssignmentList>
>>>>>>> 94d40ec85b82a40b21cc53caf8c928a223954643
        </div>
    );
};

export default Home;