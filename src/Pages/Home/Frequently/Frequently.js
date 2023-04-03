import React from "react";
import thinginglg from '../../../assest/bg-img/Image1.png';
import thingingsm from '../../../assest/bg-img/Image2.png'

import './Frequently.css'

const Frequently = () => {
  return (
    <div className="mt-[86px] bg-[#F7F7FE]">
      <h2 className="text-center lg:w-[554px] md:w-[554px] w-[216px] mx-auto pt-[30px]  lg:pt-[70px] font-bold text-[#1B1D48] lg:text-[40px] md:text-[40px] text-[24px]">
        Frequently Asked  <span className="text-[#38A27B]">Question</span>{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-[30px]  lg:h-[686px]  lg:px-[115px] mx-auto">
        <div className="text-start">
          <section className="dark:text-gray-100  lg:w-[540px]">
            <div className="container justify-between flex flex-col  px-4 py-8 mx-auto md:p-8">
              <div className="space-y-4 lg:w-[540px] md:w-[540px] w-[328px] mx-auto">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  className="collapse collapse-arrow faq-box-shadow border bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
                  className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
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
        <div className="lg:w-full">
          <img className="hidden lg:block mr-0" src={thinginglg} alt="" />
          <img className="block lg:hidden mx-auto pb-[61px]" src={thingingsm} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frequently;
