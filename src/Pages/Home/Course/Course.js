import React from "react";
import course from "../../../assest/bg-img/BG.png";
import premium from "../../../assest/icon/Vector.png";
import free from "../../../assest/icon/free.png";
import { IoIosArrowForward } from "react-icons/io";
import './Course.css'

const Course = () => {
  return (
    <section
      className="pt-32  pb-[100px]"
      style={{
        background: `url(${course})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="lg:w-[730px] mx-auto px-5 lg-px-0">
        <div className="mx-auto mb-[40px]">
          <h2 className="text-center lg:w-[554px] md:w-[554px] w-[272px] mx-auto text-[#1B1D48] lg:text-[40px] md:text-[40px] text-[24px] font-bold">
            Get started with{" "}
            <span className=" text-[#38A27B]">
              Learn <br /> with Rakib
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-flow-row-dense grid-cols-1 gap-[30px] justify-center items-center">
          <div className="bg-white  course-category h2{
color: #FFFFFF;
}">
            <div className="card hover:bg-[#3D419F] transition  shadow-xl">
              <div className="bg-[#ECECF5] w-[104px] h-[104px] mx-auto rounded-full mt-[32px]">
                <figure className="pt-5">
                  <img src={premium} alt="Shoes" className="rounded-xl" />
                </figure>
              </div>
              <div className="card-body items-center text-centere">
                <h2 className="card-title text-[24px] font-[700] text-[#1B1D48]">
                  Premium Course
                </h2>
                <p className=" text-[#666666]">
                  Office Services, Sweeping Mopping, <br /> Kitchen Cleaning,
                  Cleaning <br /> Emergency Clean up
                </p>

                <div className=" flex justify-center items-center gap-2">
                  <h2 className="text-[16px] font-bold text-[#3D419F] cursor-pointer">
                    Learn More
                  </h2>
                  <IoIosArrowForward className=""></IoIosArrowForward>
                </div>
              </div>
            </div>
          </div>
          <div className="course-category">
            <div className="card  bg-[#FFFFFF] hover:bg-[#3D419F] shadow-xl">
              <div className="bg-[#E2E3F1] w-[104px] h-[104px] mx-auto rounded-full mt-[32px]">
                <figure className=" pt-5">
                  <img src={free} alt="Shoes" className="rounded-xl" />
                </figure>
              </div>
              <div className="card-body  items-center  text-center">
                <h2 className="card-title text-[24px] font-[700] text-[#1B1D48]">Free Course</h2>
                <p className=" text-[#666666]">
                  Office Services, Sweeping Mopping, <br /> Kitchen Cleaning,
                  Cleaning <br /> Emergency Clean up
                </p>
                <div className=" flex justify-center items-center gap-2">
                  <h2 className="text-[16px] font-bold text-[#1B1D48]  cursor-pointer">
                    Learn More
                  </h2>
                  <IoIosArrowForward className=""></IoIosArrowForward>
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
