import React, { useState } from 'react';
import plusIcon from "../../../../assest/icon/plus.png";
import './QuizAccordion.css';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import { useEffect } from 'react';

const QuizAccordion = ({ moduleNo, setModulesData }) => {
  const [questions, setQuestions] = useState(["que"]);
  const [quizData, setQuizData] = useState({
    moduleNo: moduleNo,
    quiz: {
      questions: [{
        options: [],
        id: (new Date()).getTime()
      }]
    }
  })
  // console.log(quizData);

  const adMoreQuiz = () => {
    setQuestions(prev => [
      ...prev,
      "que"
    ]);
    setQuizData({
      moduleNo: moduleNo,
      quiz: {
        questions: [
          ...quizData.quiz.questions, {
            options: [],
            id: (new Date()).getTime()
          }
        ]
      }
    })
  }

  useEffect(() => {
    setModulesData(prevModules => {
      const index = prevModules.findIndex(prevMod => prevMod.moduleNo === moduleNo);
      if (!prevModules[index].lessons[prevModules[index].lessons.length - 1].quiz) {
        prevModules[index].quiz = quizData.quiz
        return [...prevModules];
      }
      return prevModules;
    });
  }, [quizData, setModulesData, moduleNo])

  return (
    <div className='poppins'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-[#666666] font-normal text-sm mb-2'>Question</span>
        <button type='button' onClick={adMoreQuiz} className="w-[138px] h-[32px] text-[#3D419F] border-[1px] border-[#3D419F] flex items-center justify-center capitalize rounded-lg">
          <span>
            <img className='mr-2' src={plusIcon} alt="" />
          </span>
          New Question
        </button>
      </div>
      {
        questions.map((que, i) => <QuizQuestions setQuizData={setQuizData} key={i} queNo={i + 1} moduleNo={moduleNo} />)
      }
      {/* accordion items two */}
      {/* <div className="border rounded-lg mb-4">
        <div
          className="flex justify-between items-center p-4 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            edit
              ?
              <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3" />
                <TiTickOutline onClick={() => clickSwitch(edit)} className='text-2xl text-[#1B1D48]' title='Save Update' />
              </div>
              :
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <img className='mr-4' src={menuIcon} alt="" />
                  <span className='mr-3 text-[#1B1D48] font-medium text-base'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
                </div>
                <FiEdit2 onClick={() => clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
              </div>
          }
          <img className={isOpen ? "rotate-90" : ""} src={dropdownIcon} alt="" />
        </div>
        {isOpen &&
          <div className="px-5 py-4">
            <div className=''>
              <label
                className="block text-[#666666] font-normal text-sm mb-2"
              >
                Option
              </label>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex items-center'>
                  <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                  <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                </div>

                <div className='flex items-center'>
                  <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                  <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                </div>

                <div className='flex items-center'>

                  <input type="radio" name="radio-2" className="radio radio-info mr-2" />

                  <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

                </div>

                <div className='flex items-center'>
                  <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                  <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                </div>
              </div>
            </div>
          </div>
        }
      </div> */}


    </div>
  );
};

export default QuizAccordion;