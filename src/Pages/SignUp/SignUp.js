import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import login from "../../assest/bg-img/login.png";
import { GrView } from "react-icons/gr";
import { BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import showPwdImg from "../../assest/login-svg/show-password.svg";
import hidePwdImg from "../../assest/login-svg/hide-password.svg";
import "./SignUp.css";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
  const { createUser, updateUser, user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();

  if(user?.email && user?.uid){
    return navigate("/")
  }

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then((result) => {
            console.log(result);
            navigate('/');
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        console.log(error);
      });
  }




  return (
    <div
      className="bgg   LG:w-[1092px] lg:h-[792px]  mb-6 bg-[#fff] lg:mb-0 md:mb-0 lg:w-[1092px]  mx-auto flex justify-center items-center"
    //   style={{ backgroundImage: `url(${login})`

    // }}
    >
      <div className="h-[520px] bg-white bxs mt-[40px] z-50 shadow-slate-500 lg:shadow-none md:shadow-none w-[398px] p-[24px] lg:mt-[26px] md:mt-[26px] lg:ml-[325px] md:ml-[325px] mx-auto flex justify-center items-center">
        <div className="w-96 bg-white rounded-xl  py-4 px-8">
          <h2 className="text-[24px] leading-[36px] text-[#1B1D48] pb-[12px] text-center font-bold">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Your Name is required",
                })}
                className=" pad outline-none text-black bg-white input-bordered w-full max-w-xs "
              />
              {errors.name && (
                <p className="text-red-600" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-4 ">
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "email is required",
                })}
                className=" pad outline-none text-black input-bordered w-full max-w-xs "
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-4 ">
              <input
                type="text"
                placeholder="mobile"
                {...register("number", {
                  required: "Number is required",
                })}
                className=" pad outline-none text-black input-bordered w-full max-w-xs "
              />
              {errors.number && (
                <p className="text-red-600" role="alert">
                  {errors.number?.message}
                </p>
              )}
            </div>

            <div className="pwd-container  w-full mt-4 rounded-full">
              <input
                className=" pad text-black outline-none w-full max-w-xs"
                name="pwd"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required"
                })}
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <img
                alt=""
                className="w-[22px] h-[18px] mt-3 mr-2"
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
            </div>

            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <div className="flex py-[14px] justify-between items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    id="A3-yes"
                    name="A3-confirmation"
                    value="yes"
                    className="opacity-0 absolute h-8 w-8"
                  />
                  <div className="bg-white border-2  border-[#4044A0] w-[16px] h-[16px] flex  flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#4044A0]">
                    <svg
                      className="fill-current hidden w-3 h-3 text-[#3D419F] pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#3D419F"
                          fillRule="nonzero"
                        >
                          <path
                            className=""
                            d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="label-text text-black text-[12px] font-light">
                    I agree to all the{" "}
                    <span className="text-[#333333] font-bold">terms</span> and{" "}
                    <span className="font-bold text-[#333333]">
                      privacy policy
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <input
              className="lg:w-full w-[288px] h-[51px] font-bold text-[18px] text-white btn bg-[#3D419F] hover:bg-[#3D419F] capitalize"
              type="submit"
              value="Create Free account"
            />
          </form>
          <p className="font-semibold text-[16px] leading-[24px] text-[#666666] mt-[16px] text-center">
            All ready have an account{" "}
            <Link className="text-[#3D419F]" to="/login">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;