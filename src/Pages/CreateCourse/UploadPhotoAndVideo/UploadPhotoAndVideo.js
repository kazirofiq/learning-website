import React, { useState } from 'react';
import './UploadPhotoAndVideo.css';
import UploadCoverImg from '../CourseUploadProgress/UploadCoverImg';
import UploadKDPvideo from '../CourseUploadProgress/UploadKDPvideo';
import UploadImgIcon from "../../../assest/icon/uploadPhoto.png";
import UploadVideoIcon from "../../../assest/icon/Video upload.png";
import DragAndDrop from '../DragAndDrop/DragAndDrop';

const UploadPhotoAndVideo = ({ setPromotionVideoId }) => {
  const [videoStatus, setVideoStatus] = useState(0);
  const [videoFileInfo, setVideoFileInfo] = useState("");
  const [videoError, setVideoError] = useState("");
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [cancelVideoUpload, setCancelVideoUpload] = useState(false);

  const [imageStatus, setImageStatus] = useState(0);
  const [imageFileInfo, setImageFileInfo] = useState("");
  const [imageError, setImageError] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);

  const handleUploadImage = files => {
    if (files[0].type.split("/")[0] !== "image") {
      setImageError("Please select only image files");
      return;
    }
    setImageError("");
    setImageFileInfo(files[0]);
    const formData = new FormData();
    formData.append("image", files[0]);
    // fetch("https://learn-with-rakib-server-three.vercel.app/videos", {
    //   method: "POST",
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.statusCode === 201) {
    //       const time = (new Date()).getTime();
    //       checkStatus(data.videoId, time);
    //     }
    //   })
    //   .catch(err => console.error(err))
  }

  const handleUploadVideo = files => {
    if (files[0].type.split("/")[0] !== "video") {
      setVideoError("Please select only video files");
      return;
    }
    // let cancel = cancelVideoUpload;
    setCancelVideoUpload(false);
    setIsVideoUploading(true);
    setVideoError("");
    setVideoFileInfo(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    fetch("https://learn-with-rakib-server-three.vercel.app/videos", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode === 201) {
          const time = (new Date()).getTime();
          setPromotionVideoId(data.videoId)
          checkStatus(data.videoId, time);
        }
      })
      .catch(err => console.error(err))
  }

  const checkStatus = (id, time) => {
    if (id) {
      const checkInterval = setInterval(() => {
        fetch(`https://learn-with-rakib-server-three.vercel.app/videos/status/${id}`)
          .then(res => res.json())
          .then(data => {
            // console.log(isVideoUploading);
            const percent = parseInt(((new Date()).getTime() - time) * 100 * 10000 / data.upload_time)
            const status = data.status === "ready" ? 100 : percent > 99 ? 99 : percent;
            // console.log(cancelVideoUpload);
            if (data.status === "ready") {
              clearInterval(checkInterval);
              setIsVideoUploading(false);
              setIsVideoUploaded(true);
            } else if (cancelVideoUpload) {
              clearInterval(checkInterval);
              setVideoStatus(0);
              setIsVideoUploading(false);
              setIsVideoUploaded(false);
            }
            setVideoStatus(status);
          })
      }, 3000);
    }
  }

  const handleCancelVideoUpload = () => setCancelVideoUpload(true)

  return (
    <div className='mt-4 flex gap-x-6'>
      <DragAndDrop
        title="Cover Photo"
        isUploading={isImageUploading}
        icon={UploadImgIcon}
        type="image"
        workWithFiles={handleUploadImage}
        isUploaded={""}
      >
        {
          imageError && <p className='text-red-600 text-center font-semibold'>{imageError}</p>
        }
        {
          imageStatus ? <UploadCoverImg
            imageStatus={imageStatus}
            fileInfo={imageFileInfo}
          /> : ""
        }
      </DragAndDrop>
      <DragAndDrop
        title="Promotional Video"
        isUploading={isVideoUploading}
        icon={UploadVideoIcon}
        type="video"
        workWithFiles={handleUploadVideo}
        isUploaded={isVideoUploaded}
      >
        {
          videoError && <p className='text-red-600 text-center font-semibold'>{videoError}</p>
        }
        {
          videoStatus ? <UploadKDPvideo
            videoStatus={videoStatus}
            fileInfo={videoFileInfo}
            handleCancelUpload={handleCancelVideoUpload}
          /> : ""
        }
      </DragAndDrop>
    </div>
  );
};

export default UploadPhotoAndVideo;