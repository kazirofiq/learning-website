import React, { useState } from "react";
import rightArrow from "../../../../assest/icon/right arrow.png";
const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");

  const items = ["Male", "Female", "Other"];

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="lg:mt-[52px] poppins mt-4">
      <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
        About Me
      </h1>
      <div className="lg:grid flex lg:flex-row flex-col grid-cols-2">
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="StudentId"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Student Id
          </label>
          <input
            type="text"
            id="StudentId"
            placeholder="Student Id"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="Email"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            placeholder="Email"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="Phone"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Name
          </label>
          <input
            type="number"
            id="Phone"
            placeholder="Phone"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="dob"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            D.O.B
          </label>
          <input
            type="date"
            id="dob"
            placeholder="Name"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
          />
        </div>

        {/* select field */}
        <div className="relative mt-3">
          <label
            htmlFor="Gender"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Gender
          </label>
          <button
            type="input"
            id="Gender"
            className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={toggleSelect}
          >
            <span className="block truncate text-left ml-4">
              {selectedItem}
            </span>
            <span className="absolute inset-y-0 right-[9%] lg:right-[18px] mt-[9%] lg:mt-[7%] flex items-center pr-2 pointer-events-none">
              <img
                className={isOpen ? "rotate-90" : ""}
                src={rightArrow}
                alt=""
              />
            </span>
          </button>
          {isOpen && (
            <div className="flex justify-end">
              <ul
                className="absolute mt-1 lg:mr-0 text-right w-[81px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className={`${selectedItem === item
                      ? "font-medium text-[#1B1D48] text-base pl-4"
                      : "font-medium text-[#1B1D48] text-base pl-4"
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
  );
};

export default AboutMe;
