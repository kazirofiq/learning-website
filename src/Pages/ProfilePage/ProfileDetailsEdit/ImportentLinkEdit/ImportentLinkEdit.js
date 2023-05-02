import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { AuthContext } from '../../../../contexts/AuthProvider';
const ImportentLinkEdit = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    // console.log(watch("example")); // watch input value by passing the name of it

    const [importantLinkData, setImportantLinkData] = useState({});
    const { behance, pinterest, github, linkedin, personalWebsite, dribbble, userEmail, userUID, _id } = importantLinkData;
    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/important-link/${user?.email}`)
            .then(res => res.json())
            .then(data => setImportantLinkData(data))
    }, [user])

    const onSubmit = data => {
        const { behance, pinterest, github, linkedin, personalWebsite, dribbble } = data;
        if (behance && pinterest && github && linkedin && personalWebsite && dribbble) {
            const allImportantLink = {
                behance: behance,
                pinterest: pinterest,
                github: github,
                linkedin: linkedin,
                personalWebsite: personalWebsite,
                dribbble: dribbble,
                userEmail: user?.email,
                userUID: user?.uid,
            }
            if (userEmail && userUID) {
                fetch(`https://learn-with-rakib.onrender.com/important-link/${_id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(allImportantLink)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.acknowledged) {
                            swal("Success", "Important link updated successfully", "success");
                        }
                    })
                    .catch(err => console.error(err))

            } else {
                fetch("https://learn-with-rakib.onrender.com/important-link", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(allImportantLink)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.acknowledged) {
                            swal("Success", "Important link save successfully", "success");
                            reset();
                        }

                    })
            }
        }




    };

    return (
        <div>
            <input
                type="checkbox"
                id="edit-importent-link-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="relative mx-auto bg-white rounded-[20px]">
                    <label htmlFor="edit-importent-link-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="lg:mt-[52px] poppins mt-4 max-w-[925px] p-5 md:p-2 md:px-6 lg:px-20 lg:pb-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className=''>
                                <div className=''>
                                    <h3 className='text-lg lg:text-2xl font-medium lg:font-semibold leading-7 lg:leading-9 text-[#1B1D48]'>Important Link</h3>
                                    <div className='lg:grid  md:grid flex lg:flex-row flex-col grid-cols-2 gap-x-[20px]'>
                                        <div className='mt-3'>
                                            <label htmlFor="Vill" className='block text-[#666666] font-normal text-sm mb-2'>Behance</label>
                                            <input defaultValue={behance} {...register("behance", { required: true })} type="text" id='Vill' placeholder="Behance Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.behance && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="linkedin" className='block text-[#666666] font-normal text-sm mb-2'>Linkedin</label>
                                            <input defaultValue={linkedin} {...register("linkedin", { required: true })} type="text" id='linkedin' placeholder="Linkedin Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.linkedin && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="dribbble" className='block text-[#666666] font-normal text-sm mb-2'>Dribbble</label>
                                            <input defaultValue={dribbble} {...register("dribbble", { required: true })} type="text" id='dribbble' placeholder="Dribbble Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.dribbble && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="pinterest" className='block text-[#666666] font-normal text-sm mb-2'>Pinterest</label>
                                            <input defaultValue={pinterest} {...register("pinterest", { required: true })} type="text" id='pinterest' placeholder="Pinterest Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.pinterest && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="github" className='block text-[#666666] font-normal text-sm mb-2'>Github</label>
                                            <input defaultValue={github} {...register("github", { required: true })} type="text" id='github' placeholder="Github Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.github && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="personalWebsite" className='block text-[#666666] font-normal text-sm mb-2'>Personal Website</label>
                                            <input defaultValue={personalWebsite} {...register("personalWebsite", { required: true })} type="text" id='personalWebsite' placeholder="Personal Website Link" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                                            {errors.personalWebsite && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-5 lg:mt-8 modal-action'>
                                <input id='edit-importent-link-modal' value="Save" type="submit" className='w-20 border px-2 py-3 bg-[#3D419F] rounded-xl text-white font-semibold cursor-pointer' />
                                {/* <label htmlFor="edit-importent-link-modal" className="btn">Yay!</label> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportentLinkEdit;