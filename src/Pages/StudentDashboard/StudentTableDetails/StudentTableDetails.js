import React from 'react';
import { Link } from 'react-router-dom';

const StudentTableDetails = ({ studenttables, i }) => {
  const { name, img, quiz, score } =
    studenttables;
  return (
    <tr key={studenttables._id}>
      <td>
        <div className='w-[24px] h-[24px] rounded-full border-[1.2px] border-[#38A27B] bg-[#7dbba4]'>
          <div className=''>
            <p className='poppins text-[16px] font-normal leading-[22px] text-center'>{i + 1}</p>
          </div>
        </div>
      </td>
      <td>
        <div className='flex justify-start items-center gap-4'>
          <Link
            //  to={`/dashboard/employees/${promotion._id}`} 
            className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </Link>
          {name}
        </div>
      </td>
      <td>{quiz}</td>
      <td>{score}</td>

    </tr>
  );
};

export default StudentTableDetails;