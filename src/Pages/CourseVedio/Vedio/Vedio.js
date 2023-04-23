import React, { createContext } from 'react';
import { VedioContext } from '../../../contexts/VedioProvider';

const Vedio = () => {

    const { courseSummary } = createContext(VedioContext)

    return (
        <div>
            <div className=''>
                <img className='h-[180px] lg:h-[410px] md:h-[400px] w-full lg:w-[730px]' src='https://thumbs.dreamstime.com/b/bali-mynah-birds-19173506.jpg' alt='' />
            </div>
        </div>
    );
};

export default Vedio;