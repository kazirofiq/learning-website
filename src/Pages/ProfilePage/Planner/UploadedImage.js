import React from 'react';
import img_1 from '../../../assest/myplanner/img_1.png'
import img_2 from '../../../assest/myplanner/img_2.png'
import img_3 from '../../../assest/myplanner/img_3.png'
import img_4 from '../../../assest/myplanner/img_4.png'
const UploadedImage = () => {

     const images = [
        {
            img : img_1
        },
        {
            img : img_2
        },
        {
            img : img_3
        },
        {
            img : img_4
        },
        {
            img : img_1
        },
        {
            img : img_2
        },
        {
            img : img_3
        },
        {
            img : img_4
        }
     ]
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6   py-4">
              {images.map((image) => (
                  <div className=" px-3">
                    <img className="w-full " src={image.img} alt="" />
                  </div>

              ))}
            </div>
        </div>
    );
};

export default UploadedImage;