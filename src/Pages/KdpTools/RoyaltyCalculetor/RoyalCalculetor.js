import React, { useState } from 'react';

const RoyalCalculetor = () => {

    const [result, setResult] = useState('')

    return (
        <div>
            <div>
                <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7  w-full bg-[#FFFFFF] rounded-xl custom_shadow mt-8 lg:mt-0 md:mt-0'>
                    <h3 className='lg:leading-[36px] leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48] '>Royalty Calculator</h3>
                    <div className='grid  grid-cols-2 items-center justify-between  mt-4'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Book Type</p>
                        </div>
                        <div>
                            <select className="text-[#333333] select select-bordered w-full border-[#C3C4E1] focus:outline-none">
                                <option>Paperback</option>
                                <option>Hardcover</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid  grid-cols-2 items-center justify-between  mt-4'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Interior Type </p>
                        </div>
                        <div>
                            <select className="text-[#333333] select select-bordered w-full border-[#C3C4E1] focus:outline-none">
                                <option>Black & White</option>
                                <option>Hardcover</option>
                            </select>
                        </div>

                    </div>
                    <div className='grid  grid-cols-2 items-center justify-between  mt-4'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Select Country</p>
                        </div>
                        <select className="text-[#333333] select select-bordered w-full border-[#C3C4E1] focus:outline-none">
                            <option>Netherlands</option>
                            <option>Ucraine</option>
                            <option>USA</option>
                            <option>Bangladesh</option>
                        </select>
                    </div>
                    <div className='grid  grid-cols-2 items-center justify-between  mt-4'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap '>Page Count</p>
                        </div>
                        <div>
                            <input type="number" placeholder="Type here" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                        </div>

                    </div>
                    <div className='grid  grid-cols-2 items-center justify-between  mt-4'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>List Price</p>
                        </div>
                        <div>
                            <input type="number" placeholder="Type here" className="rounded-lg input input-bordered w-full border-[#C3C4E1] focus:outline-none placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                        </div>
                    </div>
                    <button className='mt-5 leading-[21px] lg:leading-[24px] md:leading-[22px] text-sm lg:text-base md:text-base font-semibold text-white rounded-[10px] bg-[#3D419F] md:py-3 lg:py-3 py-2 px-[109px] w-full'>Calculate</button>
                    {
                        result &&
                        <>
                            <p className='border mt-6'></p>
                            <div className='flex items-center justify-between mt-7'>
                                <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Estimated Sales</p>
                                <input disabled type="number" placeholder="Type here" className="rounded-lg input input-bordered w-[152px] lg:w-[298px] md:w-[200px]" />
                            </div>
                            <div className='flex items-center justify-between mt-7'>
                                <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Estimated Sales</p>
                                <input disabled type="number" placeholder="Type here" className="rounded-lg input input-bordered w-[152px] lg:w-[298px] md:w-[200px]" />
                            </div>
                            <div className='flex items-center justify-between mt-7'>
                                <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333] whitespace-nowrap'>Estimated Sales</p>
                                <input disabled type="number" placeholder="Type here" className="rounded-lg input input-bordered w-[152px] lg:w-[298px] md:w-[200px]" />
                            </div>
                            <div className='flex items-center justify-between mt-7'>
                                <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333]'>Estimated Sales</p>
                                <input disabled type="number" placeholder="Type here" className="rounded-lg input input-bordered w-[152px] lg:w-[298px] md:w-[200px]" />
                            </div>
                            <div className='flex items-center justify-between mt-7'>
                                <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333]'>Estimated Sales</p>
                                <input disabled type="number" placeholder="Type here" className="rounded-lg input input-bordered w-[152px]  md:w-[200px]" />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default RoyalCalculetor;