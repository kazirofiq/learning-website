import React, { useState, useEffect } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import premium from '../../assest/icon/premium.png'
import "./Resource.css"
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import ResourceDetails from "./ResourceDetails/ResourceDetails";
import { useQuery } from "react-query";

const Resource = () => {
  const [open, setOpen] = useState("");
  const [catWiseResource, setCatWiseResource] = useState("");

  const [singleResourch, setSingleResource] = useState({});
  const [search, setSearch] = useState("");

  const { data: allresouces = [], refetch } = useQuery({
    queryKey: ["resources", catWiseResource],
    queryFn: () =>
      fetch(`https://learn-with-rakib.onrender.com/resource/${catWiseResource}`).then((res) =>
        res.json()
      ),
  });

  //handle single Resourch
  const handleSingleResource = (resource) => {
    return setSingleResource(resource);
  };

  //category sorting data
  const handleCateforySorting = (categoryId) => {
    setCatWiseResource(categoryId);
  };
  const handleLicenseString = (licenseId) => {
    setCatWiseResource(licenseId);
  };
  const handleButton = (value) => {
    setOpen(value);
  };
  const handleButtonClose = (value) => {
    setOpen(value);
  };
  const categorys = [
    {
      categoryName: "All Template",
      categoryId: "11111",
    },
    {
      categoryName: "Kdp Interior",
      categoryId: "11112",
    },

    {
      categoryName: "Kdp Book Cover",
      categoryId: "11114",
    },
    {
      categoryName: "Kdp Book",
      categoryId: "11115",
    },
    {
      categoryName: "Vector",
      categoryId: "11116",
    },
    {
      categoryName: "Others",
      categoryId: "11117",
    },
  ];
  const licenses = [
    {
      categoryName: "Premium",
      categoryId: "10001",
    },
    {
      categoryName: "Free",
      categoryId: "10002",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#F8F8FF] py-[1rem] md:py-[7.5rem] px-4 md:px-0">
      <div className=" max-w-[1110px] mx-auto ">
        <div className={` ${open ? "hidden" : `${open}`} text-center pb-10`}>
          <h2 className="text-[#333333] text-3xl  font-bold pb-3">
            Free Resource Download
          </h2>
          <h5 className="text-[#666666] ">
            Explore more than {allresouces.length} FREE template for download without any cost!
          </h5>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-0 md:gap-5">
          <div
            className={` ${open ? `${open}` : "hidden"
              }  bg-white md:bg-[#F8F8FF] p-5 mb-10 rounded-md md:block`}
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
                <li
                  tabIndex={0}
                  className="relative border-b-2  md:border-b-0 "
                >
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
                      className="my-1 z-50 flex flex-col  transition-opacity bottom-[] w-full "
                    >
                      {categorys.map((category) => (
                        <div>
                          <div className="form-control py-1">
                            <label
                              onClick={() =>
                                handleCateforySorting(`${category.categoryId}`)
                              }
                              className="cursor-pointer  flex items-center text-[#666666] text-[14px]"
                            >
                              <input type="checkbox" />
                              <span className="pl-2">
                                {" "}
                                {category.categoryName}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}


                    </nav>
                  </details>
                </li>
                <li tabIndex={0} className="relative   ">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg  py-2 text-gray-500 hover:text-gray-700">
                      <span className="text-[#333333] text-base  font-bold">
                        {" "}
                        Licence
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
                      {licenses.map((license) => (
                        <div>
                          <div className="form-control">
                            <label
                              onClick={() =>
                                handleLicenseString(`${license.categoryId}`)
                              }
                              className="cursor-pointer  flex items-center text-[#666666] text-[14px]"
                            >
                              <input type="checkbox" />
                              <span className="pl-2">
                                {license.categoryName}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
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
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search "
                      className="input bg-[#F8F8FF] text-[#333] h-8 md:h-12 focus:outline-none"
                    />

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 ">
              {allresouces
                .filter((resource) => {
                  return search.toLocaleLowerCase() === ""
                    ? resource
                    : resource.title.toLocaleLowerCase().includes(search);
                })
                .map((resource) => (
                  <label
                    onClick={() => handleSingleResource(resource)}
                    htmlFor="my-modal-3"
                    className="cursor-pointer"
                  >
                    <div className="relative resource-title">
                      <img
                        className="w-full h-[200px] rounded-md resource-image"
                        src={resource.imgThumbnail}
                        alt=""
                      />
                      <div className="overly"></div>
                      <div className="flex items-center absolute top-[16px] left-[28px]">
                        {
                          resource?.licence === "Premium"
                            ? <img
                              className="z-30"
                              src={premium}
                              alt="premiumIcon"
                            />
                            :
                            ""
                        }

                        <p className="text-xs font-normal pl-[6px] text-white opacity-0">
                          {resource.title}
                        </p>
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
      <ResourceDetails singleResourch={singleResourch}>
        {refetch()}
      </ResourceDetails>
    </section>
  );
};

export default Resource;