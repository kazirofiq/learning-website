import React, { useState } from "react";
import ractangle from "../../assest/resources/rectangle.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";


const Resource = () => {
  const [open, setOpen] = useState("")
  console.log(open)

const handleButton =(value)=>{
    setOpen(value)
  }
 const handleButtonClose =(value) =>{
   setOpen(value)
 }

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
        <div className={` ${open? 'hidden' :`${open}`} text-center pb-10`}>
          <h2 className="text-[#333333] text-3xl  font-bold pb-3">
            Free Resource Download
          </h2>
          <h5 className="text-[#666666] ">
            Explore more than 3,600 FREE template for download without any cost!
          </h5>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-0 md:gap-5">
          <div className={` ${open? `${open}`:'hidden'}  bg-white md:bg-[#F8F8FF] p-5 mb-10 rounded-md md:block`}>
              <div className=" flex justify-end  pb-4 text-2xl md:hidden">
                <ImCross onClick={()=>handleButtonClose("hidden")} />
              </div>
            <div className="flex justify-between items-center border-b-2 pb-3 ">
              <div className="flex justify-start items-center font-bold text-[#333333]">
                <span>
                  <AiOutlineBars className="text-[1.3rem]" />
                </span>
                <span className="pl-2">Filter</span>
              </div>
              <div>
                <BiChevronLeft />
              </div>
              
            </div>
            <div>
              <div className="flex justify-between items-center pb-3  py-3">
                <div className="flex justify-start items-center font-bold text-[#333333]">
                  <span className="">Category</span>
                </div>
                <div>
                  <BiChevronDown />
                </div>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2 ">All Template</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2"> Kdp Interior</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2">Kdp Book Cover</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2">Kdp Book</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2">Vector</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                  <input
                    type="checkbox"/>
                   <span className="pl-2">Others</span>
                </label>
              </div>
 
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
                        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                      </ul>
                      
                    </div>
                    
                  </div>
                </div>
               
              </div>
              <span className="-mt-7 md:hidden">
                        <AiOutlineBars onClick={()=>handleButton("block")} className="text-[3rem] " />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 ">
              {freeResource.map((resource) => (
                <div className=" px-3">
                  <img className="w-full " src={resource.img} alt="" />
                </div>
              ))}
              
            </div>
            <div className="flex justify-center pt-14">
                <button className="px-4 py-2 font-bold text-white bg-[#3D419F] rounded-lg text-center">More</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resource;
