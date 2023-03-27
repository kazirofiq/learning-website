import React from "react";
import course from "../../../assest/bg-img/BG.png";
import premium from "../../../assest/icon/Vector.png";
import free from "../../../assest/icon/free.png";
import { IconName, IoIosArrowForward } from "react-icons/io";

const Course = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${course})`,

      }}
    >
      <div className="lg:w-[730px] mx-auto">
        <div className="mx-auto mb-[40px]">
          <h2 className="text-center text-[#1B1D48] text-[40px] font-bold">
            Get started with{" "}
            <span className=" text-[#38A27B]">
              Learn <br /> with Rakib
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-flow-row-dense grid-cols-1 gap-[30px] justify-center items-center">
          <div className="">
            <div className="card  bg-[#3D419F] shadow-xl">
              <div className="bg-[#ECECF5] w-[104px] h-[104px] mx-auto rounded-full mt-[32px]">
                <figure className="pt-5">
                  <img src={premium} alt="Shoes" className="rounded-xl" />
                </figure>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[24px] font-[700] text-[#FFFFFF]">
                  Premium Course
                </h2>
                <p className="text-[#ECECF5] ">
                  Office Services, Sweeping Mopping, <br /> Kitchen Cleaning,
                  Cleaning <br /> Emergency Clean up
                </p>

                <div className=" flex justify-center items-center gap-2">
                  <h2 className="text-[16px] font-bold text-white cursor-pointer">
                    Learn More
                  </h2>
                  <IoIosArrowForward className="text-white"></IoIosArrowForward>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-[#FFFFFF] shadow-xl">
              <div className="bg-[#E2E3F1] w-[104px] h-[104px] mx-auto rounded-full mt-[32px]">
                <figure className=" pt-5">
                  <img src={free} alt="Shoes" className="rounded-xl" />
                </figure>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[24px] font-[700] text-[#1B1D48]">Free Course</h2>
                <p className="text-[#666666] ">
                  Office Services, Sweeping Mopping, <br /> Kitchen Cleaning,
                  Cleaning <br /> Emergency Clean up
                </p>
                <div className=" flex justify-center items-center gap-2">
                  <h2 className="text-[16px] font-bold text-[#3D419F] cursor-pointer">
                    Learn More
                  </h2>
                  <IoIosArrowForward className="text-[#3D419F]"></IoIosArrowForward>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
