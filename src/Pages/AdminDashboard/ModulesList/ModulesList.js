import React, { useEffect, useState } from 'react';
import SingleModule from './SingleModule';
import { server } from '../../../variables/server';
import { useParams } from 'react-router-dom';

const ModulesList = () => {
    const { courseId } = useParams()
    const [modules, setModules] = useState([])

    useEffect(() => {
        fetch(`${server}/modules/course/${courseId}`)
            .then(res => res.json())
            .then(data => {
                setModules(data);
            })
            .catch(err => console.error(err))
    }, [courseId]);

    console.log(modules);

    return (
        <div className="overflow-x-auto mt-6 table-back w-full">
            <table className="table w-full ">
                <thead>
                    <tr>
                        <td className="text-[12px] text-[#666666] text-[500]">Name</td>
                        <td className="text-[12px] text-[#666666] text-[500]">No</td>
                        <td className="text-[12px] text-[#666666] text-[500]">Released</td>
                        <td className="text-[12px] text-[#666666] text-[500]">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        modules.map(module => <SingleModule key={module._id} module={module} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ModulesList;