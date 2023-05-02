import React, { useState } from 'react';
import StudentTable from '../StudentTable/StudentTable';
import right_arrow from '../../../assest/student_dashboard/Vector.png'

const LeaderBoard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Kdp Mastery");

    const items = ["Kdp Mastery", "UI/UX Design", "Animation", "UI/UX"];

    const toggleSelect = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <section>
            <div className='w-[558.85px] custom_shadow  mt-[40px]'>
                <div className='flex justify-between mx-6 pt-3'>
                    <div>
                        <p className='poppins font-semibold text-[18px] text-[#1B1D48] leading-[27px]'>Leader Board</p>
                    </div>
                    <div >
                        <div className="relative">
                            <button
                                type="text"
                                id=""
                                className="input gap-2 w-[123px] h-[26px] rounded-[20px] shadow-none bg-[#E2E3F1] flex items-center focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
                                aria-haspopup="listbox"
                                aria-expanded={isOpen}
                                onClick={toggleSelect}
                            >
                                <span className="block truncate text-left text-[#3D419F] poppins font-normal text-[12px] leading-[18px]">
                                    {selectedItem}
                                </span>
                                <span className="absolute inset-y-0 right-[9px] flex items-center pr-2 pointer-events-none">
                                    <img
                                        className={isOpen ? "rotate-90" : ""} style={{ width: 6 }}
                                        src={right_arrow}
                                        alt=""
                                    />
                                </span>
                            </button>
                            {isOpen && (
                                <div className="flex justify-end bg-[#E2E3F1]">
                                    <ul
                                        className="absolute mt-1 custom_shadow w-[123px] bg-[#FFFFFF] max-h-40 overflow-auto z-10"
                                        tabindex="-1"
                                        role="listbox"
                                        aria-labelledby="listbox-label"
                                        aria-activedescendant="listbox-item-3"
                                    >
                                        {items.map((item) => (
                                            <li
                                                key={item}
                                                className={`${selectedItem === item
                                                    ? "poppins font-normal text-[12px] leading-[18px]  text-[#333333] px-4 border-b py-[7px]"
                                                    : "font-semibold text-[#666666] poppins text-[12px] leading-[18px] px-4 border-b py-[7px]"
                                                    } cursor-pointer select-none relative`}
                                                onClick={() => handleItemClick(item)}
                                            >
                                                <div className="flex items-center">
                                                    <span
                                                        className={`${selectedItem === item
                                                            ? "font-semibold"
                                                            : "font-normal"
                                                            } block truncate`}
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <StudentTable></StudentTable>
            </div>

        </section>
    );
};

export default LeaderBoard