import React from 'react';
import StudentTableDetails from '../StudentTableDetails/StudentTableDetails';
import './StudentTable.css'
import Profile from '../../../assest/bg-img/Image.png'

const StudentTable = () => {
  const tablData = [
    {
      name: 'Rofiqul',
      img: Profile,
      quiz: '15',
      score: '90',
    },
    {
      name: 'Rofiqul',
      img: Profile,
      quiz: '15',
      score: '90',
    },
    {
      name: 'Rofiqul',
      img: Profile,
      quiz: '15',
      score: '90',
    },
    {
      name: 'Rofiqul',
      img: Profile,
      quiz: '15',
      score: '90',
    },


  ]
  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full mt-4">
          <table className="table table-back w-full">
            <thead>
              <tr className='text-[#333333]'>
                <th>Rank</th>
                <th className=''>Name</th>
                <th>Assignment/Quiz</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className='text-[#333333]'>
              {
                tablData?.map((studenttables, i) =>
                  <StudentTableDetails
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