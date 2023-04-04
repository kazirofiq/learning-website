import React from 'react';

const Assignment = () => {
    return (
        <div className=''>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-[#3D419F] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-[#FFFFFF] poppins' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-[#3D419F] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-[#FFFFFF] poppins' style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-[#3D419F] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-[#FFFFFF] poppins' style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-[#3D419F] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-[#FFFFFF] poppins' style={{ "--value": 36 }}></span>
                    </span>
                    sec
                </div>
            </div>

        </div>
    );
};

export default Assignment;