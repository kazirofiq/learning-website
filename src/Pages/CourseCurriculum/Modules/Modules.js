import React, { useState } from 'react';
import plusIcon from "../../../assest/icon/plus.png";
import UploadLessonVideo from '../UploadLessonVideo/UploadLessonVideo';

const Modules = ({ no, mod, addNewModuleFields }) => {
    const [lessons, setLessons] = useState([{ lessonNo: 1 }]);

    const addMoreLesson = () => {
        setLessons([
            ...lessons,
            {
                lessonNo: lessons.length + 1
            }
        ])
    }

    // const 

    return (
        <div className='mb-10'>
            <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center w-full'>
                    <input name={`module${no}`} type="text" defaultValue={`Module ${no} : `} placeholder="Module No: Module Name" className="input bg-transparent w-full focus:outline-none placeholder:text-[#1B1D48] font-semibold text-lg text-[#1B1D48] pl-0" />
                    {/* <h3 type='text' className='font-semibold text-lg text-[#1B1D48] mr-3'>Module 1 : Greetings and Instroduction</h3> */}
                    {/* <img className='cursor-pointer' src={trash} alt="" /> */}
                </div>
                <div>
                    <button onClick={addNewModuleFields} className="w-[152px] h-[40px] text-[#3D419F] border-[1px] border-[#3D419F] flex items-center justify-center rounded-lg">
                        <span>
                            <img className='mr-2' src={plusIcon} alt="" />
                        </span>
                        Add Module
                    </button>
                </div>
            </div>
            <div className='mt-3 pb-8 px-6 pt-6 shadow-md rounded-xl bg-[#ffffff]'>
                {
                    lessons.map((lesson, i) => <div key={i} className='mb-10'>
                        <label
                            htmlFor={`Lesson${no}_${i + 1}`}
                            className="block text-[#666666] font-normal text-sm mb-2"
                        >
                            Lesson {no} - {i + 1}:
                        </label>
                        <input type="text" id={`Lesson${no}_${i + 1}`} placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                        <UploadLessonVideo
                            lesson={lesson}
                            setLessons={setLessons}
                        />
                    </div>)
                }
                <div onClick={addMoreLesson} className='flex items-center mt-3'>
                    <img className='mr-3' src={plusIcon} alt="" />
                    <span className='font-normal text-base text-[#3D419F] cursor-pointer'>Add More</span>
                </div>
            </div>
        </div>
    );
};

export default Modules;