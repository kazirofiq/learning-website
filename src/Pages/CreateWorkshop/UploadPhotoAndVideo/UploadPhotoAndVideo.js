import React, { useEffect, useState } from 'react';
import './UploadPhotoAndVideo.css';
import UploadCoverImg from '../CourseUploadProgress/UploadCoverImg';
import UploadKDPvideo from '../CourseUploadProgress/UploadKDPvideo';
import UploadImgIcon from "../../../assest/icon/uploadPhoto.png";
import UploadVideoIcon from "../../../assest/icon/Video upload.png";
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import UploadError from '../UploadError/UploadError';

const UploadPhotoAndVideo = ({ setPromotionVideoId, setImage }) => {
  const [videoStatus, setVideoStatus] = useState(0);
  const [videoFileInfo, setVideoFileInfo] = useState("");
  const [videoError, setVideoError] = useState("");
  const [isVideoUploadError, setIsVideoUploadError] = useState(false);
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [cancelVideoUpload, setCancelVideoUpload] = useState(false);

  const [imageStatus, setImageStatus] = useState(0);
  const [imageFileInfo, setImageFileInfo] = useState("");
  const [imageError, setImageError] = useState("");
  const [isImageUploadError, setIsImageUploadError] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleUploadImage = files => {
    if (files[0].type.split("/")[0] !== "image") {
      setImageError("Please select only image files");
      return;
    }
    setIsImageUploading(true);
    setIsImageUploadError(false);
    setImageError("");
    setImageFileInfo(files[0]);
    const imageUploadInterval = setInterval(() => setImageStatus(prev => prev < 99 ? prev + 1 : prev), 300)
    const formData = new FormData();
    formData.append("image", files[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success && imgData.status === 200) {
          clearInterval(imageUploadInterval);
          setImage(imgData.data.url);
          setIsImageUploading(false);
        }
      })
      .catch(err => {
        clearInterval(imageUploadInterval);
        setImageStatus(0);
        setIsImageUploading(false);
        setIsImageUploadError(true);
        console.error(err);
      })
  }

  const handleUploadVideo = files => {
    if (files[0].type.split("/")[0] !== "video") {
      setVideoError("Please select only video files");
      return;
    }
    // let cancel = cancelVideoUpload;
    setIsVideoUploadError(false);
    setCancelVideoUpload(false);
    setIsVideoUploading(true);
    setVideoError("");
    setVideoFileInfo(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    fetch("http://localhost:5000/videos", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode === 201) {
          const time = (new Date()).getTime();
          setPromotionVideoId(data.videoId);
          checkStatus(data.videoId, time);
        }
      })
      .catch(err => {
        console.error(err);
        setIsVideoUploading(false);
        setIsVideoUploadError(true);
      })
  }

  const checkStatus = (id, time) => {
    if (id) {
      const checkInterval = setInterval(() => {
        fetch(`http://localhost:5000/videos/status/${id}`)
          .then(res => res.json())
          .then(data => {
            const percent = parseInt(((new Date()).getTime() - time) * 100 * 10000 / data.upload_time)
            const status = data.status === "ready" ? 100 : percent > 99 ? 99 : percent;
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
          .catch(err => {
            console.error(err);
            clearInterval(checkInterval)
          })
      }, 3000);
    }
  }

  const handleCancelVideoUpload = () => setCancelVideoUpload(true);

  useEffect(() => {
    if (imageStatus > 1 && !isImageUploading) {
      const imageUploadInterval = setInterval(() => setImageStatus(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(imageUploadInterval);
          setIsImageUploaded(true)
          return 100;
        }
      }), 50);
    }
  }, [isImageUploading, imageStatus])

  return (
    <div className='mt-4 flex gap-x-6'>
      <DragAndDrop
        title="Cover Photo"
        isUploading={isImageUploading}
        icon={UploadImgIcon}
        type="image"
        workWithFiles={handleUploadImage}
        isUploaded={isImageUploaded}
      >
        {
          imageError && <p className='text-red-600 text-center font-semibold'>{imageError}</p>
        }
        {
          imageStatus ?
            <UploadCoverImg
              imageStatus={imageStatus}
              fileInfo={imageFileInfo}
            />
            :
            isImageUploadError ?
              <UploadError
                icon={UploadImgIcon}
                fileInfo={imageFileInfo}
                setError={setIsImageUploadError}
              />
              : ""
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
          videoStatus ?
            <UploadKDPvideo
              videoStatus={videoStatus}
              fileInfo={videoFileInfo}
              handleCancelUpload={handleCancelVideoUpload}
            />
            :
            isVideoUploadError ?
              <UploadError
                icon={UploadVideoIcon}
                fileInfo={videoFileInfo}
                setError={setIsVideoUploadError}
              />
              :
              ""
        }
      </DragAndDrop>
    </div>
  );
};

export default UploadPhotoAndVideo;