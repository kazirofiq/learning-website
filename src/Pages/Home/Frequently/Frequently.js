import React from "react";
import frequently from "../../../assest/bg-img/Image1.png";
import fr_mobile from "../../../assest/bg-img/Image2.png";
import thinkimg from '../../../assest/icon/Image.png'

const Frequently = () => {
  return (
    <div className="mt-[86px] pb-[100px] bg-[#F7F7FE]">
      <h2 className="text-center lg:w-[554px] md:w-[554px] w-[216px] mx-auto lg:pt-[70px] font-bold text-[#1B1D48] lg:text-[40px] md:text-[40px] text-[24px]">
        Frequently Asked  <span className="text-[#38A27B]">Question</span>{" "}
      </h2>
      <div className=" lg:flex justify-start items-center lg:px-[115px] mx-auto">
        <div className="lg:-mr-40 text-start">
          <section className="dark:text-gray-100  lg:w-[540px]">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <div className="space-y-4 lg:w-[540px] md:w-[540px] w-[328px] mx-auto">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-[#FFFFFF] rounded-box
             hover:bg-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
                >
                  <div className="collapse-title lg:text-[18px] md:text-[18px]  text-[16px] font-medium">
                    What is This App?
                  </div>
                  <div className="collapse-content">
                    <p className="">
                      tabIndex={0} Lisque persius interesset his et, in quot
                      quidam persequeris vim, ad mea essent possim iriure. Mutat
                      tacimates
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
                >
                  <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium">
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
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300  bg-[#FFFFFF] rounded-box hover:bg-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
        <div className="lg:w-full w-99">
          <img className="" src={thinkimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frequently;
