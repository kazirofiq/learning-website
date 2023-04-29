import React from 'react';
import { useState } from 'react';
import rightArrow from "../../assest/icon/right arrow.png";
import UploadResourseDropCard from './UploadResourseDropCard/UploadResourseDropCard';
const UPloadResource = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Select");
  
    const items = ["Male", "Female", "Other"];
  
    const toggleSelect = () => setIsOpen(!isOpen);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
    return (
        <div className='mt-[41px] poppins w-[1136px] mx-auto'>
            <h1 className='font-semibold text-2xl text-[#1B1D48]'>Upload New Resource</h1>
            <div className='mt-[18px] bg-[#ffffff] p-6'>
            <div>
            <label className="label text-[#666666] font-normal text-sm" htmlFor='resource-title'>Resource Title</label>
            <input id='resource-title' type="text" placeholder="Resource Title" className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
        </div>
       <div className='flex justify-between items-center mt-4'>
       <div>
        <label
            htmlFor="Category"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Category
          </label>
          <button
            type="input"
            id="Category"
            className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[288px] lg:w-[532px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] relative"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={toggleSelect}
          >
            <span className="block truncate text-left ml-4">
              {selectedItem}
            </span>
            <span className="absolute inset-y-0 right-[9%] lg:right-[18px] flex items-center pr-2 pointer-events-none">
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
                className="absolute mt-1 lg:mr-0 text-right w-[176px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className={`${
                      selectedItem === item
                        ? "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                        : "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                    } cursor-pointer select-none relative`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-center">
                      <span
                        className={`${
                          selectedItem === item
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
        <div>
        <label
            htmlFor="License"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            License
          </label>
          <button
            type="input"
            id="License"
            className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[288px] lg:w-[532px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] relative"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={toggleSelect}
          >
            <span className="block truncate text-left ml-4">
              {selectedItem}
            </span>
            <span className="absolute inset-y-0 right-[9%] lg:right-[18px] flex items-center pr-2 pointer-events-none">
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
                className="absolute mt-1 lg:mr-0 text-right w-[176px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className={`${
                      selectedItem === item
                        ? "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                        : "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                    } cursor-pointer select-none relative`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-center">
                      <span
                        className={`${
                          selectedItem === item
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
       <div className='mt-4'>
            <label className="label text-[#666666] font-normal text-sm" htmlFor='resource-description'>Resource  Description</label>
            <textarea className="textarea w-full font-medium text-base placeholder-[#1B1D48] h-[206px] focus:border-[1px] focus:border-[#C3C4E1] focus:outline-none bg-[#F8F8FF] text-[#1B1D48]" placeholder="Editable “Wedding Planner Checklist KDP Interior” Download instantly AI with PDF formats ready to upload on KDP Every single part of This Interior (Colors+Fonts+Style+Size) can be edited with Adobe Illustrator Software"></textarea>
        </div>
        <div className='mt-4'>
            <label className="label text-[#666666] font-normal text-sm" htmlFor='upload-file'>Upload File</label>
            <div>
                <UploadResourseDropCard />
            </div>
        </div>
            </div>
        </div>
    );
};

export default UPloadResource;