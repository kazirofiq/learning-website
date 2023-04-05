import React from 'react';

const Address = () => {
    return (
        <div className='poppins'>
            <h1 className='text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg'>About Me</h1>
            <div className='lg:grid flex lg:flex-row flex-col grid-cols-2'>
            <div className='mt-3'>
                <label htmlFor="Vill" className='block text-[#666666] font-normal text-sm mb-2'>Vill</label>
                <input type="text" id='Vill' placeholder="Village" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            </div>
            <div className='mt-3'>
                <label htmlFor="Post" className='block text-[#666666] font-normal text-sm mb-2'>Post</label>
                <input type="text" id='Post' placeholder="Post" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            </div>
            <div className='mt-3'>
                <label htmlFor="Thana" className='block text-[#666666] font-normal text-sm mb-2'>Thana</label>
                <input type="email" id='Thana' placeholder="Thana" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            </div>
            <div className='mt-3'>
                <label htmlFor="District" className='block text-[#666666] font-normal text-sm mb-2'>District</label>
                <input type="text" id='District' placeholder="District" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            </div>
                </div>
        </div>
    );
};

export default Address;