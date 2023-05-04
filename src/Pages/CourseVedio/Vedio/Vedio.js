import React, { createContext } from 'react';
import { VedioContext } from '../../../contexts/VedioProvider';
import useTitle from '../../../hooks/useTitle';

const Vedio = () => {

    useTitle('Module Detail - ');

    const { courseSummary } = createContext(VedioContext)

    return (
        <div>
            <div className=''>
                <img className='h-[180px] lg:h-[413px] md:h-[400px] w-full lg:w-[730px]' src='https://thumbs.dreamstime.com/b/bali-mynah-birds-19173506.jpg' alt='' />
            </div>
        </div>
    );
};

export default Vedio;