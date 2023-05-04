import React from 'react';
import './StudentList.css'
import preIcon from '../../assest/icon/preicon.png';
import nextIcon from '../../assest/icon/nexticon.png';

const StudentList = () => {
    return (
        <section className='student-list-table-shadow max-w-[1138px] mx-auto'>
            <div class="container px-4 mx-auto bg-white my-8 ">
                <div class="flex items-center px-[5px] py-[10px] justify-between">
                    <h2 class="text-sm font-medium leading-[21px] text-[#333333]">Student List</h2>
                    {/* <select className="selectop outline-none focus-none">
                        <option>Amazon Kdp course</option>
                        <option>Ui/Ux Design course </option>
                        <option>Animation</option>
                        <option>UI/UX</option>
                    </select> */}

                </div>


                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto">
                        <div class="inline-block min-w-full py-2 align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                <p>Course Name</p>

                                            </th>
                                            <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]"><p>STUDENT ID</p>

                                            </th>


                                            <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                <p>Course Name</p>

                                            </th>

                                            <th scope="col" class="py-3.5 leading-[18px] px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                <p>Assignment (attended)</p>

                                            </th>
                                            <th scope="col" class="py-3.5 px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                <p>Score</p>

                                            </th>
                                            <th scope="col" class="py-3.5 px-4 text-xs font-medium text-left rtl:text-right text-[#666666]">


                                                <p>Position</p>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-[#E2E3F1] dark:divide-gray-700 dark:bg-gray-900">
                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">


                                                    <div class="flex items-center gap-x-2">
                                                        <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                                        <h2 class="font-medium text-[#333333]">Arthur Melo</h2>


                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                                                <p>123456789</p>
                                            </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">Amazon KDP Zero to Mastery</td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">25 <span className='text-[#666666]'>(Till now)</span> </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">95/10
                                                0 </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">1</td>

                                        </tr>
                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">


                                                    <div class="flex items-center gap-x-2">
                                                        <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                                        <h2 class="font-medium text-[#333333]">Arthur Melo</h2>


                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm font-medium text-[#333333] whitespace-nowrap">
                                                <p>123456789</p>
                                            </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">Amazon KDP Zero to Mastery</td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">25 <span className='text-[#666666]'>(Till now)</span> </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">95/10
                                                0 </td>
                                            <td class="px-4 py-4 text-sm  text-[#333333] whitespace-nowrap">1</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6 pb-4">
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
                </div>
            </div>
        </section>
    );
};

export default StudentList;