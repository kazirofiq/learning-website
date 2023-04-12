import React from "react";
import "./OrderDetails.css";
// import styled from 'styled-components'
import { AiTwotoneStar } from "react-icons/ai";
import graphics_banner from "../../assest/OrderDetails/graphics_banner.png";
import bkash from "../../assest/OrderDetails/bkash.png";
import nagad from "../../assest/OrderDetails/nagad.png";
import visa from "../../assest/OrderDetails/visa.png";

// const MainContainer = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 0 15px;
// `

// const StepContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 70px;
//   position: relative;
//   :before {
//     content: '';
//     position: absolute;
//     background: red;
//     border: 2px solid gray;
//     height: 4px;
//     width: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//     left: 0;
//   }
//   :after {
//     content: '';
//     position: absolute;
//     background: #4a154b;
//     height: 4px;
//     width: 33%;
//     top: 50%;
//     transition: 0.4s ease;
//     transform: translateY(-50%);
//     left: 0;
//   }
// `

// const StepWrapper = styled.div`
//   position: relative;
//   z-index: 1;

// `

// const StepStyle = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color:#1B1D48 ;
//   border: 3px solid #f3e7f3;
//   transition: 0.4s ease;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const StepCount = styled.span`
//   font-size: 19px;
//   color: #f3e7f3;

// `

// const StepsLabelContainer = styled.div`
//   position: absolute;
//   top: 66px;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `

// const StepLabel = styled.span`
//   font-size: 19px;
//   color: #4a154b;

// `

// const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 0 -15px;
//   margin-top: 100px;
// `

// const ButtonStyle = styled.button`
//   border-radius: 4px;
//   border: 0;
//   background: #4a154b;
//   color: #ffffff;
//   cursor: pointer;
//   padding: 8px;
//   width: 90px;
//   :active {
//     transform: scale(0.98);
//   }
//   :disabled {
//     background: #f3e7f3;
//     color: #000000;
//     cursor: not-allowed;
//   }
// `

// const steps = [
//   {
//     label: 'Address',
//     step: 1,
//   },
//   {
//     label: 'Shipping',
//     step: 2,
//   },
//   {
//     label: 'Payment',
//     step: 3,
//   },
//   {
//     label: 'Summary',
//     step: 4,
//   },
// ]

const OrderDetails = () => {
  return (
    <section className=" bg-[#F8F8FF]">
      <div className="max-w-[1110px] mx-auto py-[7.5rem]">
        {/* <MainContainer>
      <StepContainer>
        {steps.map(({ step, label }) => (
          <StepWrapper>
            <StepStyle>
              <StepCount>{step}</StepCount>
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle>Previous</ButtonStyle>
        <ButtonStyle>Next</ButtonStyle>
      </ButtonsContainer>
    </MainContainer> */}
        <div className="md:w-[844px] mx-auto  ">
          <hr className="dashed-line ml-8  mr-10 " />
          <div className="flex justify-between -mt-4 px-4 mb-11">
            <div className="flex-col md:w-100 justify-center  items-center">
              <div className="bg-[#1B1D48] text-white text-center rounded-full h-7 w-7 ml-1">
                1
              </div>
              <h5 className="text-[#1B1D48] font-semibold">Login</h5>
            </div>
            <div className="flex-col justify-center  items-center">
              <div className="bg-[#1B1D48] text-white text-center rounded-full h-7 w-7 ml-7">
                2
              </div>
              <h5 className="text-[#1B1D48] font-semibold">Select Course</h5>
            </div>
            <div className="flex-col justify-center  items-center">
              <div className="bg-[#CACACA] text-white text-center rounded-full h-7 w-7 ml-4">
                3
              </div>
              <h5 className="font-semibold">Payment</h5>
            </div>
          </div>
        </div>

        <h2 className="text-[2rem] text-[#333333] font-bold mx-6 md:mx-0">
          Order Details
        </h2>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
            <div className="col-span-2 mx-6 md:mx-0">
              <div className="bg-white  md:flex   items-center  p-8 rounded-lg">
                <div className=" flex  justify-center items-center">
                  <img src={graphics_banner} alt="graphics_banner" />
                </div>
                <div className=" px-6 ">
                  <h6 className="font-bold text-[1.25rem] text-[#333333]">
                    Graphic Design Bootcamp:
                    <br />{" "}
                    <span className="text-[#38A27B]">
                      Photoshop, Illustrator, InDesign
                    </span>
                  </h6>
                  <p className="text-[#777777]">
                    Rakib Mahmud{" "}
                    <span>
                      <AiTwotoneStar className="inline  text-orange-500" />
                      <AiTwotoneStar className="inline  text-orange-500" />
                      <AiTwotoneStar className="inline  text-orange-500" />
                      <AiTwotoneStar className="inline  text-orange-500" />
                      <AiTwotoneStar className="inline  text-orange-500" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 mx-6 md:mx-0">
              <h2 className="text-[#1B1D48] font-bold text-xl pb-4 ">
                Payment Method
              </h2>

              <div className="flex justify-between text-[1rem] text-[#333333]">
                <p>Course Price</p>
                <p>$500.00</p>
              </div>
              <div className="flex justify-between  text-[1rem] text-[#333333]">
                <p>Discount</p>
                <p>-$150.00</p>
              </div>
              <h5 className="text-[#1B1D48] font-bold text-xl pt-4 pb-3">
                Coupon
              </h5>
              <div className="coupon">
                <div className="form-control  ">
                  <div className="input-group h-12 ">
                    <input type="text" className="input " />
                    <button className="btn  apply-button">apply</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold py-6 text-[#1B1D48] ">
                <p>total amount</p>
                <p>-$350.00</p>
              </div>

              <div className="form-control h-20 flex-row justify-start items-center shadow rounded-xl p-6 mb-5">
                <label className="label cursor-pointer pr-6 ">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-[#1B1D48]"
                  />
                </label>
                <img className="payment-logo " src={bkash} alt="blash" />
              </div>
              <div className="form-control h-20 flex-row justify-start items-center shadow rounded-xl p-6 mb-5 ">
                <label className="label cursor-pointer pr-6 ">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-[#1B1D48]"
                  />
                </label>
                <img className="payment-logo " src={nagad} alt="blash" />
              </div>
              <div className="form-control h-20 flex-row justify-start items-center shadow rounded-xl p-6 mb-6">
                <label className="label cursor-pointer pr-6 ">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-[#1B1D48]"
                  />
                </label>
                <img className="payment-logo " src={visa} alt="blash" />
              </div>
              <div>
                <button className=" w-full bg-[#3D419F] rounded-xl text-white py-3 font-semibold ">
                  {" "}
                  Payment Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
