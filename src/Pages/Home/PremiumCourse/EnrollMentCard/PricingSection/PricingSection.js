import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import EnrollMentCardModal from '../EnrollMentCardModal/EnrollMentCardModal';

const PricingSection = () => {
  const { user } = useContext(AuthContext);
  const [isPaid, setIsPaid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`)
      .then(res => res.json())
      .then(data => setIsPaid(data.paidPremium))
      .catch(err => console.error(err))
  }, [setIsPaid, user?.uid]);

  return (
    <div className="lg:static fixed bottom-0 left-0 right-0 lg:w-full bg-white z-50">
      <div className='lg:static top-full lg:w-full lg:pb-0 pb-6 free-offer-button lg:block'>
        <div className='flex justify-center items-center mt-6 lg:mt-[0px] px-[32px] lg:mb-0 mb-4'>
          {/* <h1 className='font-medium lg:text-2xl text-base text-[#777777] line-through'>৳15000</h1> */}
          <h1 className='font-bold text-xl lg:text-2xl text-[#3D419F] text-center'>৳15,000</h1>
        </div>
        {
          isPaid ? <div className="card-actions flex lg:justify-center items-center w-full mt-[15px] lg:px-0 px-5">
            <button className="rounded-[10px] w-[320px] text-sm lg:text-base font-[600] text-[#FFFFFF] bg-[#a2a6fd] cursor-default py-[10px] lg:w-full mx-auto">Already Enrolled</button>
          </div> :
            <Link to={`${user?.uid ? "/payment" : "/login"}`} state={{ from: location }} replace>
              <div className="card-actions flex lg:justify-center items-center w-full mt-[15px] lg:px-0 px-5">
                <button className="rounded-[10px] w-[320px] text-sm lg:text-base font-[600] text-[#FFFFFF] bg-[#3D419F]  py-[10px] lg:w-full mx-auto">Enroll Now</button>
              </div>
            </Link>
        }
        <div className='mt-4 text-black ml-5'>
          To know the process <label className='cursor-pointer' htmlFor='howToPay'><span className='text-[#3D419F] '>Watch this Video</span></label>
        </div>
      </div>
      <EnrollMentCardModal modalId="howToPay" setIsChecked={setIsChecked}>
        <iframe className="w-[320px] lg:w-[730px] lg:h-[450px] h-[300px]" src={`${isChecked && "https://player.vdocipher.com/v2/?otp=20160313versASE323HiGrFGwVUOfoM1B4XG3gNKbgOGAEHX1cc1GmflQhQd7yKx&playbackInfo=eyJ2aWRlb0lkIjoiNzI1MmEyNDMyOTE1NGY5M2EwOWI4NWNjMmFjMTJjZTQifQ=="}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>
      </EnrollMentCardModal>
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