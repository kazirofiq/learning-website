import React from 'react';
import './SideCategory.css';
import { Link, Outlet } from 'react-router-dom';
const SideCategory = () => {
    return (
       <div className='mt-[41px]'>
          <span className='text-[#1B1D48] font-semibold text-2xl'>Create New Course</span>
         <div className='mt-[18px] grid grid-cols-[196px_964px]'>
        <div className='w-[196px]'>
        <ul className="steps steps-vertical">
  <li className="step step-primary">
          <Link to={'/admindashboard/course-create'}>create-course</Link>
  </li>
  <li className="step step-primary">
          <Link to={'/admindashboard/course-create/course-curriculum'}>course curriculum</Link>
  </li>
  <li className="step step-primary">
    <Link to={'/admindashboard/course-create/AddFAQ'}>
        FAQ
    </Link>
  </li>
  <li className="step step-primary">
    <Link to={'/admindashboard/course-create/AddFAQ'}>
        Publish
    </Link>
  </li>
</ul>
       </div>

<Outlet />

       </div>
       </div>
    );
};

export default SideCategory;