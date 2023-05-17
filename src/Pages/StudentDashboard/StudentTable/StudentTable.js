import React, { useEffect, useState } from 'react';
import StudentTableDetails from '../StudentTableDetails/StudentTableDetails';
import './StudentTable.css'
import Profile from '../../../assest/bg-img/Image.png'

const StudentTable = () => {
  // const tablData = [
  //   {
  //     name: 'Rofiqul',
  //     img: Profile,
  //     quiz: '15',
  //     score: '90',
  //   },
  //   {
  //     name: 'Rofiqul',
  //     img: Profile,
  //     quiz: '15',
  //     score: '90',
  //   },
  //   {
  //     name: 'Rofiqul',
  //     img: Profile,
  //     quiz: '15',
  //     score: '90',
  //   },
  //   {
  //     name: 'Rofiqul',
  //     img: Profile,
  //     quiz: '15',
  //     score: '90',
  //   },


  // ]

  const [allStudent, setAllStudent] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/users/paid`)
      .then(res => res.json())
      .then(user => setAllStudent(user))
  }, [])

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full mt-4">
          <table className="table table-back w-full">
            <thead>
              <tr className='text-[#333333]'>
                <th>Rank</th>
                <th className=''>Name</th>
                <th>Assignment</th>
                <th>Assignment Score</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody className='text-[#333333]'>
              {
                allStudent?.map((studenttables, i) =>
                  <StudentTableDetails
                    key={i}
                    i={i}
                    studenttables={studenttables}
                  ></StudentTableDetails>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;