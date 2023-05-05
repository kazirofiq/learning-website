import React from 'react';
import draftIcon from "../../../assest/icon/Group 1000003428.png";
import continueIcon from "../../../assest/icon/buttonRight.png";
const Buttons = ({ setDraft, text, draft }) => {
    return (
        <div className='flex items-center justify-center gap-x-5 mt-8 mb-8'>
            {/* <Link to={''}> */}
            {
                draft && <button onClick={() => setDraft(true)} className="text-[#333333] border-[1px] border-[#333333] w-[179px] h-[48px] rounded-[10px] flex items-center justify-center">
                    <img className='mr-[13px]' src={draftIcon} alt="" />
                    Save as Draft
                </button>
            }
            {/* </Link> */}
            {/* <Link to={setRoute}> */}
            <button type='submit' className="text-[#FFFFFF] bg-[#3D419F] border-[1px] w-[202px] h-[48px] rounded-[10px] flex items-center justify-center">
                {text}
                <img className='ml-[13px]' src={continueIcon} alt="" />
            </button>
            {/* </Link> */}
        </div>
    );
};

export default Buttons;