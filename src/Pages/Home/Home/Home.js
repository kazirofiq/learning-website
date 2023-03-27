import React from 'react';
import Course from '../Course/Course';
import About from '../About/About';
import Frequently from '../Frequently/Frequently';

const Home = () => {
    return (
        <div>
            <About></About>
            <Course></Course>
            <Frequently></Frequently>

        </div>
    );
};

export default Home;