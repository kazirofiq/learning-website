import React from "react";
import frequently from "../../../assest/bg-img/Image1.png";
import fr_mobile from "../../../assest/bg-img/Image2.png";
import './Frequently.css'

const Frequently = () => {
  return (
    <div
      className="mt-[86px] mb-[100px] bg-[
      #F7F7FE]"
    >
      <h2 className="text-center lg:w-[540px] md:w-[540px] w-[216px] mx-auto  font-bold text-[#1B1D48] lg:text-[40px] md:text-[40px] text-[24px]">
        Frequently Asked <span className="text-[#38A27B]">Question</span>{" "}
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1  justify-center items-center lg:ml-[145px] ">
        <div className="lg:-mr-40 text-start">
          <section className="dark:text-gray-100 lg:mr-[164px] ">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <div className="space-y-4 lg:w-[540px] md:w-[540px] w-[328px] mx-auto">
                <div
                  className="collapse collapse-arrow hvr order bx border-base-300 bg-base-100 rounded-box "
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                    What makes Defferent From Other Available Apps On The App
                    Store?
                  </div>
                  <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                    <p className=" ">
                       attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
                <div
                  className="collapse collapse-arrow hvr order bx border-base-300 bg-base-100 rounded-box "
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                    What makes Defferent From Other Available Apps On The App
                    Store?
                  </div>
                  <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                    <p className=" ">
                       attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
                <div
                  className="collapse collapse-arrow hvr order bx border-base-300 bg-base-100 rounded-box "
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                    What makes Defferent From Other Available Apps On The App
                    Store?
                  </div>
                  <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                    <p className=" ">
                       attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
                <div
                  className="collapse collapse-arrow hvr order bx border-base-300 bg-base-100 rounded-box "
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                    What makes Defferent From Other Available Apps On The App
                    Store?
                  </div>
                  <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                    <p className=" ">
                       attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
                <div
                  className="collapse collapse-arrow hvr order bx border-base-300 bg-base-100 rounded-box "
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                    What makes Defferent From Other Available Apps On The App
                    Store?
                  </div>
                  <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                    <p className=" ">
                       attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:w-full lg:-ml-20 w-99 mx-auto ">
          <img className="lg:block md:block hidden" src={frequently} alt="" />
          <img className="lg:hidden md:hidden block" src={fr_mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frequently;
