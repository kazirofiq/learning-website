import React, { useContext, useEffect } from 'react';
import search_icon from '../../assest/my_class/search_icon.png';
import './MyClass.css';
import 'scrollable-component';
import Module from './Module';
import { VedioContext } from '../../contexts/VedioProvider';
import { server } from '../../variables/server';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MyClasses = () => {

  const { allModules } = useContext(VedioContext);
  const { user } = useContext(AuthContext);
  const [courseInfo, setCourseInfo] = useState(null);
  const { number } = useParams()


  useEffect(() => {
    if (user?.uid && number) {
      fetch(`${server}/users/uid?uid=${user?.uid}`)
        .then(res => res.json())
        .then(data => {
          setCourseInfo(data.enrolledCourses.find(course => course.id === allModules[0]?.courseId));
        })
        .catch(err => console.error(err))
    }
  }, [user, allModules, number])

  return (
    <div>
      <section className='lg:max-w-[1110px] mx-5 lg:mx-auto'>
        <div className="grid grid-cols-1 justify-center items-center w-[320px] lg:w-[350px]">
          <div className="container flex flex-col justify-center mt-6">

            <div className="space-y-4 w-[320px] lg:w-[350px] mx-auto lg:mx-0">
              <div className='flex items-center text-base lg:text-[18px] leading-[24px] lg:leading-6 poppins font-bold'>
                <p className='mr-3 text-[#282B6B] lg:mr-[22px] w-[152px] lg:w-[179px] '>Course Complete</p>
                <progress className="progress progress-secondary bg-[#E1F1EB] w-[143px] lg:w-[143px] h-[6px] lg:h-[8px]" value={courseInfo?.completed || 0} max="100"></progress>
                <p className='text-[#555555] text-xs leading-[18px] font-normal ml-1'>{courseInfo?.completed || 0}%</p>
              </div>

              <div className='flex bg-primary items-center rounded-xl mt-4 w-[320px] lg:w-[350px] h-[45px]'>
                <img src={search_icon} alt="" className='w-4 h-4 ml-6 my-[14.5px]' />
                <input type="text" id="inputID" placeholder="Search Lesson" className="input bg-primary rounded-r-xl rounded-l-none text-[#FFFFFF] w-[320px] lg:w-[350px] h-[45px] focus:outline-none" />
              </div>

              <div className=''>
                <scrollable-component class="my-content">
                  <div className=''>
                    {allModules.map(modules => modules?.isReleased && <Module
                      modules={modules}
                    ></Module>)}
                  </div>
                </scrollable-component>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MyClasses;