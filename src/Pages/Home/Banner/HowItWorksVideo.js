import React, { useState } from "react";

const HowItWorksVideo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div>
        <input type="checkbox" id="openVideoModal" className="modal-toggle" onChange={e => setIsChecked(e.target.checked)} />
        <div className="modal">
          <div className="relative mx-auto bg-white rounded-[20px]">
            <label htmlFor="openVideoModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="poppins lg:max-w-[925px] max-w-[390px]">
              <iframe className="w-[320px] lg:w-[730px] lg:h-[450px] h-[300px]" src={`${isChecked && "https://player.vdocipher.com/v2/?otp=20160313versASE323sVE1SFzF7nxx3s3w2F68wthzq0eSzgHshPYkif9lRyFsy5&playbackInfo=eyJ2aWRlb0lkIjoiZGE1YThhZDM1ZDE4NDI5NWE5MjY3ODM0ZGRkZjJlYmUifQ=="}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksVideo;
