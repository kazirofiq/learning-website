import React from "react";
import { Link } from "react-router-dom";

const SendNotificationModal = ({ setEditingClient }) => {
  return (
    <>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form >
              <div className=" flex justify-start items-center gap-2">
                <h2 className="text-[#333333] text-[14px]">To:</h2>
                <input type="text" className="input w-full max-w-xs" />
              </div>
              <ul >
                <li tabIndex={0} className="relative border-b-2  md:border-b-0 ">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg  py-2 text-gray-500 hover:text-gray-700">
                      <span className="text-[#1B1D48] text-base  font-bold">
                        {" "}
                        Kdp course’s student ,Kdp course’s student,
                      </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav
                      aria-label="Account Nav"
                      className="my-1 absolute bg-[#fff] shadow-md w-[200px] right-0 rounded-xl p-2 text-right z-50 flex flex-col  transition-opacity bottom-[]   "
                    >
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">

                          <span className="pl-2"> All Course’s Student</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <span className="pl-2"> Amazon Kdp course</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <span className="pl-2"> Ui/Ux Design course </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <span className="pl-2"> Animation</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                          <span className="pl-2">UI/UX</span>
                        </label>
                      </div>
                    </nav>
                  </details>
                </li>
              </ul>
              <div >
                <div className="form-control">
                  <label className="label text-[#333333] bg-[#F8F8FF]">
                    Message
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-[164px] bg-[#F8F8FF] resize-none text-[#333333]"
                    placeholder=""
                    defaultValue="Some awesome resource will be added the course Curriculam.Hope we’ll learn some good techniques
                  Cheers,Mondol vai"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4 items-center">
                <button className=" px-2 rounded-md w-[81px] p-2 border-2 bor text-[#666666]">Cancel</button>
                <button className="bg-[#3D419F] px-2 p-2 rounded-md w-[81px] text-white">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendNotificationModal;
