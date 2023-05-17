import React, { useEffect, useState } from 'react';
import assignment from '../../assest/assignment/Assignment Vector.png'
import './Assignment.css';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { VedioContext } from '../../contexts/VedioProvider';
import { server } from '../../variables/server';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/AuthProvider';

const Assignment = () => {
    const { allModules } = useContext(VedioContext);
    const { user } = useContext(AuthContext);
    const [remainingTime, setRemainingTime] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [savedResult, setSavedResult] = useState({});
    const assignmentData = useLoaderData();
    const { assignmentDuration, startFrom } = assignmentData.assignment;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useTitle('Assignment - ');

    const submitAssignment = data => {
        setIsLoading(true);
        const moduleInfo = allModules.find(m => m.lessons[m.lessons.length - 1].number === assignmentData._id);
        data.resultOf = "assignment";
        data.moduleNo = moduleInfo.moduleNo;
        data.courseId = moduleInfo.courseId;
        data.studentUid = user.uid;
        data.submittedTime = new Date().getTime();
        data.marks = 0;

        fetch(`${server}/result`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setIsLoading(false);
                setIsSubmitted(true);
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const timeRemainingInterval = setInterval(() => {
            const remainingTime = startFrom + (Number(assignmentDuration) * 60 * 60 * 1000) - new Date().getTime();
            if (remainingTime < 0) {
                clearInterval(timeRemainingInterval)
                return;
            }
            const remTotalSec = parseInt(remainingTime / 1000)
            const remSec = parseInt(remTotalSec % 60)
            const remMin = parseInt((remTotalSec / 60) % (60))
            const remHours = parseInt((remTotalSec / 3600) % (24))
            const remDays = parseInt(remTotalSec / (24 * 3600))
            // console.log(remSec, remMin, remHours, remDays);
            setRemainingTime({
                remDays,
                remHours,
                remMin,
                remSec,
            })
        }, 1000);

        return () => clearInterval(timeRemainingInterval)

    }, [assignmentDuration, startFrom]);

    useEffect(() => {
        const moduleInfo = allModules.find(m => m.lessons[m.lessons.length - 1].number === assignmentData._id);
        if (moduleInfo && user?.uid) {
            setIsLoading(true);
            fetch(`${server}/result?resultOf=assignment&courseId=${moduleInfo?.courseId}&moduleNo=${moduleInfo?.moduleNo}&studentUid=${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    if (Object.keys(data).length > 0) {
                        setIsSubmitted(true);
                        setSavedResult(data);
                    }
                })
                .catch(err => console.error(err))
        }
    }, [allModules, assignmentData, user])

    return (
        <>
            {
                isLoading ?
                    <div className="flex justify-center items-center w-full h-full">
                        <ClipLoader color="#0000ff" size="50px" />
                    </div>
                    :
                    <div className=' w-[320px] lg:w-[732px] lg:mt-0 mt-8 h-[378px] lg:h-[572px] mx-5 lg:mx-0 bg-white custom_shadow' >
                        <p className='lg:pt-10 pt-6 poppins text-xl font-medium leading-[30px] tracking-wider text-[#1B1D48] text-center'>Time Remaining</p>

                        <div className="grid grid-flow-col gap-2 lg:gap-4 justify-center text-center mt-3 lg:mt-4 ">
                            <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                                <div>
                                    <span className="countdown ">
                                        <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": remainingTime.remDays || 0 }}></span>
                                    </span>
                                    <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Days</p>
                                </div>
                            </div>

                            <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                                <div>
                                    <span className="countdown ">
                                        <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": remainingTime.remHours || 0 }}></span>
                                    </span>
                                    <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Hours</p>
                                </div>
                            </div>

                            <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                                <div>
                                    <span className="countdown ">
                                        <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": remainingTime.remMin || 0 }}></span>
                                    </span>
                                    <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Minutes</p>
                                </div>
                            </div>

                            <div className="w-[66px] flex items-center justify-center lg:w-[88px] h-[66px] lg:h-[88px] bg-[#3D419F] rounded-[10px] ">
                                <div>
                                    <span className="countdown ">
                                        <span className='text-[#FFFFFF] poppins text-[20px] lg:text-[32px] leading-6 lg:leading-9 font-semibold lg:font-bold' style={{ "--value": remainingTime.remSec || 0 }}></span>
                                    </span>
                                    <p className='text-xs lg:text-sm leading-3 lg:leading-[20px] font-normal text-[#C3C4E1] text-center'>Seconds</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center mx-auto lg:w-[323.3px] w-[192.89px] lg:h-[238px] h-[142px] mt-6 lg:mt-10'>
                            <img src={assignment} alt="" />
                        </div>

                        {
                            isSubmitted ?
                                <div className='flex relative mt-6 lg:mt-10 items-center justify-center mx-auto w-[288px] lg:w-[344px] h-[40px] text-slate-800 text-lg font-semibold'>
                                    {
                                        savedResult?.isChecked ?
                                            <span>Your assignment mark: <span>{savedResult?.marks}</span></span>
                                            :
                                            <span>Your assignment is submitted</span>
                                    }
                                </div>
                                :
                                <>
                                    <form onSubmit={handleSubmit(submitAssignment)} className='flex relative mt-6 lg:mt-10 items-center justify-center mx-auto w-[288px] lg:w-[344px] h-[40px]'>
                                        <input
                                            {...register("driveLink", {
                                                required: `Drive link is required`,
                                            })}
                                            type="text"
                                            placeholder="Paste Google Drive Link Here"
                                            className="input border-1 border-solid border-[#C3C4E1] w-[190px] lg:w-[344px] h-[40px] focus:outline-none"
                                        />
                                        <button type='submit' className='absolute right-[-45px] text-sm lg:text-base leading-[21px] lg:leading-6 py-2 px-5 rounded-[12px] text-white lg:font-semibold font-medium poppins bg-[#3D419F]'>Submit</button>
                                    </form>
                                    {
                                        errors.driveLink && <p className="text-red-600 text-center font-semibold" role="alert">
                                            {errors.driveLink?.message}
                                        </p>
                                    }
                                </>
                        }
                    </div>
            }
        </>


        // <AssignmentResult></AssignmentResult>
        // <AssignmentFreeResource></AssignmentFreeResource>
    );
};

export default Assignment;