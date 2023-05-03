import React, { useState } from 'react';
import menuIcon from "../../../../assest/icon/Menu.png";
import dropdownIcon from "../../../../assest/icon/stv.png";

const QuizQuestions = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg mb-4">
            <div
                className="flex justify-between items-center p-4 cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center w-full'>
                    <img className='mr-4' src={menuIcon} alt="" />
                    <input type="text" placeholder="Question Title" className="input w-[90%] text-[#1B1D48] p-0 h-auto" />
                </div>
                <img className={isOpen ? "rotate-90" : ""} src={dropdownIcon} alt="" />
            </div>
            {isOpen &&
                <div className="px-5 py-4">
                    <div className=''>
                        <label
                            className="block text-[#666666] font-normal text-sm mb-2"
                        >
                            Option
                        </label>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                                <input type="text" placeholder="Option 1" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                                <input type="text" placeholder="Option 2" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                                <input type="text" placeholder="Option 3" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-2" className="radio radio-info mr-2" />
                                <input type="text" placeholder="Option 4" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default QuizQuestions;