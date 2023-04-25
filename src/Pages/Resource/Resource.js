import React, { useState } from "react";
import ractangle from "../../assest/resources/rectangle.png";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import ResourceDetails from "./ResourceDetails/ResourceDetails";

const Resource = () => {
  const [open, setOpen] = useState("");
  console.log(open);

  const handleButton = (value) => {
    setOpen(value);
  };
  const handleButtonClose = (value) => {
    setOpen(value);
  };

  const freeResource = [
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
    {
      img: ractangle,
    },
  ];

  return (
    <section className="bg-[#F8F8FF] py-[1rem] md:py-[7.5rem] px-4 md:px-0">
      <div className=" max-w-[1110px] mx-auto ">
        <div className={` ${open ? "hidden" : `${open}`} text-center pb-10`}>
          <h2 className="text-[#333333] text-3xl  font-bold pb-3">
            Free Resource Download
          </h2>
          <h5 className="text-[#666666] ">
            Explore more than 3,600 FREE template for download without any cost!
          </h5>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-0 md:gap-5">
          <div className={` ${open ? `${open}` : "hidden"}  bg-white md:bg-[#F8F8FF] p-5 mb-10 rounded-md md:block`}
          >

            <div className="flex justify-between items-center border-b-2 pb-3 ">
              <div className="flex justify-start items-center font-bold text-[#333333]">
                <span>
                  <AiOutlineBars className="text-[1.3rem]" />
                </span>
                <span className="pl-2">Filter</span>
              </div>
              <div className=" flex justify-end   text-xl md:hidden">
                <ImCross onClick={() => handleButtonClose("hidden")} />
              </div>
              <div className=" hidden md:block">
                <BiChevronLeft />
              </div>
            </div>
            <div>
              <ul>
                <li tabIndex={0} className="relative md:hidden border-b-2 ">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg  py-2 text-gray-500 hover:text-gray-700">
                      <span className="text-[#333333] text-base  font-bold">
                        {" "}
                        Sort by{" "}
                      </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav
                      aria-label="Account Nav"
                      className="my-1  flex flex-col   transition-opacity   w-full   "
                    >

                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> Popular</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> Recent</span>
                        </label>
                      </div>


                    </nav>
                  </details>
                </li>
                <li tabIndex={0} className="relative border-b-2  md:border-b-0 ">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg  py-2 text-gray-500 hover:text-gray-700">
                      <span className="text-[#333333] text-base  font-bold">
                        {" "}
                        Category
                      </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav
                      aria-label="Account Nav"
                      className="my-1 z-50 flex flex-col  transition-opacity bottom-[] w-full   "
                    >
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> All Template</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> Kdp Interior</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> Kdp Book Cover</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2"> Kdp Book</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2">Vector</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <input type="checkbox" />
                          <span className="pl-2">Others</span>
                        </label>
                      </div>


                    </nav>
                  </details>
                </li>
              </ul>

            </div>
          </div>
          <div className="col-span-3 ">
            <div className="flex  justify-between items-center">
              <div className="  border mb-7 w-full rounded-lg">
                <div className="form-control  ">
                  <div className="input-group  px-5">
                    <div className="flex justify-center items-center">
                      <AiOutlineSearch className="inline" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search "
                      className="input bg-[#F8F8FF] h-8 md:h-12 focus:outline-none"
                    />

                    <div className="dropdown dropdown-end hidden md:block">
                      <label
                        tabIndex={0}
                        className="btn bg-[#F8F8FF]  focus:outline-none border-0 hover:bg-[#F8F8FF]"
                      >
                        <span className="bg-[#F8F8FF] text-[#666666] p-0  capitalize border-l-2 pl-3">
                          Recent <BiChevronDown className="ml-2" />
                        </span>{" "}
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content p-2 shadow bg-base-100 rounded-sm "
                      >
                        <li>
                          <a>Popular </a>
                        </li>
                        <li>
                          <a>Recent</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <span className="-mt-7 md:hidden">
                <AiOutlineBars
                  onClick={() => handleButton("block")}
                  className="text-[3rem] "
                />
              </span>
            </div>
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-y-6">
              {
                freeResource.map(resource =>
                  <div class="group relative block">
                    <div className='absolute object-cover transition-opacity'>
                      <div className="group-hover:opacity-40">
                        <img className="w-full" src={resource.img} alt=""></img>
                      </div>
                    </div >
                    <div class="p-0 md:p-4 lg:p-4">
                      <div class="mt-32 sm:mt-48 lg:mt-24 flex">
                        <div
                          class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex gap-5"
                        >
                          <a href='/'>
                            <div className='h-5 w-5 rounded-full p-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                          </a>
                          <p class="text-xs text-black">
                            2023 Family Weekly & Monthly kdp interior free download
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 ">
              {freeResource.map((resource) => (
                <label htmlFor="my-modal-3" className="cursor-pointer">
                  <div className=" px-3">
                    <div className="group  rounded-xl">
                      <img className="w-full absolutes object-cover opacity-100 transition-opacity group-hover:opacity-75" src={resource.img} alt="" />
                      {/* <div className="relative">
                        <div className="-mt-20">
                          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p class="text-sm text-black">
                              2023 Family Weekly & Monthly kdp interior free download
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </label>

              ))}
            </div>
            <div className="flex justify-center pt-14">
              <button className="px-4 py-2 font-bold text-white bg-[#3D419F] rounded-lg text-center">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResourceDetails></ResourceDetails>
    </section>
  );
};

export default Resource;
