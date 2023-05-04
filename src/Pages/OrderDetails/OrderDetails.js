import React, { useContext, useEffect, useState } from "react";
import "./OrderDetails.css";
// import styled from 'styled-components'
import { AiTwotoneStar } from "react-icons/ai";
import graphics_banner from "../../assest/OrderDetails/graphics_banner.png";
import { Link, useSearchParams } from "react-router-dom";
import SuccesModal from "../Modal/SuccesModal/SuccesModal";
import { AuthContext } from "../../contexts/AuthProvider";

const OrderDetails = () => {
  const { user } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [coupon, setCoupon] = useState({});
  const [searchParams] = useSearchParams();

  const toggleChecked = e => {
    setIsChecked(e.target.checked);
  }

  const handleCoupon = e => {
    e.preventDefault();
    const couponId = e.target.couponId.value;
    fetch(`https://learn-with-rakib.onrender.com/coupons/?couponId=${couponId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCoupon(data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    setIsSuccess(searchParams.get("status"));
    fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`)
      .then(res => res.json())
      .then(data => setIsPaid(data.paidPremium))
      .catch(err => console.error(err))
  }, [searchParams, setIsSuccess, user]);

  return (
    <section className=" bg-[#F8F8FF]">
      <div className="max-w-[1110px] mx-auto py-[7.5rem]">
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
                    KDP Mastery:
                    <span className="text-[#38A27B]"> The Complete Guide to<br />Self-Publishing on Amazon</span>
                  </h6>
                  <p className="text-[#777777]">
                    Rakib Ahmed{" "}
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
                <p>৳15000</p>
              </div>
              {/* <div className="flex justify-between  text-[1rem] text-[#333333]">
                <p>Discount</p>
                <p>-৳5000</p>
              </div> */}
              <h5 className="text-[#1B1D48] font-bold text-xl pt-4 pb-3">
                Coupon
              </h5>
              <form onSubmit={handleCoupon} className="coupon">
                <div className="form-control  ">
                  <div className="input-group h-12 ">
                    <input name="couponId" type="text" className="input " />
                    <button type="submit" className="btn  apply-button">apply</button>
                  </div>
                </div>
              </form>
              {
                coupon?.discount && <div className="flex justify-between mt-4 text-[1rem] text-[#333333]">
                  <p>Discount</p>
                  <p>-৳{10000 * Number(coupon?.discount) / 100}</p>
                </div>
              }
              <div className="flex justify-between text-xl font-bold py-6 text-[#606280] ">
                <p>Total amount</p>
                {
                  coupon?.discount ? <p>৳{15000 - (15000 * Number(coupon?.discount) / 100)}</p> : <p>৳15000</p>
                }
              </div>
              {
                isPaid ? "" : <div className="text-[#1B1D48] flex gap-2 items-start mb-4">
                  <input id="agreement" type="checkbox" className="checkbox checkbox-primary" onChange={toggleChecked} />
                  <label htmlFor="agreement" className="label-text text-[13px] text-black font-light mt-1s">I accept all the <Link className="text-blue-600" to="/termsAndCondition">terms</Link>, <Link className="text-blue-600" to="/privacyPolicy">privacy policy</Link> and <Link className="text-blue-600" to="/refund">refund</Link></label>
                </div>
              }
              <div>
                {
                  isPaid ? <label htmlFor="my-modal-3">
                    <button className=" w-full bg-[#a2a6fd] rounded-xl text-white py-3 font-semibold cursor-default">
                      {" "}
                      Already Enrolled
                    </button>
                  </label> :
                    isChecked && user?.uid ? <Link to={`https://learn-with-rakib.onrender.com/payment/?uid=${user?.uid}&couponId=${coupon?.value}`}>
                      <label htmlFor="my-modal-3">
                        <button className=" w-full bg-[#3D419F] rounded-xl text-white py-3 font-semibold ">
                          {" "}
                          Continue Payment
                        </button>
                      </label>
                    </Link> : <label htmlFor="my-modal-3">
                      <button className=" w-full bg-[#a2a6fd] rounded-xl text-white py-3 font-semibold cursor-default">
                        {" "}
                        Continue Payment
                      </button>
                    </label>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      {
        searchParams.get("status") === "success" && <SuccesModal
          isChecked={isSuccess}
          setIsChecked={setIsSuccess}
          linkTo="/mycourses"
        />
      }
    </section>
  );
};

export default OrderDetails;
