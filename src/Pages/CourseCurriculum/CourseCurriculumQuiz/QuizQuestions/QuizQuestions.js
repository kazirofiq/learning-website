import React, { useState } from 'react';
import menuIcon from "../../../../assest/icon/Menu.png";
import dropdownIcon from "../../../../assest/icon/stv.png";
import { useEffect } from 'react';

const QuizQuestions = ({ setQuizData, queNo, moduleNo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedNo, setCheckedNo] = useState(null);
    const [options, setOptions] = useState(["", "", "", ""]);

    const addQuestionTitle = e => {
        setQuizData(prevData => {
            prevData.quiz.questions[queNo - 1].question = e.target.value;
            return { ...prevData };
        });
    }
    // console.log(options);

    const addOptions = (e, no) => {
        setOptions(prev => {
            prev[no] = e.target.value
            return [...prev]
        })
        if (no === checkedNo) {
            setQuizData(prevData => {
                if (prevData.quiz.questions[queNo - 1].correctAnswer !== e.target.value) {
                    prevData.quiz.questions[queNo - 1].correctAnswer = e.target.value;
                    return { ...prevData };
                }
                return prevData;
            });
        }
    }

    const addCorrectAnswer = (e, no) => {
        if (e.target.checked) {
            setQuizData(prevData => {
                prevData.quiz.questions[queNo - 1].correctAnswer = options[no];
                return { ...prevData };
            });
            setCheckedNo(no)
        }
    }

    useEffect(() => {
        if (options.length === 4) {
            setQuizData(prevData => {
                prevData.quiz.questions[queNo - 1].options = options;
                return { ...prevData };
            });
        }
    }, [options, queNo, setQuizData])

    return (
        <div className="border rounded-lg mb-4">
            <div
                className="flex justify-between items-center p-4 cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center w-full'>
                    <img className='mr-4' src={menuIcon} alt="" />
                    <input onBlur={addQuestionTitle} type="text" placeholder="Question Title" className="input w-[90%] text-[#1B1D48] p-0 h-auto" />
                </div>
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
                                <input onChange={e => addCorrectAnswer(e, 0)} type="radio" name={`radio-${moduleNo}-${queNo}`} className="radio radio-info mr-2" />
                                <input onBlur={e => addOptions(e, 0)} defaultValue={options[0]} type="text" placeholder="Option 1" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input onChange={e => addCorrectAnswer(e, 1)} type="radio" name={`radio-${moduleNo}-${queNo}`} className="radio radio-info mr-2" />
                                <input onBlur={e => addOptions(e, 1)} defaultValue={options[1]} type="text" placeholder="Option 2" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input onChange={e => addCorrectAnswer(e, 2)} type="radio" name={`radio-${moduleNo}-${queNo}`} className="radio radio-info mr-2" />
                                <input onBlur={e => addOptions(e, 2)} defaultValue={options[2]} type="text" placeholder="Option 3" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input onChange={e => addCorrectAnswer(e, 3)} type="radio" name={`radio-${moduleNo}-${queNo}`} className="radio radio-info mr-2" />
                                <input onBlur={e => addOptions(e, 3)} defaultValue={options[3]} type="text" placeholder="Option 4" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default QuizQuestions;