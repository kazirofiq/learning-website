import React, { useState } from 'react';
import UploadLessonVideo from '../UploadLessonVideo/UploadLessonVideo';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { server } from '../../../variables/server';

const Modules = ({ children }) => {
    const { workshopId } = useParams();
    const [videoId, setVideoId] = useState(null);
    const [videoError, setVideoError] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCreateModules = data => {
        if (!videoId) {
            return setVideoError("Video Is Required")
        }
        data.videoId = videoId;
        data.workshopId = workshopId;

        fetch(`${server}/workshops/module`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    navigate(`/admindashboard/myWorkshop`);
                }
            })
    }

    return (
        <form onSubmit={handleSubmit(handleCreateModules)} className='mb-10'>
            <div>
                <div className='flex items-center w-full'>
                    <input
                        {...register("title", {
                            required: `Module Title is required`,
                        })}
                        type="text"
                        placeholder="Module Title"
                        className="input bg-transparent w-full focus:outline-none placeholder:text-[#1B1D48] font-semibold text-lg text-[#1B1D48] pl-0"
                    />
                </div>
                {errors.title && (
                    <p className="text-red-600 text-center font-semibold" role="alert">
                        {errors.title?.message}
                    </p>
                )}
            </div>
            <div className='mt-3 pb-8 px-6 pt-6 shadow-md rounded-xl bg-[#ffffff]'>
                <div className='mb-10'>
                    <label
                        htmlFor={`Lesson`}
                        className="block text-[#666666] font-normal text-sm mb-2"
                    >
                        Lesson:
                    </label>
                    <input
                        {...register("lessonTitle", {
                            required: `Lesson title is required`,
                        })}
                        type="text"
                        id={`Lesson`}
                        placeholder="Lesson Title"
                        className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
                    />
                    {errors.lessonTitle && (
                        <p className="text-red-600 text-center font-semibold" role="alert">
                            {errors.lessonTitle?.message}
                        </p>
                    )}
                    <UploadLessonVideo
                        setVideoId={setVideoId}
                        videoError={videoError}
                        setVideoError={setVideoError}
                    />
                </div>
            </div>
            {children}
        </form>
    );
};

export default Modules;