import React from "react";

const HowItWorksVideo = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="openVideoModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative p-0">
            <label
              htmlFor="openVideoModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label>
            <iframe className="w-full " width="500" height="363" src="https://www.youtube.com/embed/lJ5z7sdFMKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksVideo;
