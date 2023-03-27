import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';
import AmazingResource from './AmazingResource/AmazingResource';
import WhatLearn from './WhatLearn/WhatLearn';

const Home = () => {
    return (
        <div>
            <About></About>
            <Course></Course>
            <Consultancy></Consultancy>
            <WhatLearn />
            <AmazingResource></AmazingResource>
        </div>
    );
};

export default Home;