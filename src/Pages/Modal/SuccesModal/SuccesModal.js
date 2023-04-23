import React from 'react';
import succes from '../../../assest/modal/succes.png'
import failed from '../../../assest/modal/failed.png'

const SuccesModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card w-[320px] h-[318px] lg:w-[398px] lg:h-[409px] rounded-xl shadow-[#cacafd]  bg-[#FFFFFF] shadow-xl">
                        <figure className="px-10 pt-[30px] lg:pt-[40px]">
                            <img src={succes} alt="Shoes" className="rounded-xl h-[45px] w-[45px] lg:h-[133px] lg:w-[133px] md:h-[90px] md:w-[90px]" />
                        </figure>
                        <div className="card-body items-center text-center p-4 pb-8">
                            <h2 className="card-title text-[#1B1D48] text-xl lg:text-2xl font-semibold lg:font-bold">Congratulation!</h2>
                            <p className='text-sm lg:text-base font-normal lg: text-[#666666]'>You have successfully enroll this <br /> course. Learn with fun!</p>
                            <div className="card-actions">
                                <button className="bg-[#3D419F] text-white font-semibold text-sm lg:text-base w-[288px] lg:w-[350px] h-[41px] lg:h-[48px] rounded-[10px] px-5 py-[10px] lg:py-[12px] mt-[24px] lg:mt-[32px]">Go To Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card w-[320px] h-[318px] lg:w-[398px] lg:h-[409px] rounded-xl shadow-[#cacafd]  bg-[#FFFFFF] shadow-xl">
                <figure className="px-10 pt-[30px] lg:pt-[40px]">
                    <img src={succes} alt="Shoes" className="rounded-xl h-[45px] w-[45px] lg:h-[133px] lg:w-[133px] md:h-[90px] md:w-[90px]" />
                </figure>
                <div className="card-body items-center text-center p-4 pb-8">
                    <h2 className="card-title text-[#1B1D48] text-xl lg:text-2xl font-semibold lg:font-bold">Congratulation!</h2>
                    <p className='text-sm lg:text-base font-normal lg: text-[#666666]'>You have successfully enroll this <br /> course. Learn with fun!</p>
                    <div className="card-actions">
                        <button className="bg-[#3D419F] text-white font-semibold text-sm lg:text-base w-[288px] lg:w-[350px] h-[41px] lg:h-[48px] rounded-[10px] px-5 py-[10px] lg:py-[12px] mt-[24px] lg:mt-[32px]">Go To Course</button>
                    </div>
                </div>
            </div>
            <div className="card w-[320px] h-[310px] lg:w-[501px] lg:h-[360px] rounded-xl shadow-[#cacafd]  bg-[#FFFFFF] shadow-xl">
                <figure className="px-10 pt-[30px] lg:pt-[40px]">
                    <img src={failed} alt="Shoes" className="rounded-xl h-[88px] w-[98px] lg:h-[96px] lg:w-[107px] md:h-[90px] md:w-[90px]" />
                </figure>
                <div className="card-body items-center text-center p-4 pb-8">
                    <h2 className="card-title text-[#E8291D] text-xl lg:text-2xl font-semibold lg:font-bold">Failed!</h2>
                    <p className='text-sm lg:text-base font-normal lg: text-[#666666]'>Do you really want to cancel<br />  payment?</p>
                    <div className="card-actions gap-x-3">
                        <button className="hover:bg-[#E8291D] hover:text-white border font-semibold rounded-xl h-[41px] w-[74px] lg:h-[48px] lg:w-[90px] ">No</button>
                        <button className="bg-[#E8291D] text-white font-semibold rounded-xl h-[41px] w-[74px] lg:h-[48px] lg:w-[90px] ">Yes</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SuccesModal;