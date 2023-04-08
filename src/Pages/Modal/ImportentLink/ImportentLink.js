import React from 'react';

const ImportentLink = () => {
    return (
        <div className='bg-[#F8F8FF] px-5 lg:px-0 md:px-0 py-8 lg:py-[60px] md:py-[50px]'>
            <div className='bg-[#FFFFFF] w-full max-w-[825px] px-4 lg:mx-6 md:px-5 py-5 lg:my-6 md:py-6 shadow-md rounded-xl'>
                <h3 className='text-lg lg:text-2xl font-medium lg:font-semibold leading-7 lg:leading-9 text-[#1B1D48]'>Important Link</h3>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Behance</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Linkedin</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Dribbble</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Pinterest</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Github</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Personal Website</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Type here" className="input bg-[#F8F8FF] w-full max-w-3xl" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ImportentLink;