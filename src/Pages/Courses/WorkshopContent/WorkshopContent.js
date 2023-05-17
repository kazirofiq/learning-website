import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WorkshopVideo from './WorkshopVideo';
import WorkshopLesson from './WorkshopLesson';

const WorkshopContent = () => {

    const content = useLoaderData()
    console.log(content);
    const { title, lessonTitle, videoId } = content
    return (
        <div>
            <div className='flex justify-center items-center mt-20'>
                <div className='lg:flex'>
                    <div className=' h-[180px] lg:h-[445px] md:h-[400px] w-full lg:w-[730px]  lg:mr-5 border border-base-300 '>
                        <WorkshopVideo
                            videoId={videoId}
                        ></WorkshopVideo>
                    </div>
                    <div>
                        <WorkshopLesson
                            title={title}
                            lessonTitle={lessonTitle}
                        ></WorkshopLesson>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopContent;