import React, { useState } from 'react';
import { server } from '../../../variables/server';

const SingleModule = ({ module }) => {
    const [released, setReleased] = useState(module.isReleased);

    const updateModule = r => {
        fetch(`${server}/modules/module/${module._id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ isReleased: r })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged && data.modifiedCount > 0) {
                    setReleased(r)
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">{module.module}</td>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">{module.moduleNo}</td>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                {
                    released ?
                        <span className='text-success font-semibold'>Released</span>
                        :
                        <span className='text-error font-semibold'>Not Released</span>
                }
            </td>
            <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                {
                    released ?
                        <button onClick={() => updateModule(false)} className='btn btn-error'>Cancel Release</button>
                        :
                        <button onClick={() => updateModule(true)} className='btn btn-primary'>Release</button>
                }
            </td>
        </tr>
    );
};

export default SingleModule;