import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const WorkshopVideo = ({ videoId }) => {
    console.log(videoId);
    const [videoLink, setVideoLink] = useState()

    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/videos/${videoId}`)
            .then(res => res.json())
            .then(data => setVideoLink(data))
    }, [videoId])

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

export default WorkshopVideo;