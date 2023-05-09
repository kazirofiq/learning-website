import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { VedioContext } from '../../../contexts/VedioProvider';
import useTitle from '../../../hooks/useTitle';

const Vedio = () => {

    // const { allModules } = useContext(VedioContext)
    // console.log(allModules);

    const [videoLink, setVideoLink] = useState()

    const video = useLoaderData()
    // console.log(video.videoId);
    const { videoId } = video

    useEffect(() => {
        fetch(`http://localhost:5000/videos/${videoId}`)
            .then(res => res.json())
            .then(data => setVideoLink(data))
    }, [videoId])



    return (
        <div>
            <div className=''>
                <iframe className='h-[180px] lg:h-[445px] md:h-[400px] w-full lg:w-[730px]' src={`https://player.vdocipher.com/v2/?otp=${videoLink?.otp}&playbackInfo=${videoLink?.playbackInfo}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" title='h'></iframe>
            </div>
        </div>
    );
};

export default Vedio;