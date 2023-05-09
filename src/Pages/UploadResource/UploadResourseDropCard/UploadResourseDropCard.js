import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import driveIcon from "../../../assest/icon/Cloud-upload.png";
import zipIconRed from "../../../assest/icon/zip 2.png";
import Cross from "../../../assest/icon/Cross-red.png";
import imgIcon from "../../../assest/icon/image_vector.png";
import checkedIcon from "../../../assest/icon/Checked Square.png";
import Buttons from "../../CreateCourse/Buttons/Buttons";
const UploadResourseDropCard = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="bg-[#F8F8FF] w-full rounded-xl" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]">
              <img src={driveIcon} alt="" />
              <div className="mt-3">
                <p className="font-semibold text-sm text-[#333333]">
                  Drop the files here ...
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]">
              <img src={driveIcon} alt="" />
              <div className="mt-3">
                <p className="font-semibold text-sm text-[#333333]">
                  Drag & Drop image or{" "}
                  <span className="text-[#3D419F] font-normal cursor-pointer">
                    Browse
                  </span>
                </p>
                <p className="font-light text-xs text-[#666666]">
                  Video, Pdf or Text file (max. 2.0 GB)
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img className="w-10 h-10 mr-[6px]" src={zipIconRed} alt="" />
                  <div className="mt-[18px]">
                    <h3 className="font-normal text-base text-[#E8291D]">
                      Upload failed, try again
                    </h3>
                    <p className="mt-[2px] text-[#E8291D] font-light text-xs">
                      Graphic Design Bootcamp.Mp4
                    </p>
                    <p className="text-base font-normal text-[#E8291D]">
                      Try again
                    </p>
                  </div>
                </div>
                <img className="cursor-pointer" src={Cross} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px] mt-4">
                <div>
                  <div className="rounded-xl mt-3">
                    <div className="flex items-center">
                      <img
                        className="w-[26px] h-[26px] mr-[5px]"
                        src={imgIcon}
                        alt=""
                      />
                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#333333] font-normal text-base">
                          Kdp Interior Book Cover.Jpg
                        </p>
                        <img src={checkedIcon} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-[31px]">
                      <span className="text-[#666666] font-light text-xs">
                        5 MB
                      </span>
                      <div className="flex items-center">
                        <progress
                          className="progress w-[410px] bg-[#E1F1EB] mr-3 progress-secondary"
                          value="100"
                          max="100"
                        ></progress>
                        <span className="text-[#333333] font-normal text-base">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Buttons
          setRoute={"/admindashboard/course-create/faq"}
          text={"Publish"}
        />
      </div>
    </div>
  );
};

export default UploadResourseDropCard;
