import React from 'react';
import { Link } from 'react-router-dom';

const KdpRoute = () => {
    return (
        <div>
            {/* layout ta kothai */}
            <div class="mx-auto max-w-xl">
                <h2 class="text-xl lg:text-2xl md:text-2xl font-bold sm:font-semibold md:font-semibold leading-[30px] lg:leading-9 md:leading-8 text-[#1B1D48]">Select Tools</h2>
                <Link to='/kdptools/bsrcalculetor'>
                    <button className='mt-3 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left w-full  px-4 py-2 lg:py-3 md:py-3 border inline-block bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
                        BSR Sales Calculator
                    </button>
                </Link>
                <Link to='/kdptools/royaltycalculetor'>
                    <button className='mt-3 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left w-full  px-4 py-2 lg:py-3 md:py-3 border inline-block bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
                        Royalty Calculator
                    </button>
                </Link>
                <Link to='/kdptools/qrgenaretor'>
                    <button className='mt-3 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left w-full  px-4 py-2 lg:py-3 md:py-3 border inline-block bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
                        QR Code Generator
                    </button>
                </Link>
                <Link to='/kdptools/categoryfinder'>
                    <button className='mt-3 lg:leading-[24px] md:leading-[22px] leading-[21px] text-sm lg:text-base md:text-base rounded-[10px] text-left w-full  px-4 py-2 lg:py-3 md:py-3 border inline-block bg-[#F8F8FF] text-[#666666] font-medium  focus:text-white focus:outline-none focus:bg-[#3D419F]'>
                        KDP Category Finder
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default KdpRoute;