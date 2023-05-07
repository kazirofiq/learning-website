import { PlayCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VedioContext } from '../../contexts/VedioProvider';

const Lesson = ({ lesson, moduleNo, i }) => {

    const { routeName, name, number } = lesson;

    const { onOptionClicked } = useContext(VedioContext)

    return (

        <div>
            <Link to={`/batch-1/${routeName}/${number}`}>
                <button onClick={onOptionClicked(name)} className="flex justify-between items-center my-1 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left px-2 py-3 bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F] cursor-pointer gap-x-2">
                    <div>
                        <PlayCircleIcon className='w-[18px] h-[18px]' />
                    </div>

                    <div>
                        <p className='lg:w-[275px] w-[248px]'>{moduleNo}-{`${i + 1}`} :{name}</p>
                    </div>
                </button>
            </Link>
        </div >
    );
};

export default Lesson;