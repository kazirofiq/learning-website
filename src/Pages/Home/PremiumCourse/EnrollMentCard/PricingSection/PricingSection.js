import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (


        <div className="lg:static fixed bottom-0 lg:w-full bg-white z-50">
        <div className='lg:static top-full lg:w-full lg:pb-0 pb-6 free-offer-button lg:block'>
          <div className='flex justify-between items-center mt-6 lg:mt-[0px] px-[32px] lg:mb-0 mb-4'>
            <h1 className='font-medium lg:text-2xl text-base text-[#777777] line-through'>$1500.00</h1>
            <h1 className='font-bold text-xl lg:text-2xl text-[#3D419F]'>$1150.00</h1>
          </div>
          <Link to='/payment'>
            <div className="card-actions flex lg:justify-center items-center w-full mt-[15px] lg:px-0 px-5">
              <button className="rounded-[10px] w-[320px] text-sm lg:text-base font-[600] text-[#FFFFFF] bg-[#3D419F]  py-[10px] lg:w-full mx-auto">Enroll Now</button>
            </div>
          </Link>
        </div>
      </div>
      
      
            // <div className='lg:static top-full w-[360px] lg:w-full lg:pb-0 pb-6 free-offer-button lg:block'>
            //             <div className='flex justify-between items-center mt-[0px] px-[32px]'>
            //                 <h1 className='font-medium text-2xl text-[#777777] line-through'>$1500.00</h1>
            //                 <h1 className='font-bold text-2xl text-[#3D419F]'>$1150.00</h1>
            //             </div>
            //             <Link to='/payment'>
            //                 <div className="card-actions lg:justify-center items-center w-full mt-[15px] lg:">
            //                     <button className="rounded-[10px] text-sm lg:text-base font-[600] text-[#FFFFFF] bg-[#3D419F]  py-[10px] w-full">Enroll Now</button>
            //                 </div>
            //             </Link>
            //         </div>
            
    );
};

export default PricingSection;