import React, { useContext, useState, useEffect } from 'react';
import './Dashboard.css'
import { VedioContext } from '../../contexts/VedioProvider';
import { Link, useLocation } from 'react-router-dom';
import ReviewModal from './ReviewModal/ReviewModal';

const Dashboard = () => {
  // useEffect(() => {
  //   fetch('http://localhost:5000/batch-1')
  //     .then(res => res.json())
  //     .then(data => setAllLessons(data))
  // }, [])

  const { selectedOption, allModules } = useContext(VedioContext);
  const location = useLocation();
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")

  useEffect(() => {
    const lessons = (allModules?.map(module => module.lessons.map(lesson => lesson))?.flat(1))
    const current = lessons.findIndex(less => less.number === location.pathname.split("/")[3])

    const nextIndex = current === (lessons.length - 1) ? current : current + 1
    const nextRoute = `/batch-1/${lessons[nextIndex]?.routeName}/${lessons[nextIndex]?.number}`
    setNext(nextRoute)

    const prevIndex = current === 0 ? 0 : current - 1
    const prevRoute = `/batch-1/${lessons[prevIndex]?.routeName}/${lessons[prevIndex]?.number}`
    setPrev(prevRoute)
    // const prev
  }, [allModules, location])

  return (
    <div className=''>
      <div>
        <div className='lg:flex hidden items-center content-center justify-between w-[732px] mt-[29px] pb-[25px]'>
          <div className=''>
            <p className='text-[#333333] text-[20px] leading-[30px] font-semibold poppins'>Topic : Greetings and Introduction</p>
            <p className='text-[#555555] text-sm leading-[21px] font-light poppins mt-2'>Video : {selectedOption || ""}</p>
          </div>
          <div className='flex items-center gap-3'>
            <Link to={prev} className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-[#666666] border-[1px] border-[#666666] border-solid lg:font-semibold font-medium poppins bg-[#F8F8FF]'>Previous</Link>
            <Link to={next} className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-white bg-[#3D419F] lg:font-semibold font-medium poppins'>Next</Link>
          </div>
        </div>
        <div className='block lg:hidden items-center content-center justify-between w-[320px] lg:w-[732px] mt-[18px] mx-5 lg:mx-0'>
          <div className='flex items-center justify-center gap-3 mb-5'>
            <Link to={prev} className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-[#666666] border-[1px] border-[#666666] border-solid lg:font-semibold font-medium poppins bg-[#F8F8FF]'>Previous</Link>
            <Link to={next} className='text-sm lg:text-base leading-[21px] lg:leading-6 class_bs_sm lg:class_bs text-white bg-[#3D419F] lg:font-semibold font-medium poppins'>Next</Link>
          </div>
          <div className=''>
            <p className='text-[#333333] text-base leading-6 font-semibold poppins'>Topic : Greetings and Introduction</p>
            <p className='text-[#555555] text-xs leading-[18px] font-light poppins mt-2'>Video : {selectedOption || ""}</p>
          </div>
        </div>
      </div>
      <ReviewModal />
    </div>
  );
};

export default Dashboard;