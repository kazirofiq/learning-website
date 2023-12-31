import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-toast';

const AddressEdit = ({ adress, setEditingAdress, refetch }) => {
    const { user } = useContext(AuthContext);
    const handleUpdate = e => {
        e.preventDefault()
        fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                village: e.target.village.value,
                post: e.target.post.value,
                thana: e.target.thana.value,
                district: e.target.district.value,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                window.location.reload()
                setEditingAdress(null);
                refetch();
                toast.success(`${e.village} is update successfully`);

            })

            .catch(err => console.error(err))

    }
    return (
        <form onSubmit={handleUpdate}>
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
                                    <input
                                        defaultValue={adress.village}
                                        name='village'
                                        type="text"
                                        id='Vill'
                                        placeholder="Village"
                                        className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="Post" className='block text-[#666666] font-normal text-sm mb-2'>Post</label>
                                    <input
                                        defaultValue={adress.post}
                                        name='post' type="text" id='Post' placeholder="Post" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                </div>
                                <div className='mt-3'>
                                    <label

                                        htmlFor="Thana" className='block text-[#666666] font-normal text-sm mb-2'>Thana</label>
                                    <input
                                        defaultValue={adress?.thana}
                                        name='thana' type="text" id='Thana' placeholder="Thana" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="District" className='block text-[#666666] font-normal text-sm mb-2'>District</label>
                                    <input
                                        defaultValue={adress.district}
                                        name='district' type="text" id='District' placeholder="District" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-5 lg:mt-8'>
                                <input
                                    className="cursor-pointer  px-3 py-2 rounded-lg bg-[#3D419F] text-white font-semibold"
                                    type="submit"
                                    value="Save"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddressEdit;