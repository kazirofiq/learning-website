import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';
import WhatLearn from './WhatLearn/WhatLearn';

const Home = () => {
    return (
        <div>
            <About></About>
            <Course></Course>
            <WhatLearn />
            <Consultancy></Consultancy>
        </div>
    );
};

export default Home;