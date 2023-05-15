import React from 'react';
import QuizAccordion from './QuizAccordion/QuizAccordion';

const CourseCurriculumQuiz = ({ moduleNo, quizNo, setModulesData }) => {

  const addQuizName = e => {
    setModulesData(prevModules => {
      prevModules.quizName = e.target.value;
      return { ...prevModules };
    });
  }

  return (
    <div className='mt-3'>
      <label
        htmlFor="Upload-File"
        className="block text-[#666666] font-normal text-sm mb-2"
      >
        Lesson {moduleNo} - {quizNo}: Quiz
      </label>
      <input onBlur={addQuizName} type="text" id='Upload-File' placeholder="Quiz Title" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-full h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
      <div className='mt-5'>
        <QuizAccordion moduleNo={moduleNo} setModulesData={setModulesData} />
      </div>
    </div>
  );
};

export default CourseCurriculumQuiz;