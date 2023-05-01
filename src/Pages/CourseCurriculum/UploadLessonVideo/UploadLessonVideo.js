import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadImgIcon from "../../../assest/icon/Cloud-upload.png";
import redVideoIcon from "../../../assest/icon/video-camera-red.png";
import redCross from "../../../assest/icon/Cross-red.png";
import Cross from "../../../assest/icon/Cross.png";
import videoIcon from "../../../assest/icon/video-camera.png";

const UploadLessonVideo = ({ lesson, setLessons }) => {
    const [videoStatus, setVideoStatus] = useState(0);
    const [videoFileInfo, setVideoFileInfo] = useState("");
    const [videoError, setVideoError] = useState("");
    const [isVideoUploading, setIsVideoUploading] = useState(false);
    const [isVideoUploaded, setIsVideoUploaded] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [uploadError, setUploadError] = useState("");

    useEffect(() => {
        fetch("https://learn-with-rakib.onrender.com/reviews", {
            method: "POST",
            body: JSON.stringify([{
                name: "sk"
            }, {
                name: "robin"
            }])
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles[0].type.split("/")[0] !== "video") {
            setVideoError("Please select only video files");
            return;
        }

        setIsVideoUploading(true);
        setVideoError("");
        setUploadError("");
        setVideoFileInfo(acceptedFiles[0]);
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        fetch("https://learn-with-rakib.onrender.com/videos", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.statusCode === 201) {
                    const time = (new Date()).getTime();
                    setVideoId(data.videoId)
                    // setLessons
                    checkStatus(data.videoId, time);
                }
            })
            .catch(err => {
                setIsVideoUploading(false);
                setUploadError(err.message)
                console.error(err)
            })
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const checkStatus = (id, time) => {
        if (id) {
            const checkInterval = setInterval(() => {
                fetch(`https://learn-with-rakib.onrender.com/videos/status/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        const percent = parseInt(((new Date()).getTime() - time) * 100 * 10000 / data.upload_time)
                        const status = data.status === "ready" ? 100 : percent > 99 ? 99 : percent;
                        if (data.status === "ready") {
                            clearInterval(checkInterval);
                            setIsVideoUploading(false);
                            setIsVideoUploaded(true);
                        }
                        setVideoStatus(status);
                    })
            }, 3000);
        }
    }

    return (
        <div className='mt-4'>
            <label
                htmlFor="Upload-File"
                className="block text-[#666666] font-normal text-sm mb-2"
            >
                Upload File
            </label>
            <div className='grid grid-cols-2 gap-x-6'>
                {
                    isVideoUploading ? <div className='bg-[#F8F8FF] flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                        <img src={UploadImgIcon} alt="" />
                        <div className='mt-3'>
                            <p className='font-semibold text-sm text-[#333333]'>Uploading ...</p>
                        </div>
                    </div> : isVideoUploaded ? <div className='bg-[#F8F8FF] flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                        <img src={UploadImgIcon} alt="" />
                        <div className='mt-3'>
                            <p className='font-semibold text-sm text-[#333333]'>Uploaded</p>
                        </div>
                    </div> :
                        <div className='bg-[#F8F8FF] w-[420px] rounded-xl' {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                                        <img src={UploadImgIcon} alt="" />
                                        <div className='mt-3'>
                                            <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
                                        </div>
                                    </div>

                                    :

                                    <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                                        <img src={UploadImgIcon} alt="" />
                                        <div className='mt-3'>
                                            <p className='font-semibold text-sm text-[#333333]'>Drag & Drop video or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                                            <p className='font-light text-xs text-[#666666]'>Video, Pdf or Text file (max. 2.0 GB)</p>
                                        </div>
                                    </div>
                            }
                        </div>
                }
                {
                    uploadError && <div>
                        <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <img className='w-10 h-10 mr-[6px]' src={redVideoIcon} alt="" />
                                        <h3 className='font-normal text-base text-[#E8291D]'>Upload failed, try again</h3>
                                    </div>
                                    <img className='cursor-pointer' src={redCross} alt="" />
                                </div>
                                <div className='ml-[46px]'>
                                    <p className='font-light text-xs text-[#E8291D]'>{videoFileInfo?.name}</p>
                                    <h2 className='font-normal text-base text-[#E8291D]'>Try again</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    isVideoUploading && <div>
                        <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <img className='w-10 h-10 mr-[6px]' src={videoIcon} alt="" />
                                        <h3 className='font-normal text-base text-[#333333]'>{videoFileInfo?.name}</h3>
                                    </div>
                                    <img className='cursor-pointer' src={Cross} alt="" />
                                </div>
                                <div className='ml-[46px]'>
                                    <span className='font-light text-xs text-[#666666]'>{(videoFileInfo?.size / 1048576).toFixed(2)} MB</span>
                                    <div className='flex items-center'>
                                        <progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value={videoStatus} max="100"></progress>
                                        <span className='text-[#333333] font-normal text-base'>{videoStatus}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                videoError && <p className='text-red-600 text-center font-semibold'>{videoError}</p>
            }
        </div>
    );
};

export default UploadLessonVideo;