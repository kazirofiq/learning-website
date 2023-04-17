import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import AddressEdit from '../../ProfileDetailsEdit/AddressEdit/AddressEdit';

const Address = () => {
    return (
        <div className='poppins'>
            <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
                    Address
                </h1>
                <label htmlFor="edit-address-modal">
                    <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
                        <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
                        <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
                    </div>
                </label>
            </div>
            <AddressEdit />
            <div className='lg:grid flex lg:flex-row flex-col grid-cols-2'>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-semibold text-sm mb-2"
                    >
                        Village
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Rangpur,newzummapara</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-semibold text-sm mb-2"
                    >
                        Post
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Rangpur,5400</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-semibold text-sm mb-2"
                    >
                        Thana
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Kotoali</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-semibold text-sm mb-2"
                    >
                        District
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Rangpur,Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Address;