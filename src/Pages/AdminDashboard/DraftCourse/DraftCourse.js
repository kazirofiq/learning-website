import React, { useEffect, useState } from 'react';
import "./DraftCourse.css";
import SingleDraft from './SingleDraft';
import { server } from '../../../variables/server';

const DraftCourse = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`${server}/courses?draft=true`)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="overflow-x-auto mt-6 table-back w-full">
      <table className="table w-full ">
        <thead>
          <tr>
            <td className="text-[12px]  text-[#666666] text-[500]">COURSE</td>
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
            courses.map(course => <SingleDraft key={course._id} course={course} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default DraftCourse;