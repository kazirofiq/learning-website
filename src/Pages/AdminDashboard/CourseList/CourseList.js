import React, { useEffect, useState } from 'react';
import "./CourseList.css";
import { server } from '../../../variables/server';
import SingleCourse from './SingleCourse';

const CourseList = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`${server}/courses?draft=false`)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="overflow-x-auto mt-6 table-back w-full">
      <table className="table w-full ">
        <thead className='thd'>
          <tr>
            <td className="text-[12px]  text-[#666666] text-[500]">Course</td>
            <td className="text-[12px]  text-[#666666] text-[500]">
              Category
            </td>
            <td className="text-[12px]  text-[#666666] text-[500]">Price</td>
            <td className="text-[12px]  text-[#666666] text-[500]">Status</td>
            <td className="text-[12px]  text-[#666666] text-[500]"></td>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(course => <SingleCourse key={course._id} course={course} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;