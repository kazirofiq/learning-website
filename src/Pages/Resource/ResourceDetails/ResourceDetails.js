import React from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useContext } from "react";
import "./ResourceDetails.css";
import { Link } from "react-router-dom";
import premium from "../../../assest/icon/premium.png"
import downloadIcon from "../../../assest/amazing_resource/Vector.png";

import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const ResourceDetails = ({ singleResourch }) => {
  const { user } = useContext(AuthContext);
  const fileId = singleResourch.fileId


  // database user and login user matching query
  const {
    data: downlimit = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["downlimit"],
    queryFn: () =>
      fetch(
        `https://learn-with-rakib.onrender.com/downLimit/downloadDate?downloadDate=${today}&&userEmail=${user?.email}`
      ).then((res) => res.json()),
  });

  const { data: loginUser = {} } = useQuery({
    queryKey: ["loginUser"],
    queryFn: () =>
      fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`).then((res) => res.json()),
  });

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <ClipLoader color="#0000ff" size="50" />
      </div>
    );
  }
  const downloadLimitHandler = (e) => {
    const post = {
      downloadStatus: "1",
      userEmail: user.email,
      UserUid: user?.uid,
      downloadDate: today,
    };

    if (downlimit?.downloadStatus === "2") {
      refetch();
      return toast.error("You have reached today's download limit!");
    } else if (downlimit?.downloadStatus === "1") {
      fetch(`https://learn-with-rakib.onrender.com/downLimit/${downlimit?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ downloadStatus: "2" }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged && result.modifiedCount > 0) {
          }
        });
    } else {
      fetch(`https://learn-with-rakib.onrender.com/downLimit/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((result) => {

        });
    }
  };


  return (
    <div>
      <div>
        {/* The button to open modal */}
        {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal px-5 lg:px-0">
          <div className="relative mx-auto bg-white rounded-[20px]">
            <label
              htmlFor="my-modal-3"
              className="btn-lg text-[#666666] absolute right-[-5px] lg:right-[0px] lg:py-0 pt-[3px] lg:top-[30px]"
            >
              ✕
            </label>
            <div class="overflow-hidden   shadow-2xl md:grid md:grid-cols-3 max-w-[925px] lg:p-8 rounded-[20px]">
              <div class="col-span-2">
                <div className="relative">
                  <img
                    src={singleResourch.imgThumbnail}
                    alt="Boat"
                    class="w-[31.75rem] first-letter:rounded-t-lg pt-[32px] lg:pt-0 md:rounded-l-lg md:rounded-t-none mr-0"
                  />
                  <div className="flex items-center absolute top-[40px] left-[40px]">
                    {
                      singleResourch?.licence === "Premium"
                        ? <img
                          className="z-30"
                          src={premium}
                          alt="premiumIcon"
                        />
                        :
                        ""
                    }
                  </div>
                </div>
                {/* 
                <div className="flex items-end pt-2 px-[20px] lg:px-0">
                  <p className="text-sm font-normal text-[#666666] leading-[21px]">
                    Share:{" "}
                  </p>
                  <div className="flex gap-1 ml-2">
                    <Link>
                      <img src={FB} alt="" />
                    </Link>
                    <Link>
                      <img src={TW} alt="" />
                    </Link>
                    <Link>
                      <img src={INSTA} alt="" />
                    </Link>
                  </div>
                </div> */}
                <div className="w-full lg:w-[861px] text-left px-[20px] lg:pb-8 lg:px-0">
                  <h2 className="text-2xl font-bold text-[#333333] leading-9 pt-[4px] lg:pt-6">
                    {singleResourch.title}
                  </h2>
                  <p className="text-base text-[#666666] font-normal leading-6 pt-3">
                    {" "}
                    {singleResourch.designation}{" "}
                  </p>
                </div>
              </div>
              <div className=" lg:h-[112px] py-[20px] px-[20px] lg:px-0 text-white lg:-ml-[38px] pt-12 lg:pt-[100px]">
                <h2 class="mb-2 font-normal text-center lg:text-left mx-auto lg:mx-0 text-xs lg:text-base text-[#333333] leading-6">
                  {singleResourch.licence} Download this template, used and
                  enjoy CHEERS
                </h2>
                {user?.uid ? (
                  singleResourch?.licence === "Premium" &&
                    !loginUser?.paidPremium ? (
                    <>
                      {console.log(!loginUser?.paidPremium)}
                      <Link to="/premium_course">
                        <button

                          className="download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3"
                        >
                          Download{" "}
                          <img
                            className="text-white pl-3"
                            src={downloadIcon}
                            alt="downloadIcon"
                          />
                        </button>
                      </Link>
                    </>
                  ) : downlimit?.downloadStatus === "2" ? (
                    <Link onClick={() => downloadLimitHandler()} disabled>
                      <button typeof="submit">
                        <span className="download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3">
                          Download
                          <img
                            className="text-white pl-3"
                            src={downloadIcon}
                            alt="downloadIcon"
                          />
                        </span>
                      </button>
                    </Link>
                  ) : (
                    <>
                      <a
                        onClick={() => downloadLimitHandler()}
                        href={`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${process.env.REACT_APP_DRIVE_KEY}`}
                        download={singleResourch.title}

                      >
                        <button typeof="submit">
                          <span className="download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3">
                            Download
                            <img
                              className="text-white pl-3"
                              src={downloadIcon}
                              alt="downloadIcon"
                            />
                          </span>
                        </button>
                      </a>
                    </>
                  )
                ) : (
                  <Link to="/login">
                    <a href={`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${process.env.REACT_APP_DRIVE_KEY}`}>
                      <button className="download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3">
                        Download{" "}
                        <img
                          className="text-white pl-3"
                          src={downloadIcon}
                          alt="downloadIcon"
                        />
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;