import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import rating from '../../../assest/learner_review/Vector.png'
import Reviews from '../Reviews/Reviews';
// import './AllReviews.css'


const AllReviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setIsOpen(false);
        setSelectedOption(value);
        console.log(value);
    };

    const options = [
        "Kdp Course Review",
        "Workshop Review",
        "Consultency Review"
    ];

    return (
        <div className='lg:mx-[145px] mx-[20px] md:mx-[30px] mt-[40px] lg:mt-[96px] md:mt-[90px]'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[#333333] font-semibold lg:font-bold text-[24px] lg:text-[32px] md:text-[28px] leading-[32px] lg:leading-[40px]'>Reviews</h2>
                <div>
                    <div className="dropdown dropdown-bottom border px-[10px] lg:px-[24px] md:px-5 py-[12px] lg:py-5 md:py-4 rounded-xl">
                        <label
                            tabIndex={0}
                            className="cursor-pointer flex items-center"
                        >
                            <span className="text-[#333333] capitalize font-medium text-sm leading-[21px] w-[100px] lg:w-[100px]" onClick={toggling}>
                                {selectedOption || "Highest Rated"}
                            </span>{" "}
                            <BiChevronDown className='text-[#333333] ml-2' />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content w-[140px] lg:w-[179px] h-[111px] font-normal text-sm leading-[21px] rounded-[10px] border border-[#3D419F] bg-[#FFFFFF]"
                        >
                            <li>
                                {options.map(option => (
                                    <span className='text-[#333333] hover:bg-[#ECECF5] h-[36px] py-2 px-6 rounded-[10px]' onClick={onOptionClicked(option)} key={Math.random()}>
                                        {option}
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-[#1B1D48] font-semibold lg:font-bold text-[20px] leading-[30px] mt-[20px] lg:mt-[32px] md:mt-[26px]'>Total Review <span className='text-[#666666]'>(500 Rating)</span></h3>
            </div>
            <div>
                <div className=' w-full lg:h-[276px] h-[336px] poppins rounded-2xl lg:shadow-xl lg:shadow-[#dfe0fd] md:shadow-xl md:shadow-[#dfe0fd]'>
                    <div className='lg:grid md:grid lg:grid-cols-[1fr_2fr] items-center justify-between lg:mx-[32px] lg:py-[48px] md:mx-[26px] md:py-[48px] mx-0 py-0 lg:gap-x-[50px] md:gap-x-[40px] h-full'>
                        <div className='pb-5 pl-0 lg:pl-8 md:pt-14 pt-0 grid justify-center'>
                            <p className='text-center lg:text-start text-[#333333] text-[56px] lg:text-[80px] leading-[84px] lg:leading-[120px] font-bold poppins whitespace-nowrap'>5 .0</p>
                            <div className='flex gap-3 items-center'>
                                <img src={rating} alt="" className='' />
                                <img src={rating} alt="" className='' />
                                <img src={rating} alt="" className='' />
                                <img src={rating} alt="" className='' />
                                <img src={rating} alt="" className='' />
                                <p className='text-[#666666] text-center lg:text-start text-sm lg:text-base leading-[21px] lg:leading-6 whitespace-nowrap'> (15 Ratings)</p>
                            </div>
                        </div>

                        <div className='ml-4'>
                            <div className='grid md:grid-cols-[100px_1fr_100px] grid-cols-[100px_1fr_30px] mt-2 gap-3   items-center justify-between poppins'>
                                <div>
                                <p className='font-normal text-[14px] lg:text-base md:text-base text-[#333333] leading-[21px]'>Excellent</p>
                                </div>
                                <div>
                                <progress className="progress progress-primary  bg-[#C3C4E1]  lg:w-[450px] md:w-[350px] h-[6px] lg:h-[10px] md:h-[8px] " value="70" max="100"></progress>
                                </div>
                                <div>
                                <p className='lg:ml-5 ml-2 md:ml-3'>70%</p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-[100px_1fr_100px] grid-cols-[100px_1fr_30px] mt-2 gap-3   items-center justify-between poppins'>
                                <div>
                                <p className='font-normal text-[14px] lg:text-base md:text-base text-[#333333] leading-[21px]'>Very Good</p>
                                </div>
                                <div>
                                <progress className="progress progress-primary  bg-[#C3C4E1]  lg:w-[450px] md:w-[350px] h-[6px] lg:h-[10px] md:h-[8px] " value="20" max="100"></progress>
                                </div>
                                <div>
                                <p className='lg:ml-5 ml-2 md:ml-3'>20%</p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-[100px_1fr_100px] grid-cols-[100px_1fr_30px] mt-2 gap-3   items-center justify-between poppins'>
                                <div>
                                <p className='font-normal text-[14px] lg:text-base md:text-base text-[#333333] leading-[21px]'>Average</p>
                                </div>
                                <div>
                                <progress className="progress progress-primary  bg-[#C3C4E1]  lg:w-[450px] md:w-[350px] h-[6px] lg:h-[10px] md:h-[8px] " value="3" max="100"></progress>
                                </div>
                                <div>
                                <p className='lg:ml-5 ml-2 md:ml-3'>3%</p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-[100px_1fr_100px] grid-cols-[100px_1fr_30px] mt-2 gap-3   items-center justify-between poppins'>
                                <div>
                                <p className='font-normal text-[14px] lg:text-base md:text-base text-[#333333] leading-[21px]'>Excellent</p>
                                </div>
                                <div>
                                <progress className="progress progress-primary  bg-[#C3C4E1]  lg:w-[450px] md:w-[350px] h-[6px] lg:h-[10px] md:h-[8px] " value="2" max="100"></progress>
                                </div>
                                <div>
                                <p className='lg:ml-5 ml-2 md:ml-3'>2%</p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-[100px_1fr_100px] grid-cols-[100px_1fr_30px] mt-2 gap-3   items-center justify-between poppins'>
                                <div>
                                <p className='font-normal text-[14px] lg:text-base md:text-base text-[#333333] leading-[21px]'>Poor</p>
                                </div>
                                <div>
                                <progress className="progress progress-primary  bg-[#C3C4E1]  lg:w-[450px] md:w-[350px] h-[6px] lg:h-[10px] md:h-[8px] " value="0" max="100"></progress>
                                </div>
                                <div>
                                <p className='lg:ml-5 ml-2 md:ml-3'>0%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews />
        </div>
    );
};

export default AllReviews;