import React from 'react';
import Lottie from 'react-lottie';
import playAndPause from '../Lottie_files/EYky9aTh9p.json'

const PlayAndPauseButton = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: playAndPause,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie
                className="lg:w-full bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default PlayAndPauseButton;
