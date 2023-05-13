import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { VedioContext } from '../../../contexts/VedioProvider';
import { AuthContext } from '../../../contexts/AuthProvider';
import { server } from '../../../variables/server';

const Vedio = () => {
    const { allModules } = useContext(VedioContext);
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();
    // console.log(allModules);

    const [videoLink, setVideoLink] = useState()

    const video = useLoaderData()
    const { videoId } = video

    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/videos/${videoId}`)
            .then(res => res.json())
            .then(data => setVideoLink(data))
    }, [videoId])

    useEffect(() => {
        if (user?.uid) {
            fetch(`${server}/users/uid?uid=${user?.uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.enrolledCourses, allModules);
                    const info = data.enrolledCourses.find(course => course.id === allModules[0]?.courseId);
                    const allLessons = allModules?.map(module => module.lessons.map(lesson => lesson))?.flat(1)
                    const lessonId = pathname.split('/')[3];
                    const index = allLessons.findIndex(less => less.number === lessonId) + 1;
                    const newCompleted = Math.floor(index * 100 / allLessons.length);
                    console.log(info);

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

    return (
        <div className='h-full'>
            <div className='h-full'>
                {
                    videoLink ?
                        <iframe className='h-[180px] lg:h-[445px] md:h-[400px] w-full lg:w-[730px]' src={`https://player.vdocipher.com/v2/?otp=${videoLink?.otp}&playbackInfo=${videoLink?.playbackInfo}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" title='h'></iframe>
                        :
                        <div className="flex justify-center items-center h-full">
                            <ClipLoader color="#0000ff" size="50" />
                        </div>
                }
            </div>
        </div>
    );
};

export default Vedio;