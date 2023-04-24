import React from 'react';

const AddressEdit = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="edit-address-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="relative mx-auto bg-white rounded-[20px]">
                        <label htmlFor="edit-address-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className="lg:mt-[52px] poppins mt-4 max-w-[925px] p-5 md:p-2 md:px-6 lg:px-20 lg:pb-10">
                            <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
                                Address
                            </h1>
                            <div className='lg:grid md:grid flex lg:flex-row flex-col grid-cols-2 gap-x-[20px]'>
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
                            <div className='flex justify-center items-center mt-5 lg:mt-8'>
                                <button className='w-20 border px-2 py-3 bg-[#3D419F] rounded-xl text-white font-semibold'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressEdit;