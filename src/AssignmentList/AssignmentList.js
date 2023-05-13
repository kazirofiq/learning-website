import React from 'react';
// import preIcon from '../assest/icon/preicon.png';
// import nextIcon from '../assest/icon/nexticon.png'
import './AssignmentList.css'
import { useEffect } from 'react';
import { server } from '../variables/server';
import { useState } from 'react';
import TableRow from './TableRow';

const AssignmentList = () => {
    const [assignments, setAssignments] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${server}/assignment`)
            .then(res => res.json())
            .then(data => {
                data.forEach((assignment, i) => {
                    fetch(`${server}/users/uid?uid=${assignment?.studentUid}`)
                        .then(res => res.json())
                        .then(user => {
                            assignment.studentName = user.name
                            assignment.studentId = user.studentId
                            assignment.photoURL = user.photoURL
                            if (i === data.length - 1) {
                                setIsLoading(false)
                                setAssignments(data)
                            }
                        })
                        .catch(err => console.error(err))

                })
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div className="flex justify-center items-center w-screen h-screen">
                        <progress className="progress w-56"></progress>
                    </div> :
                    <section className='student-list-table-shadow max-w-[1138px] mx-auto'>
                        <div class="container px-4 mx-auto bg-white my-8 ">
                            <div class="flex items-center px-[5px] py-[10px] justify-between">
                                <h2 class="text-sm font-medium leading-[21px] text-[#333333]">Student List</h2>
                            </div>
                            <div class="flex flex-col mt-6">
                                <div class="-mx-4 -my-2 overflow-x-auto">
                                    <div class="inline-block min-w-full py-2 align-middle">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full divide-y divide-gray-200 ">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                            <p>Name</p>

                                                        </th>
                                                        <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]"><p>Date & time</p>

                                                        </th>


                                                        <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                            <p>Assignment</p>

                                                        </th>

                                                        <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                            <p>Assignment (attended)</p>

                                                        </th>
                                                        <th scope="col" class="py-3.5 px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                            <p>Marks</p>

                                                        </th>
                                                        {/* <th scope="col" class="py-3.5 px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                            <p>Position</p>

                                                        </th> */}
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-[#E2E3F1]">
                                                    {
                                                        assignments.map((assignment, i) => <TableRow key={i} assignment={assignment} />)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="flex items-center justify-between mt-6 pb-4">
                                <a href="/" class=" flex items-center justify-center  text-base student-prenxt-button text-[#333333] font-medium">
                                    <img src={preIcon} ALT="PREVIOUS ICON" className='pt-[3px] pr-1' />

                                    <span>
                                        Previous
                                    </span>
                                </a>

                                <div class="items-center hidden lg:flex gap-x-3">
                                    <a href="/" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                                    <a href="/" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                                </div>

                                <a href="/" class="flex items-center justify-center text-base student-prenxt-button text-[#333333] font-medium">


                                    <span>
                                        Next
                                    </span>
                                    <img src={nextIcon} ALT="NEXT ICON" className='pt-[3px] pl-1' />
                                </a>
                            </div> */}
                        </div>
                    </section>
            }
        </>
    );
};

export default AssignmentList;