import React, { useCallback } from "react";
import { useState } from "react";
import rightArrow from "../../assest/icon/right arrow.png";

import Buttons from "../CreateCourse/Buttons/Buttons";
import { useDropzone } from "react-dropzone";
import driveIcon from "../../assest/icon/Cloud-upload.png";
import draftIcon from "../../assest/icon/Cloud-upload.png";
import continueIcon from "../../assest/icon/Cloud-upload.png";
import zipIconRed from "../../assest/icon/zip 2.png";
import Cross from "../../assest/icon/Cross-red.png";
import imgIcon from "../../assest/icon/image_vector.png";
import checkedIcon from "../../assest/icon/Checked Square.png";
import { toast } from "react-hot-toast";

const imgbbKey = process.env.REACT_APP_imgbb_key;

const UPloadResource = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLicense, setIsOpenLicense] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedLicenseId, setSelectedLicenseId] = useState("");
  const [selectedItemLicense, setSelectedItemLicense] = useState("Select");

  const [droptImg, setDropImg] = useState([])

  let imgSize = parseInt(droptImg[0]?.size / 1000000)







  // onDrop Npm
  const onDrop = useCallback((acceptedFiles) => {
    setDropImg(acceptedFiles)
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const items = [
    {
      categoryName: "All Template",
      categoryId: "11111"
    },
    {
      categoryName: "Kdp Interior",
      categoryId: "11112"
    },

    {
      categoryName: "Kdp Book Cover",
      categoryId: "11114"
    },
    {
      categoryName: "Kdp Book",
      categoryId: "11115"
    },
    {
      categoryName: "Vector",
      categoryId: "11116"
    },
    {
      categoryName: "Others",
      categoryId: "11117"
    }
  ]
  // const items = ["All Template","Kdp Interior" , "Kdp Book Cover", "Kdp Book", "Vector", "Others"];
  const licenses = [
    {
      categoryName: "Premium",
      categoryId: "10001",

    },
    {
      categoryName: "Free",
      categoryId: "10002",

    }
  ];

  const toggleSelect = () => setIsOpen(!isOpen);
  const toggleSelectOne = () => setIsOpenLicense(!isOpenLicense);

  const handleItemClick = (item, itemId) => {
    console.log(item);
    setSelectedItem(item);
    setSelectedItemId(itemId)
    setIsOpen(false);
  };
  const handleItemLicenceClick = (license, licenseId) => {
    console.log(license);
    setSelectedItemLicense(license);
    setSelectedLicenseId(licenseId)
    setIsOpenLicense(false);
  };


  const handleUploadResource = (e) => {
    e.preventDefault()
    const resourcTitle = e.target.resourcTitle.value
    const resourcDriveLink = e.target.resourcDriveLink.value

    const description = e.target.description.value

    const image = droptImg[0]
    console.log(image)
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {

        if (imgData.success) {
          const post = {
            title: resourcTitle,
            category: selectedItem,
            categoryId: selectedItemId,
            licence: selectedItemLicense,
            licenceId: selectedLicenseId,
            designation: description,
            resourcDriveLink: resourcDriveLink,
            imgThumbnail: imgData.data.url,
            postTime: new Date().toLocaleString()

          }
          fetch(`https://learn-with-rakib.onrender.com/resource`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'

            },
            body: JSON.stringify(post)

          })
            .then(res => res.json())
            .then(result => {
              toast.success('Resource is successfully added!')


            })
        }

      })
    e.target.reset()
  }

  return (
    <div className="mt-[41px] poppins w-[1136px] mx-auto">
      <h1 className="font-semibold text-2xl text-[#1B1D48]">
        Upload New Resource
      </h1>
      <form onSubmit={handleUploadResource}>
        <div className="mt-[18px] bg-[#ffffff] p-6">
          <div>
            <label
              className="label text-[#666666] font-normal text-sm"
              htmlFor="resource-title"
            >
              Resource Title
            </label>
            <input
              required
              name="resourcTitle"
              id="resource-title"
              type="text"
              placeholder="Resource Title"
              className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <label
                htmlFor="Category"
                className="block text-[#666666] font-normal text-sm mb-2"
              >
                Category
              </label>
              <button
                name="category"
                type="input"
                id="Category"
                className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[288px] lg:w-[532px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] relative"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={toggleSelect}
              >
                <span className="block truncate text-left ml-4">
                  {selectedItem}
                </span>
                <span className="absolute inset-y-0 right-[9%] lg:right-[18px] flex items-center pr-2 pointer-events-none">
                  <img
                    className={isOpen ? "rotate-90" : ""}
                    src={rightArrow}
                    alt=""
                  />
                </span>
              </button>
              {isOpen && (
                <div className="flex justify-end">
                  <ul
                    className="absolute mt-1 lg:mr-0 text-right w-[176px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                  >
                    {items.map((item) => (
                      <li
                        key={item.categoryName}
                        className={`${selectedItem === item.categoryName
                            ? "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                            : "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                          } cursor-pointer select-none relative`}
                        onClick={() => handleItemClick(item.categoryName, item.categoryId)}
                      >
                        <div className="flex items-center">
                          <span
                            className={`${selectedItem === item.categoryName
                                ? "font-semibold"
                                : "font-normal"
                              } block truncate`}
                          >
                            {item.categoryName}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="License"
                className="block text-[#666666] font-normal text-sm mb-2"
              >
                License
              </label>
              <button
                type="input"
                id="License"
                className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[288px] lg:w-[532px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] relative"
                aria-haspopup="listbox"
                aria-expanded={isOpenLicense}
                onClick={toggleSelectOne}
              >
                <span className="block truncate text-left ml-4">
                  {selectedItemLicense}
                </span>
                <span className="absolute inset-y-0 right-[9%] lg:right-[18px] flex items-center pr-2 pointer-events-none">
                  <img
                    className={isOpenLicense ? "rotate-90" : ""}
                    src={rightArrow}
                    alt=""
                  />
                </span>
              </button>
              {isOpenLicense && (
                <div className="flex justify-end">
                  <ul
                    className="absolute mt-1 lg:mr-0 text-right w-[176px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                  >
                    {licenses.map((license) => (
                      <li
                        key={license}
                        className={`${selectedItemLicense === license.categoryName
                            ? "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                            : "font-medium text-[#1B1D48] text-base pl-4 mb-4"
                          } cursor-pointer select-none relative`}
                        onClick={() => handleItemLicenceClick(license.categoryName, license.categoryId)}
                      >
                        <div className="flex items-center">
                          <span
                            className={`${selectedItemLicense === license.categoryName
                                ? "font-semibold"
                                : "font-normal"
                              } block truncate`}
                          >
                            {license.categoryName}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label
              className="label text-[#666666] font-normal text-sm"
              htmlFor="resource-description"
            >
              Resource Description
            </label>
            <textarea
              required
              name="description"
              className="textarea w-full font-medium text-base placeholder-[#1B1D48] h-[206px] focus:border-[1px] focus:border-[#C3C4E1] focus:outline-none bg-[#F8F8FF] text-[#1B1D48]"
              placeholder="Editable “Wedding Planner Checklist KDP Interior” Download instantly AI with PDF formats ready to upload on KDP Every single part of This Interior (Colors+Fonts+Style+Size) can be edited with Adobe Illustrator Software"
            ></textarea>
          </div>
          <div>
            <label
              className="label text-[#666666] font-normal text-sm"
              htmlFor="resource-title"
            >
              Resource drive link
            </label>
            <input
              required
              name="resourcDriveLink"
              id="resource-drive-link"
              type="text"
              placeholder="resource drive link"
              className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
            />
          </div>
          <div className="mt-4">
            <label
              className="label text-[#666666] font-normal text-sm"
              htmlFor="upload-file"
            >
              Upload thumbnail
            </label>
            <div>
              <div className="grid grid-cols-2 gap-x-6">
                <div
                  className="bg-[#F8F8FF] w-full rounded-xl"
                  {...getRootProps()}
                >
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
                        {
                          droptImg[0]
                            ? (
                              <p className="font-light text-xs text-[#666666]">
                                file Name :{droptImg[0]?.name}
                              </p>
                            )
                            :
                            (
                              <p className="font-light text-xs text-[#666666]">
                                Video, Pdf or Text file (max. 2.0 GB)
                              </p>
                            )

                        }

                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="card hidden w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <img
                            className="w-10 h-10 mr-[6px]"
                            src={zipIconRed}
                            alt=""
                          />
                          <div className="mt-[18px]">

                            <h3 className="font-normal text-base text-[#E8291D]">
                              Upload failed, try again
                            </h3>
                            <p className="mt-[2px] text-[#E8291D] font-light text-xs">
                              {droptImg[0]?.name}
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
                  {
                    droptImg[0]?.name
                      ?
                      <>
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
                                        {
                                          droptImg[0]?.name
                                        }
                                      </p>


                                      <img src={checkedIcon} alt="" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-[31px]">



                                    <span className="text-[#666666] font-light text-xs">
                                      {
                                        imgSize
                                      }MB
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
                      </>
                      :
                      <>
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
                                        {
                                          droptImg[0]?.name
                                        }
                                      </p>


                                      <img src={checkedIcon} alt="" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-[31px]">



                                    <span className="text-[#666666] font-light text-xs">
                                      {
                                        imgSize || 0
                                      }MB
                                    </span>
                                    <div className="flex items-center">
                                      <progress
                                        className="progress w-[410px] bg-[#fff] mr-3 progress-accent"
                                        value="0"
                                        max="100"
                                      ></progress>
                                      <span className="text-[#333333] font-normal text-base">
                                        0%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                  }
                </div>
              </div>
              <div className="my-8">
                <div className="flex items-center justify-center gap-x-5 mt-8 mb-8">
                  <button className="text-[#333333] hidden border-[1px] border-[#333333] w-[179px] h-[48px] rounded-[10px] flex items-center justify-center">
                    <img className="mr-[13px]" src={draftIcon} alt="" />
                    Save as Draft
                  </button>

                  <button type="submit" className="text-[#FFFFFF] bg-[#3D419F] border-[1px] w-[202px] h-[48px] rounded-[10px] flex items-center justify-center">
                    Publish
                    <img className="ml-[13px]" src={continueIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UPloadResource;
