import React, { useState } from 'react';

const QrGenaretor = () => {
    const [result, setResult] = useState('')
    return (
        <div>
            <div>
                <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7 w-full lg:w-[540px] md:w-full border bg-[#FFFFFF] rounded-xl shadow-[#E7E7FF] shadow-xl mt-8 lg:mt-0 md:mt-0'>
                    <h3 className='lg:leading-[36px] leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48]'>QR Code Generator</h3>
                    <div className='flex items-center justify-between mt-7'>
                        <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333]'>Enter URl</p>
                        <input type="number" placeholder="Enter Your link" className="rounded-lg input input-bordered w-[152px] lg:w-[298px] md:w-[200px]" />
                    </div>
                    {
                        result &&
                        <>
                            <p className='border mt-6'></p>
                            <div className='flex items-center justify-between mt-7'>
                                <p>qr code</p>
                            </div>
                            <button className='mt-5 leading-[21px] lg:leading-[24px] md:leading-[22px] text-sm lg:text-base md:text-base font-semibold text-white rounded-[10px] bg-[#3D419F] md:py-3 lg:py-3 py-2 px-[109px] lg:px-[198px] md:px-[150px] w-full'>Download</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default QrGenaretor;