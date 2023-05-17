import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import AddressEdit from '../../ProfileDetailsEdit/AddressEdit/AddressEdit';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../contexts/AuthProvider';


const Address = () => {
    const { user } = useContext(AuthContext);
    const [editingAdress, setEditingAdress] = useState(null);
    const { data: student = {}, refetch } = useQuery({
        queryKey: ["adress", user?.uid],
        queryFn: () =>
            fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`).then((res) => res.json()),
    });
    return (
        <div className='poppins'>
            <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
                    Address
                </h1>
                <label
                    onClick={() => setEditingAdress(student)}
                    htmlFor="edit-address-modal">
                    <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
                        <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
                        <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
                    </div>
                </label>
            </div>
            <div className='lg:grid flex lg:flex-row flex-col grid-cols-2'>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-normal text-sm mb-2"
                    >
                        Village
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.village || 'N/A'}</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-normal text-sm mb-2"
                    >
                        Post
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.post || 'N/A'}</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-normal text-sm mb-2"
                    >
                        Thana
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.thana || 'N/A'}</p>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="name"
                        className="block text-[#666666] font-normal text-sm mb-2"
                    >
                        District
                    </label>
                    <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.district || 'N/A'}</p>
                </div>
            </div>
            {editingAdress && (
                <AddressEdit
                    // refetch={refetch}
                    adress={editingAdress}
                    refetch={refetch}
                    setEditingAdress={setEditingAdress}
                ></AddressEdit>
            )}
        </div>
    );
};

export default Address;