import React from 'react';
import published from "../../../assest/admintable/Status2.png";
import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleDraft = ({ course }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className='w-12 h-12'>
                        <img className='w-full h-full object-cover' src={course.image} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-[#333333] text[16px]">
                            {course.title}
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                Graphics Design
            </td>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                ৳{course.price}
            </td>
            <th>
                <Link to={`/admindashboard/course/${course._id}/create-modules`}>
                    <img className="cursor-pointer" src={published} alt="" />
                </Link>
            </th>
            <td>
                <FaEllipsisH className="text-[#333333] text-end cursor-pointer"></FaEllipsisH>
            </td>
        </tr>
    );
};

export default SingleDraft;