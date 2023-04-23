import React, { useState } from "react";
import rightArrow from "../../../../assest/icon/right arrow.png";
import { Link } from "react-router-dom";
import AboutMeEdit from "../../ProfileDetailsEdit/AboutMeEdit/AboutMeEdit";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
const AboutMe = () => {

  return (
    <div className="lg:mt-[52px] poppins mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
          About Me
        </h1>
        <label htmlFor="my-modal-3">
          <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
            <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
            <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
          </div>
        </label>
      </div>
      <AboutMeEdit />
      <div className="lg:grid flex lg:flex-row flex-col grid-cols-2">
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Name
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">MD. Khalid Hassan Sagor</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="StudentId"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Student Id
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">Web 2026</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="Email"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Email
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">ahnafsagor12@gmail.com</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="Phone"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Phone
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">+99019854724</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="dob"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            D.O.B
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">14-12-2004</p>
        </div>
        <div className="relative mt-3">
          <label
            htmlFor="Gender"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Gender
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">male</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
