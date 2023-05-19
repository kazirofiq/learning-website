import React from "react";
import frequently from "../../../assest/bg-img/Image1.png";
import thinkimg from "../../../assest/bg-img/Image2.png";
// import thinkimg from '../../../assest/icon/Image2.png'

const Frequently = () => {
  return (
    <div className="mt-[86px] mb-10 bg-[#F7F7FE]">
      <h2 className="text-center mx-auto pt-[30px]  lg:pt-[96px] font-bold text-[#1B1D48] lg:text-[40px] md:text-[40px] text-[24px]">
        Frequently Asked  <span className="text-[#38A27B]">Question</span>{" "}
      </h2>
      <section
        class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center md:px-[145px] py-5 mb-8"
      >
        <div className="md:px-0 px-[20px]">
          <div class=" flex items-center mb-5">
            <div className="">
              <section className="dark:text-gray-100">
                <div className="justify-between flex flex-col">
                  <div className="space-y-4">
                    <div
                      tabIndex={0}
                      className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                        What is KDP and how can it help me publish my book?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          KDP, or Kindle Direct Publishing, is a self-publishing platform by Amazon that allows authors to publish and sell their books. Learn With Rakib provides expert classes on KDP, helping you unlock your publishing success.
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
                        What does Learn With Rakib offer?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Learn With Rakib offers premium paid courses on KDP for in-depth learning, as well as free resources on our website, including vectors, packages, fonts, free classes on youtube and more, to enhance your creative projects
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
                        Who is Rakib?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Rakib is a trusted mentor with extensive experience in self-publishing on Kindle. He is passionate about helping authors achieve success in their publishing journey.
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
                        How can I access the premium course?
                      </div>
                      <div className="collapse-content bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          You can easily access the premium paid course on Learn With Rakib's website by enrolling and gaining instant access to valuable lessons, insights, and strategies for mastering KDP.
                        </p>
                      </div>
                    </div>
                    {/* <div
                      tabIndex={0}
                      className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                        Are the free resources on Learn With Rakib's website helpful for my creative projects?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Yes, absolutely! Learn With Rakib's website offers a wealth of free resources, including vectors, packages, fonts, and more, to enhance your creative projects and add a professional touch to your work
                        </p>
                      </div>
                    </div> */}
                    <div
                      tabIndex={0}
                      className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-box
                  hover:bg-[#3D419F] hover:border-[#3D419F] hover:text-white focus:outline-none focus:text-white focus:bg-[#3D419F] active:bg-[#3D419F] text-[#666666]"
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:bg-[#3D419F] peer-checked:text-white">
                        Can I trust Rakib's expertise in teaching KDP?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Yes, Rakib is a trusted mentor with extensive experience in self-publishing on Kindle. His courses and resources are designed to provide practical and valuable guidance for authors aspiring to succeed on KDP. You can watch his free classes on his youtube channel.
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
                        Is KDP suitable for first-time authors?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Yes, KDP is a great platform for first-time authors as it provides an easy and accessible way to self-publish and sell books on Kindle. Learn With Rakib's courses can help you navigate the process and achieve success.
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
                        What makes Learn With Rakib unique?
                      </div>
                      <div className="collapse-content  bg-[#FFFFFF] text-primary-content peer-checked:bg-[#3D419F] peer-checked:text-white">
                        <p className=" ">
                          Learn With Rakib stands out for its expert guidance, practical insights, and personalized approach to teaching KDP. Rakib's extensive experience and passion for helping authors achieve success make his courses and resources truly unique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="md:ml-[40px] ml-4">
          <div>
            <img className="" src={thinkimg} alt="" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Frequently;
