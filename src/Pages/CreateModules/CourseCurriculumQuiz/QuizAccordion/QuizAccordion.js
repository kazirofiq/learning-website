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
      if (!prevModules.lessons[prevModules.lessons.length - 1].quiz) {
        prevModules.quiz = quizData.quiz
        return { ...prevModules };
      }
      return prevModules;
    });
  }, [quizData, setModulesData])

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
    </div>
  );
};

export default QuizAccordion;