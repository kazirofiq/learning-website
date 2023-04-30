import React, { useState } from 'react';

const CategoryFinder = () => {
    const [result, setResult] = useState('')
    return (
        
        <div>
            <div>
                <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7 w-full md:w-full border bg-[#FFFFFF] rounded-xl shadow-[#E7E7FF] shadow-xl mt-8 lg:mt-0 md:mt-0'>
                    <h3 className='lg:leading-[36px] leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48]'>Category Finder</h3>
                    <div className='mt-7'>
                        <div class="relative">
                            <label class="sr-only" for="search"> Search </label>
                            <input
                                className="h-10 w-full px-4 lg:px-5 md:px-4 py-5 border-[1px] border-[#3D419F] rounded-xl"
                                id="search"
                                type="search"
                                placeholder="Search Keyword..."
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
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

export default CategoryFinder;