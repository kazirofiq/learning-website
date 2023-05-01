import { PencilSquareIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import ImportentLinkEdit from '../ProfileDetailsEdit/ImportentLinkEdit/ImportentLinkEdit';
import { useEffect } from 'react';
import { APIContext } from '../../../contexts/ApiProvider';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const ImportentLink = () => {
    const { user } = useContext(AuthContext);
    const [importantLinkData, setImportantLinkData] = useState({});
    console.log(importantLinkData);
    const { behance, pinterest, github, linkedin, personalWebsite, dribbble, userEmail, userUID, _id } = importantLinkData;
    useEffect(() => {
        fetch(`https://learn-with-rakib.onrender.com/important-link/${user?.email}`)
            .then(res => res.json())
            .then(data => setImportantLinkData(data))
    }, [user, importantLinkData])

    return (
        <div className='bg-[#F8F8FF] px-5 lg:px-0 md:px-0 py-8 lg:py-[60px] md:py-[50px]'>
            <div className='bg-[#FFFFFF] w-full max-w-[825px] px-4 lg:mx-0 md:px-5 py-5 lg:my-6 md:py-6 shadow-md rounded-xl'>
                <div className="flex justify-between items-center">
                    <h3 className='text-lg lg:text-2xl font-medium lg:font-semibold leading-7 lg:leading-9 text-[#1B1D48]'>Important Link</h3>
                    <label htmlFor="edit-importent-link-modal">
                        <div className="fimport { AuthContext } from './../../../contexts/AuthProvider';
lex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
                            <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
                            <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
                        </div>
                    </label>
                </div>
                <ImportentLinkEdit />
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Behance</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{behance}</p>
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Linkedin</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{linkedin}</p>
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Dribbble</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{dribbble}</p>
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Pinterest</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{pinterest}</p>
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Github</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{github}</p>
                    </label>
                </div>
                <div className="mt-3 lg:mt-4 md:mt-4">
                    <label className="label">
                        <span className="text-xs lg:text-sm md:text-sm text-[#666666] leading-[18px] lg:leading-[21px] md:leading-[20px]">Personal Website</span>
                    </label>
                    <label className="">
                        <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full h-[48px]">{personalWebsite}</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ImportentLink;