import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { VedioContext } from '../../../contexts/VedioProvider';
import useTitle from '../../../hooks/useTitle';
import { ClipLoader } from 'react-spinners';

const Vedio = () => {

    const { currentContent } = useContext(VedioContext)
    // const OneVideo = currentContent?.videoId;s
    // console.log(OneVideo);

    const [videoLink, setVideoLink] = useState()
    // console.log(videoLink);

    const video = useLoaderData()
    // console.log(video.videoId);

    const { videoId } = video

    useEffect(() => {
        fetch(`http://localhost:5000/videos/${videoId}`)
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

export default Vedio;