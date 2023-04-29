import React from 'react';
import { Link } from 'react-router-dom';

const StudentTableDetails = ({studenttables, i}) => {
    const { name, img, quiz, score } =
    studenttables;
    return (
        <tr key={studenttables._id}>
      <td>{i + 1}</td>
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