import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VedioContext } from '../../../contexts/VedioProvider';
import { server } from '../../../variables/server';
import { AuthContext } from '../../../contexts/AuthProvider';

const LinkToCourse = ({ myCourse }) => {
    const { user } = useContext(AuthContext)
    const { allModules } = useContext(VedioContext);
    const [courseContinueRoute, setCourseContinueRoute] = useState("");

    useEffect(() => {
        fetch(`${server}/courses/continue?uid=${user?.uid}&courseId=${myCourse?._id}`)
            .then(res => res.json())
            .then(data => {
                if (data.routeName && data.lessonId) {
                    setCourseContinueRoute(`/batch-1/${data.routeName}/${data.lessonId}`);
                } else {
                    setCourseContinueRoute(`/batch-1/${lessons[0].routeName}/${lessons[0].number}`);
                }
            })
            .catch(err => console.error(err))

        const lessons = (allModules?.filter(module => module?.isReleased).map(module => module?.lessons.map(lesson => lesson))?.flat(1))
        if (lessons[0]?.routeName && lessons[0]?.number) {
        }
    }, [allModules, myCourse, user?.uid])

    return (
        <Link to={courseContinueRoute}>
            <div className="w-full bg-[#3D419F] rounded-lg mt-[16px]">
                <button className='px-[74.5px] py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
            </div>
        </Link>
    );
};

export default LinkToCourse;