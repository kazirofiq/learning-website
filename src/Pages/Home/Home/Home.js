import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';

const Home = () => {
    return (
        <div>
            <About></About>
            <Course></Course>
            <Consultancy></Consultancy>
        </div>
    );
};

export default Home;