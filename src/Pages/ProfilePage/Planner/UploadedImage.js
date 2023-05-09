import React, { useCallback, useState } from 'react';
import ImageViewer from "react-simple-image-viewer";
import img_1 from '../../../assest/myplanner/img_1.png'
import img_2 from '../../../assest/myplanner/img_2.png'
import img_3 from '../../../assest/myplanner/img_3.png'
import img_4 from '../../../assest/myplanner/img_4.png'
const UploadedImage = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_1,
    img_2,
    img_3,
    img_4,
    
  ];
   
    return (
        <div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6   py-4">
              {images.map((image, index) => (
                  <div className=" px-3">
                    <img 
                    onClick={() => openImageViewer(index)}
                    width="600"
                    key={index}
                    style={{ margin: "2px" }}
                    alt=""
                    className="w-full " 
                    src={image}
                     alt="" />
                  </div>

              ))}
              {isViewerOpen && (
                <ImageViewer
                  src={images}
                  width="500"
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={false}
                  backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                  }}
                  closeOnClickOutside={true}
                />
              )}
            </div>
            <div>
      

      
    </div>
        </div>
    );
};

export default UploadedImage;