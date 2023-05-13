import React, { useEffect } from 'react';
import quizImage from '../../assest/quiz/Quiz.png'
import { useLoaderData, useLocation } from 'react-router-dom';
import { useState } from 'react';
import QuizResult from './QuizResult';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { VedioContext } from '../../contexts/VedioProvider';
import { server } from '../../variables/server';
import { ClipLoader } from 'react-spinners';

const Quiz = () => {
    const { allModules } = useContext(VedioContext);
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();

    const allQuiz = useLoaderData()
    const quizes = allQuiz.quizData;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0)
    const [result, setResult] = useState(false)
    const [selected, setSelected] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [quizSelected, setQuizSelected] = useState(quizes);
    const [savedResult, setSavedResult] = useState({});

    const changeQuestion = () => {
        updateScore();
        setQuizSelected(prev => {
            prev[currentQuestion].selected = selected
            return [...prev];
        });
        if (currentQuestion < quizes.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0)
        }
        else {
            const updatedScore = selected === quizes[currentQuestion].correctAnswer ? score + 1 : score
            // setIsLoading(true);
            const moduleInfo = allModules.find(m => m.lessons[m.lessons.length - 1].number === allQuiz._id)
            const resultData = {
                courseId: moduleInfo.courseId,
                moduleNo: moduleInfo.moduleNo,
                resultOf: "quiz",
                score: updatedScore,
                studentUid: user.uid,
                questions: [...quizSelected]
            }

            fetch(`${server}/result`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(resultData)
            })
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    setResult(true);
                })
                .catch(err => console.error(err))
        }
    }

    const updateScore = () => {
        if (selected === quizes[currentQuestion].correctAnswer) {
            setScore(prev => prev + 1)
        }
    }
    const handlePrevClick = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    useEffect(() => {
        if (user?.uid) {
            fetch(`${server}/users/uid?uid=${user?.uid}`)
                .then(res => res.json())
                .then(data => {
                    const info = data?.enrolledCourses.find(course => course.id === allModules[0]?.courseId);
                    const allLessons = allModules?.map(module => module?.lessons.map(lesson => lesson))?.flat(1)
                    // console.log(allModules);
                    const lessonId = pathname.split('/')[3];
                    const index = allLessons.findIndex(less => less.number === lessonId) + 1;
                    const newCompleted = Math.floor(index * 100 / allLessons.length)

                    if (info?.completed < newCompleted) {
                        fetch(`${server}/courses/completed?uid=${user?.uid}&courseId=${allModules[0]?.courseId}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ newCompleted, lessonId })
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            })
                            .catch(err => console.error(err))
                    }
                })
                .catch(err => console.error(err))
        }
    }, [user, allModules, pathname]);

    useEffect(() => {
        const moduleInfo = allModules.find(m => m.lessons[m.lessons.length - 1].number === allQuiz?._id)
        if (moduleInfo && user?.uid) {
            fetch(`${server}/result?resultOf=quiz&courseId=${moduleInfo?.courseId}&moduleNo=${moduleInfo?.moduleNo}&studentUid=${user?.uid}`)
                .then(res => res.json())
                .then(data => {
                    setSavedResult(data);
                })
                .catch(err => console.error(err))
        }
    }, [allModules, allQuiz, user])

    return (
        <section className=' w-[320px] lg:w-[732px] lg:mt-0 mb-[20px] mt-8 h-[381px] lg:h-[445px] mx-5 lg:mx-0 bg-white custom_shadow' >
            {!isLoading ?
                <div className='flex items-center h-full'>
                    {
                        Object.keys(savedResult).length > 0 ?
                            <QuizResult score={savedResult.score} totalScore={quizes.length} /> :
                            result ? (<QuizResult score={score} totalScore={quizes.length} />) : (<>
                                <div className='lg:p-10 py-6 px-4'>
                                    <div>
                                        <p className='poppins text-[14px] lg:text-base font-normal lg:font-medium leading-[21px] lg:leading-6 text-[#333333] text-start'>Quiz</p>
                                    </div>

                                    <div className='flex items-center text-base lg:text-[18px] leading-[24px] lg:leading-6 poppins font-bold'>
                                        <progress className="progress progress-secondary bg-[#E1F1EB] w-[245px] lg:w-[200px] h-[8px] lg:h-[12px]" value={(currentQuestion + 1) * 100 / quizes.length} max="100"></progress>
                                        <p className='text-[#333333] text-xs leading-[18px] font-light ml-1'>0{currentQuestion + 1}/0{quizes.length}</p>
                                    </div>

                                    <div className='mt-[21px] lg:mt-6'>
                                        <p className='lg:block hidden text-[#1B1D48] text-[24px] font-bold leading-[30px] poppins'>{quizes[currentQuestion].question}</p>
                                        <p className='lg:hidden block text-[#1B1D48] text-[20px] font-semibold leading-[30px] poppins'>{quizes[currentQuestion].question}</p>
                                    </div>

                                    <div>
                                        <div className='mt-3 lg:mt-4'>
                                            {
                                                quizes[currentQuestion].options.map((op, i) =>
                                                    <div onClick={() => setSelected(op)} className={`flex items-center gap-3 poppins py-2 px-3 hover:bg-[#ECECF5] rounded-[8px] w-[222px] cursor-pointer ${clickedOption === i + 1 ? "bg-slate-400 hover:bg-slate-400 " : null}`}>
                                                        <input type="checkbox" checked className={`checkbox checkbox-xs ${clickedOption === i + 1 && "checkbox-success"}`} />
                                                        <button onClick={() => setClickedOption(i + 1)} className='text-[14px] lg:text-base text-[#333333] leading-[21px] lg:leading-6 font-normal'>{op}</button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className='flex gap-3 mt-4 lg:mt-8'>
                                        <p onClick={handlePrevClick} className='text-sm lg:text-base leading-[21px] lg:leading-4 py-2 px-6 rounded-[10px] text-[#333333] lg:font-medium font-medium poppins border-[1px] border-solid border-[#666666] hover:bg-[#3D419F] hover:text-white cursor-pointer'>Previous</p>

                                        <p onClick={changeQuestion} className='text-sm lg:text-base leading-[21px] lg:leading-4 py-2 px-6 rounded-[10px] lg:font-medium font-medium poppins bg-[#3D419F] text-white cursor-pointer'>Next</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={quizImage} alt=''></img>
                                </div>
                            </>)}

                </div> :
                <div className="flex justify-center items-center w-full h-full">
                    <ClipLoader color="#0000ff" size="50px" />
                </div>
            }
        </section>
    );
};

export default Quiz;