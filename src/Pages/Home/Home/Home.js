import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';
import AmazingResource from './AmazingResource/AmazingResource';
import WhatLearn from './WhatLearn/WhatLearn';
import Banner from '../Banner/Banner';
import Frequently from '../Frequently/Frequently';
import StudentFeedback from '../StudentFeedback/StudentFeedback';

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
        </div>
    );
};

export default Home;