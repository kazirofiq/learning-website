import React, { useState } from 'react';
import plusIcon from "../../../assest/icon/plus.png";
import whitePlusIcon from "../../../assest/icon/plus-white.png";
import Cross from "../../../assest/icon/Cross.png";
import UploadLessonVideo from '../UploadLessonVideo/UploadLessonVideo';
import CourseCurriculumQuiz from '../CourseCurriculumQuiz/CourseCurriculumQuiz';
import { useEffect } from 'react';

const Modules = ({ no, addNewModuleFields, setModulesData }) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [showAddBtns, setShowAddBtns] = useState(false);
    const [lessons, setLessons] = useState([{ lessonNo: 1 }]);
    const [lessonsData, setLessonsData] = useState({
        moduleNo: no,
        lessons: [{
            routeName: "video",
            lessonNo: 1
        }]
    });

    const addMoreLesson = () => {
        setLessons([
            ...lessons,
            {
                lessonNo: lessons.length + 1
            }
        ]);
        setLessonsData({
            moduleNo: no,
            lessons: [
                ...lessonsData.lessons,
                {
                    routeName: "video",
                    lessonNo: lessonsData.lessons.length + 1
                }
            ]
        })
    }
    // console.log(lessonsData);

    const addModuleName = e => {
        setModulesData(prevModules => {
            const index = prevModules.findIndex(prevMod => prevMod.moduleNo === no);
            prevModules[index].module = e.target.value;
            return [...prevModules];
        });
    }

    const addLessonName = (e, lessNo) => {
        setLessonsData(prevData => {
            const index = prevData.lessons.findIndex(prevLess => prevLess.lessonNo === lessNo);
            prevData.lessons[index].name = e.target.value;
            return { ...prevData };
        });
    }
    useEffect(() => {
        setModulesData(prevModules => {
            const index = prevModules.findIndex(prevMod => prevMod.moduleNo === no);
            prevModules[index].lessons = lessonsData.lessons
            return [...prevModules];
        });
    }, [lessonsData, setModulesData, no])

    return (
        <div className='mb-10'>
            <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center w-full'>
                    <input onBlur={addModuleName} name={`module${no}`} type="text" defaultValue={`Module ${no} : `} placeholder="Module No: Module Name" className="input bg-transparent w-full focus:outline-none placeholder:text-[#1B1D48] font-semibold text-lg text-[#1B1D48] pl-0" />
                </div>
                <div>
                    <button type='button' onClick={addNewModuleFields} className="w-[152px] h-[40px] text-[#3D419F] border-[1px] border-[#3D419F] flex items-center justify-center rounded-lg">
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
                        <input onBlur={e => addLessonName(e, i + 1)} type="text" id={`Lesson${no}_${i + 1}`} placeholder="Lesson Title" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                        <UploadLessonVideo
                            lesson={lesson}
                            setLessonsData={setLessonsData}
                        />
                    </div>)
                }
                {
                    showQuiz ? <CourseCurriculumQuiz moduleNo={no} quizNo={lessons.length + 1} setModulesData={setModulesData} /> : ""
                }
                <div onClick={() => !showAddBtns && setShowAddBtns(true)} className='flex items-center mt-3'>
                    <img className='mr-3' src={showAddBtns ? whitePlusIcon : plusIcon} alt="" />
                    <span className={`font-normal text-base ${showAddBtns ? "text-[#C3C4E1]" : "text-[#3D419F] cursor-pointer"}`}>Add More</span>
                </div>
                {
                    showAddBtns &&
                    <div className='w-[291px]'>
                        <div onClick={() => setShowAddBtns(false)} className='flex justify-end items-center'>
                            <img className='cursor-pointer' src={Cross} alt="" />
                        </div>
                        <div className='w-[291px] h-12 border-[1px] border-[#C3C4E1] rounded-[10px] flex items-center px-4 py-3'>
                            <div onClick={addMoreLesson} className='flex items-center cursor-pointer'>
                                <img className='mr-3' src={plusIcon} alt="" />
                                <span className='font-normal text-base text-[#3D419F]'>Add Lesson</span>
                            </div>
                            <div className='flex items-center mx-3'>
                                <span className='font-normal text-base text-[#C3C4E1]'>or</span>
                            </div>
                            <div onClick={() => setShowQuiz(true)} className='flex items-center cursor-pointer'>
                                <img className='mr-3' src={plusIcon} alt="" />
                                <span className='font-normal text-base text-[#3D419F]'>Add Quiz</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Modules;