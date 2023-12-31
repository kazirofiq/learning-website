import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import showPwdImg from "../../assest/login-svg/show-password.svg";
import hidePwdImg from "../../assest/login-svg/hide-password.svg";
import "./login.css";
import { AuthContext } from "../../contexts/AuthProvider";
import UpdatePasswordModal from "./UpdatePasswordModal";

const SignIn = () => {

  const { signIn, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [loginError, setLoginError] = useState("");

  const from = location.state?.from?.pathname || '/';
  console.log(from);

  if (user?.email && user?.uid) {
    return navigate("/")
  }
  const handleLogin = data => {
    setLoginError("")
    signIn(data.email, data.password)
      .then(result => {

        navigate(from, { replace: true });

      })
      .catch(err => {
        console.error(err);
        switch (err.message.split("auth/")[1].split(")")[0]) {
          case "user-not-found":
            setLoginError("The user is not registered");
            break;

          case "wrong-password":
            setLoginError("Password is Incorrect");
            break;

          case "too-many-requests":
            setLoginError(err.message.split("(auth/")[0].split(": ")[1]);
            break;

          default:
            setLoginError(err.message);
            break;
        };
      })
  }


  return (
    <div className="bg mb-10 lg:py-[120px] mx-auto flex justify-center items-center">
      <div className="md:h-[372px] bxsh bg-white shadow-2xl w-full  md:w-[398px] lg:p-[24px] p-0 mx-auto flex justify-center items-center">
        <div className="w-full bg-white rounded-xl  py-4 px-8">
          <h2 className="text-[24px] leading-[36px] text-[#1B1D48] pb-[12px] text-center font-bold">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full ">
              <input
                placeholder="Enter your email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
                className=" pad text-black input-bordered w-full max-w-xs outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-center" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="pwd-container text-black w-full mt-4 rounded-full">
              <input
                className=" pad w-full max-w-xs outline-none"
                name="pwd"
                {...register("password", {
                  required: "Password is required"
                })}
                placeholder="Enter Password"
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
              <p className="text-red-600 text-center" role="alert">
                {errors.password?.message}
              </p>
            )}

            {loginError && (
              <p className="text-red-600 text-center" role="alert">
                {loginError}
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
                      <g fill="none" fill-rule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#3D419F"
                          fill-rule="nonzero"
                        >
                          <path
                            className=""
                            d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="label-text text-[12px] text-black font-light">
                    Keep me logged in
                  </span>
                </label>
              </div>
              <div>
                            {/* The button to open modal */}
<label htmlFor="reset-password" className="label label-text-alt link text-[14px] font-medium leading-[21px] no-underline  text-black">Forgot password?</label>
                {/* <label className="label">
                  <Link
                    to="/reset"
                    className="label-text-alt link text-[14px] font-medium leading-[21px] no-underline  text-black"
                  >
                    Forgot password?
                  </Link>
                </label> */}
              </div>
            </div>

            <input
              className="lg:w-full w-[288px] h-[51px] font-bold text-[18px] text-white btn bg-[#3D419F] hover:bg-[#3D419F] capitalize"
              type="submit"
              value="Login Securely"
            />

          </form>
          <p className="font-semibold text-[16px] leading-[24px] text-[#666666] mt-[16px] text-center">
            New User?{" "}
            <Link className="text-[#3D419F]" to="/signup">
              Create new account
            </Link>
          </p>
        </div>
      </div>
      <UpdatePasswordModal />
    </div>
  );
};

export default SignIn;