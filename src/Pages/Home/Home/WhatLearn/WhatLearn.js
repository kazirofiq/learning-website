import React from "react";
import "./WhatLearn.css";
import ai from "../../../../assest/what-learn/ai.png";
import Amazon from "../../../../assest/what-learn/amajon.png";
import Freepik from "../../../../assest/what-learn/Freepik.png";
import Fiverrr from "../../../../assest/what-learn/fiverr.png";
import circle_1 from "../../../../assest/what-learn/circle-1.png";
import circle_2 from "../../../../assest/what-learn/circle-2.png";
import circle_3 from "../../../../assest/what-learn/circle-3.png";
import circle_4 from "../../../../assest/what-learn/circle-4.png";

const WhatLearn = () => {
  const whatlearns = [
    {
      circle: circle_1,
      icon: ai,
      heading: "Adobe Illustrtor",
      text: "Create art that speaks volumes. Design logos, illustrations, and graphics with precision and creativity using Adobe's industry-leading vector graphics software.",
    },
    {
      circle: circle_2,
      icon: Amazon,
      heading: "KDP",
      text: "KDP Self-publishing made easy! Create, publish, and sell your own books on Amazon with Kindle Direct Publishing. Share your creativity with the world and reach users worldwide!",
    },
    {
      circle: circle_3,
      icon: Fiverrr,
      heading: "Fiverr",
      text: "Unlock your freelance potential. Find gigs, showcase your skills, and earn money doing what you love. Join the global community of freelancers on Fiverr today!",
    },
    {
      circle: circle_4,
      icon: Freepik,
      heading: "Freepik",
      text: "Freepik is your design marketplace. Sell your creative assets and reach millions of potential customers. Join the community of talented sellers on Freepik and monetize your designs!",
    },
  ];
  return (
    <section className="bg-[#FFFFFF] lg:pb-[75px]">
      <div className="lg:pt-14 lg:mx-[145px] mx-[52px]">
        <h2 className="text-center text-[24px] lg:text-4xl md:text-4xl  font-bold py-5 text-[#1B1D48]">
          What You will <span style={{ color: "#38A27B" }}>learn?</span>
        </h2>

        <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-4 mt-12">
          {whatlearns.map((whatlearn, index) => (
            <div key={index}>
              <div className="text-center">
                <div className="flex justify-center items-center">
                  <div className="circleIcon">
                    <img className="circle " src={whatlearn.circle} alt="" />

                    <div className="glass-card">
                      <img className="" src={whatlearn.icon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h2 className=" text-2xl mt-[27px] font-bold text-[#1B1D48]">
                    {whatlearn.heading}
                  </h2>
                  <p className="lg:w-[250px] text-[#666666] w-[255px] mt-[17px] mx-auto">
                    {whatlearn.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatLearn;
