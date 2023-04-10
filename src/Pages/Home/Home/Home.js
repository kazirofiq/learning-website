import React from 'react';
import About from '../About/About';
import Consultancy from '../Consultancy/Consultancy';
import Course from '../Course/Course';
import AmazingResource from './AmazingResource/AmazingResource';
import WhatLearn from './WhatLearn/WhatLearn';
import Banner from '../Banner/Banner';
import Frequently from '../Frequently/Frequently';
import StudentFeedback from '../StudentFeedback/StudentFeedback';
import OrderHistory from '../../Order History/OrderHistory';
import SuccesModal from '../../Modal/SuccesModal/SuccesModal';
// import MessageBox from '../MessageBox/MessageBox';
import Resourcemodal from '../../ResourceModal/Resourcemodal';
import StudentList from '../../StudentList/StudentList';
import Assignment from '../../Assignment/Assignment';


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
            <OrderHistory />
            {/* <SuccesModal></SuccesModal> */}
            <Resourcemodal />
            <StudentList />
            <Assignment />
        </div>
    );
};

export default Home;