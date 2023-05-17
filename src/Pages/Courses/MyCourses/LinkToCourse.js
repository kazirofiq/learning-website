import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VedioContext } from '../../../contexts/VedioProvider';

const LinkToCourse = ({ myCourse }) => {
    const { allModules } = useContext(VedioContext);
    const [courseContinueRoute, setCourseContinueRoute] = useState("");

    useEffect(() => {
        const lessons = (allModules?.filter(module => module?.isReleased).map(module => module?.lessons.map(lesson => lesson))?.flat(1))
        if (lessons[0]?.routeName && lessons[0]?.number) {
            setCourseContinueRoute(`/batch-1/${lessons[0].routeName}/${lessons[0].number}`);
        }
    }, [allModules])

    return (
        <Link to={courseContinueRoute}>
            <div className="w-full bg-[#3D419F] rounded-lg mt-[16px]">
                <button className='px-[74.5px] py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
            </div>
        </Link>
    );
};

export default LinkToCourse;