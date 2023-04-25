import React from 'react';
import './PricingCategory.css'
import { RxCheckCircled } from "react-icons/rx";

const PricingCategory = () => {
    return (
        <div className='lg:pt-[36px] lg:pb-[64px] lg:bg-[#F8F8FF]' id="PricingCategory">
            <div className="px-[20px] lg:px-[145px]">
                <div className="mx-auto">
                    <div className="max-w-2xl mx-auto mb-7 lg:mb-11 text-center text-[#191D23]">
                        <span className="font-semibold text-xl lg:text-[40px] leading-[30px] lg:leading-[48px]">Our Pricing Plan</span>
                        <h2 className="pt-[5px] text-sm lg:text-lg font-normal leading-[21px] lg:leading-[27px]">Choose a plan that’s right for you</h2>
                    </div>
                    <div className="">
                        <div className=" mx-auto grid grid-cols-1 lg:gap-4 lg:grid-cols-3">
                            <div className="flex flex-col mb-4 md:mb-5 lg:mb-0 p-6 pricing-card max-w-[300px] lg:mr-[15px]">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-lg leading-[27px] font-normal">Basic</h4>
                                    <span className="text-[40px] leading-[60px] font-bold">$250</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[20px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 pb-[20px] border-b px-[20px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Length</h5>
                                        <p >20 MIN</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[20px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Topic</h5>
                                        <p >KDP</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[20px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Video</h5>
                                        <p >Yes</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[20px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Record</h5>
                                        <p >Yes</p>
                                    </li>

                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto">Choose Plan</button>
                            </div>
                            <div className="flex flex-col mb-4 md:mb-5 lg:mb-0 p-6 pricing-card max-w-[300px] lg:mr-[15px]">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-lg leading-[27px] font-normal">PREMIUM</h4>
                                    <span className="text-[40px] leading-[60px] font-bold">$500</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[20px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 pb-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Length</h5>
                                        <p >40 MIN</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Topic</h5>
                                        <p >KDP+Fiverr</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Video</h5>
                                        <p >Yes</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Record</h5>
                                        <p >Yes</p>
                                    </li>

                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto">Choose Plan</button>
                            </div>
                            <div className="flex flex-col mb-4 md:mb-5 lg:mb-0 p-6 pricing-card max-w-[300px] lg:mr-[15px]">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-lg leading-[27px] font-normal">DIAMOND</h4>
                                    <span className="text-[40px] leading-[60px] font-bold">$750</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[8px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 pb-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Length</h5>
                                        <p >20 MIN</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px] mr-1'><RxCheckCircled /></span> Topic</h5>
                                        <p >KDP+Fiverr+Other</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Video</h5>
                                        <p >Yes</p>
                                    </li>
                                    <li className="flex items-center justify-between  text-base font-medium
                             leading-6 py-[20px] border-b px-[8px]">
                                        <h5 className='flex items-center'><span className='pr-[5px]'><RxCheckCircled /></span> Record</h5>
                                        <p >Yes</p>
                                    </li>

                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto">Choose Plan</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingCategory;