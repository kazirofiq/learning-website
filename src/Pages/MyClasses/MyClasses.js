import React from 'react';
import search_icon from '../../assest/my_class/search_icon.png';
import play_button from '../../assest/my_class/play_circle_filled.png';
import assignment from '../../assest/my_class/assignment.png';
import quiz from '../../assest/my_class/quiz.png';
import './MyClass.css';

const MyClasses = () => {
  return (
    // <section className="bg-[#F7F7FE]">
    //   <div className="grid grid-cols-1 justify-center items-center">
    //     <div className="container flex flex-col justify-center my-3">
    //       <div className="space-y-4 w-[350px]">
    //         <div className="collapse collapse-arrow bg-white">
    //           <input type="checkbox" className="peer" />

    //           <div className="rounded-[10px] border-solid border-2 border-[#C3C4E1] peer-checked:border-[#3D419F] collapse-title text-[#555555] peer-checked:text-[#3D419F] h-[106px] lg:text-[18px] lg:leading-[27px] font-medium poppins">
    //             <p className="">Module 04 : Types of Niches in Amazon KDP</p>
    //             <div>
    //               <p>10/24 Video</p>
    //             </div>
    //           </div>

    //           <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#FFFFFF] peer-checked:text-[#666666]">
    //             <div className="flex justify-between mt-3">
    //               <div className="flex items-center gap-2">
    //                 <img src={play} alt="" className="w-[14px] h-[14px]" />
    //                 <p className="text-sm leading-[21px]">Lesson 01</p>
    //               </div>
    //               <div className="flex items-center gap-6">
    //                 <p className="text-sm leading-[21px]">00.05.00</p>
    //                 <img src={lock} alt="" className="w-[14px] h-[14px]" />
    //               </div>
    //             </div>
    //             <div className="flex justify-between mt-3">
    //               <div className="flex items-center gap-2">
    //                 <img src={play} alt="" className="w-[14px] h-[14px]" />
    //                 <p className="text-sm leading-[21px]">Lesson 02</p>
    //               </div>
    //               <div className="flex items-center gap-6">
    //                 <p className="text-sm leading-[21px]">00.05.00</p>
    //                 <img src={lock} alt="" className="w-[14px] h-[14px]" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className='max-w-[1110px] mx-5 lg:mx-auto'>

      <div className="grid grid-cols-1 justify-center items-center">
        <div className="container flex flex-col justify-center mt-6">

          <div className="space-y-4 w-[350px] mx-auto lg:mx-0">
            <div className='flex items-center text-sm lg:text-[18px] leading-[27px] lg:leading-6 poppins font-bold'>
              <p className='mr-3 text-[#282B6B] lg:mr-[22px] w-[101px] lg:w-[179px] '>Course Complete</p>
              <progress className="progress progress-secondary bg-[#E1F1EB] w-[143px] lg:w-[143px] h-[6px] lg:h-[8px]" value="33" max="100"></progress>
              <p className='text-[#555555] text-xs leading-[18px] font-normal ml-1'>33%</p>
            </div>

            <div className='flex bg-primary items-center rounded-xl mt-4 w-[350px] h-[45px]'>
              <img src={search_icon} alt="" className='w-4 h-4 ml-6 my-[14.5px]' />
              <input type="text" id="inputID" placeholder="Search Lesson" className="input bg-primary rounded-r-xl rounded-l-none text-[#FFFFFF] w-[350px] h-[45px]" />
            </div>

            <div className=''>
              <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />

                <div className="grid mt-6 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-[18px] peer-checked:text-base peer-checked:leading-6 leading-[27px] font-medium peer-checked:font-bold poppins ">
                  <p className="">Module 04 : Types of Niches in Amazon KDP</p>
                  <div>
                    <p className='text-[#666666] text-sm font-light leading-[21px]'>0/9 Video</p>
                  </div>
                </div>

                <div className="collapse-content w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-1 : What is Amazon KDP?</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-2 : Future and Earning Opportunity</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-3 : Amazon Kindle Copyright and Trademark Rules</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-4 : How to Make Book Cover Template for KDP</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={assignment} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-5 : Assignment 1</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <img src={quiz} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-6 : Quiz 1</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />

                <div className="grid mt-3 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-[18px] peer-checked:text-base peer-checked:leading-6 leading-[27px] font-medium peer-checked:font-bold poppins ">
                  <p className="">Module 06 : Working Process and Necessary Document</p>
                  <div>
                    <p className='text-[#666666] text-sm font-light leading-[21px]'>10/24 Video</p>
                  </div>
                </div>

                <div className="collapse-content w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-1 : What is Amazon KDP?</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />

                <div className="grid mt-3 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-[18px] peer-checked:text-base peer-checked:leading-6 leading-[27px] font-medium peer-checked:font-bold poppins ">
                  <p className="">Module 07 : Working Process and Necessary Document</p>
                  <div>
                    <p className='text-[#666666] text-sm font-light leading-[21px]'>10/24 Video</p>
                  </div>
                </div>

                <div className="collapse-content w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-1 : What is Amazon KDP?</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="collapse collapse-arrow mb-[100px]">
                <input type="checkbox" className="peer" />

                <div className="grid mt-3 items-center bg-[#F8F8FF] rounded-[10px] border-[2px] border-solid border-[#E2E3F1] peer-checked:rounded-b-[0px] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-b-0 peer-checked:bg-[#F8F8FF] collapse-title text-[#555555] peer-checked:text-[#333333] text-[18px] peer-checked:text-base peer-checked:leading-6 leading-[27px] font-medium peer-checked:font-bold poppins ">
                  <p className="">Module 07 : Types of Paperback Book Categories</p>
                  <div>
                    <p className='text-[#666666] text-sm font-light leading-[21px]'>10/24 Video</p>
                  </div>
                </div>

                <div className="collapse-content w-[350px] peer-checked:bg-[#F8F8FF] text-primary-content peer-checked:text-[#666666] peer-checked:border-solid peer-checked:border-[#3D419F] peer-checked:border-2 peer-checked:border-t-0 rounded-b-[10px]">

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <img src={play_button} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                      <p className='text-base text-[#666666] font-light leading-6 w-[274px]'>1-1 : What is Amazon KDP?</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MyClasses;