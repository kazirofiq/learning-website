import React from "react";
import consultancy from "../../../assest/bg-img/Image.png";
import bgRound from "../../../assest/bg-img/bg-round.png";
import forntCon from "../../../assest/bg-img/Frame 37951.png";
import forntsmal from "../../../assest/bg-img/frame-smal.png";
import { Link } from "react-router-dom";

const Consultancy = () => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className="hero lg:pb-[87px] lg:pt-[13px] ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-32 md:mx-[145px] ">
          <div className="lg:text-left text-center">
            {/* <p className='lg:text-lg text-base font-medium text-[#333333]'>About us</p> */}
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold my-4 text-[#38A27B]">
              <span className="text-[#1B1D48]">
                Unlock Your Creativity with <br />Expert Consultation
              </span> By Rakib

            </h1>
            <p className="mt-3 lg:mt-6 md:mt-6 text-sm lg:text-base md:text-base text-[#666666]">
              {/* Expert guidance for designers to jumpstart their careers and{" "}
              <br /> expand their work. Personalized consultations to identify
              strengths,
              <br /> set goals, and develop strategies.{" "} */}
              Get personalized guidance, insights, and strategies for your creativity with our <br />tailored consultation packages
            </p>
            <Link to='/consultetion'>
              <button className="mt-6 lg:mt-10 md:mt-10 px-4 py-2 lg:px-8 lg:py-4 bg-[#3D419F] text-white rounded-xl lg:font-semibold font-normal lg:text-base text-sm">
                See Details
              </button>
            </Link>
          </div>
          {/* <iframe className=" lg:w-1/2 rounded-lg" width="363" height="363" src="https://www.youtube.com/embed/lJ5z7sdFMKo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          <div className="relative">
            <div className="relative">
              <img src={bgRound} alt="group" className="absolute z-[-9999]" />
              <img width="363" height="363" src={consultancy} alt="" />
            </div>
            <img src={forntCon} alt="group" className="absolute z-[9999] top-[45%] md:left-[-85px] left-[-50px]" />
            <img src={forntsmal} alt="group" className="absolute z-[9999] bottom-[-42px] md:right-[-63px] right-[52px]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;