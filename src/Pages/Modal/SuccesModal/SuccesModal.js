import React from 'react';
import succes from '../../../assest/modal/succes.png'
import { Link } from 'react-router-dom';

const SuccesModal = ({ isChecked, setIsChecked, linkTo }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" checked={isChecked} />
            <div className="modal">
                <div className="modal-box relative bg-transparent shadow-none">
                    <label onClick={() => setIsChecked(false)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card w-[320px] h-[318px] lg:w-[398px] lg:h-[409px] rounded-xl shadow-[#cacafd]  bg-[#FFFFFF] shadow-none">
                        <figure className="px-10 pt-[30px] lg:pt-[40px]">
                            <img src={succes} alt="Shoes" className="rounded-xl h-[45px] w-[45px] lg:h-[133px] lg:w-[133px] md:h-[90px] md:w-[90px]" />
                        </figure>
                        <div className="card-body items-center text-center p-4 pb-8">
                            <h2 className="card-title text-[#1B1D48] text-xl lg:text-2xl font-semibold lg:font-bold">Congratulation!</h2>
                            <p className='text-sm lg:text-base font-normal lg: text-[#666666]'>You have successfully enrolled this <br /> course. Learn with fun!</p>
                            <div className="card-actions">
                                <Link to={linkTo}><button className="bg-[#3D419F] text-white font-semibold text-sm lg:text-base w-[288px] lg:w-[350px] h-[41px] lg:h-[48px] rounded-[10px] px-5 py-[10px] lg:py-[12px] mt-[24px] lg:mt-[32px]">Go To Course</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccesModal;