import React from 'react';
import './PricingCategory.css'

const PricingCategory = () => {
    return (
        <div className='py-[42px] bg-[#F8F8FF]' id="PricingCategory">
            <div className="px-[20px] lg:px-[145px]">
                <div className="mx-auto">
                    <div className="max-w-2xl mx-auto mb-11 text-center text-[#191D23]">
                        <span className="font-bold text-[40px] leading-[48px]">Our Pricing Plan</span>
                        <h2 className="pt-[5px] text-lg font-semibold leading-[27px]">Choose a plan that’s right for you</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch  mx-auto">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                            <div className="flex flex-col mb-4 md:mb-5 lg:mb-0 p-6 pricing-card lg:mr-[15px]">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-base leading-[24px] font-normal">Basic</h4>
                                    <span className="text-[32px] leading-[48px] font-bold">$250</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[50px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Length</h5>
                                        <p >20 MIN</p>
                                    </li>
                                    <li className="flex  items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Topic</h5>
                                        <p >KDP</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6 pb-6">
                                        <h5> &#x2022; Video</h5>
                                        <p>Yes</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6">
                                        <h5>&#x2022; Record</h5>
                                        <p>Yes</p>
                                    </li>
                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto mt-4">Choose Plan</button>
                            </div>
                            <div className="flex flex-col mb-4 md:mb-5 lg:mb-0 p-6 lg:mx-[15px] pricing-card">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-base leading-[24px] font-normal">PREMIUM</h4>
                                    <span className="text-[32px] leading-[48px] font-bold">$550</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[50px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Length</h5>
                                        <p >20 MIN</p>
                                    </li>
                                    <li className="flex  items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Topic</h5>
                                        <p >KDP</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6 pb-6">
                                        <h5> &#x2022; Video</h5>
                                        <p>Yes</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6">
                                        <h5>&#x2022; Record</h5>
                                        <p>Yes</p>
                                    </li>
                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto mt-4">Choose Plan</button>
                            </div>
                            <div className="flex flex-col mb-4 md:mb-5  lg:mb-0 p-6 lg:ml-[15px]  pricing-card">
                                <div className="space-y-2 price-category text-center text-[#666666]">
                                    <h4 className="text-base leading-[24px] font-normal">DIAMOND</h4>
                                    <span className="text-[32px] leading-[48px] font-bold">$750</span>
                                </div>
                                <ul className="flex-1 mb-6 px-[50px] text-[#333333] pt-6">
                                    <li className="flex items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Length</h5>
                                        <p >20 MIN</p>
                                    </li>
                                    <li className="flex  items-center justify-between  text-base font-semibold
                             leading-6 pb-6">
                                        <h5>&#x2022; Topic</h5>
                                        <p >KDP</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6 pb-6">
                                        <h5> &#x2022; Video</h5>
                                        <p>Yes</p>
                                    </li>
                                    <li className="flex  items-center justify-between text-base font-semibold
                             leading-6">
                                        <h5>&#x2022; Record</h5>
                                        <p>Yes</p>
                                    </li>
                                </ul>
                                <button type="button" className="text-[#666666] text-sm leading-[21px] font-semibold pricing-card-button mx-auto mt-4">Choose Plan</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingCategory;