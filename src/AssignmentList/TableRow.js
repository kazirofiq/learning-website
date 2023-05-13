import React from 'react';
import avatar from "../assest/navicon.png";
import moment from 'moment/moment';
import { useState } from 'react';
import { server } from '../variables/server';

const TableRow = ({ assignment }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [marks, setMarks] = useState(assignment.marks || 0);
    console.log(marks);

    const giveMarks = e => {
        e.preventDefault()
        const marks = e.target.marks.value;

        fetch(`${server}/assignment?courseId=${assignment.courseId}&moduleNo=${assignment.moduleNo}&studentUid=${assignment.studentUid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ marks, isChecked: true })
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged && result.modifiedCount > 0) {
                    setMarks(marks)
                }
                setIsClicked(false)
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">
                    <div class="flex items-center gap-x-2">
                        <img class="object-cover w-10 h-10 rounded-full" src={assignment.photoURL || avatar} alt="" />
                        <div>
                            <h2 class="font-medium text-[#333333]">{assignment.studentName}</h2>
                            <p className='font-normal text-xs'>{assignment.studentId}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                <p>{moment(assignment.submittedTime).format('D MMMM YYYY')}</p>
                <p>{moment(assignment.submittedTime).format('LT')}</p>
            </td>
            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                <a className='link text-blue-600' href={assignment.driveLink}>Drive Link</a>
            </td>
            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">{assignment.totalSubmitted} <span className='text-[#666666]'>(Till now)</span> </td>
            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">
                {
                    isClicked ?
                        <form className='w-10' onSubmit={giveMarks}>
                            <input name='marks' defaultValue={marks} onBlur={() => setIsClicked(false)} className='w-10' type="text" placeholder='mark' autoFocus />
                        </form>
                        :
                        <span onClick={() => setIsClicked(true)}>{marks}</span>
                }
            </td>
        </tr>
    );
};

export default TableRow;