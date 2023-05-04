import React from 'react';
import './ResourceDetails.css'
import { Link } from 'react-router-dom';
import FB from '../../../assest/amazing_resource/shareiconFB.png';
import INSTA from '../../../assest/amazing_resource/Social icon.png';
import TW from '../../../assest/amazing_resource/shareiconTw.png';

import downloadIcon from '../../../assest/amazing_resource/Vector.png';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useContext } from 'react';
import { useQuery } from 'react-query';
const ResourceDetails = ({singleResourch}) => {
    const { user } = useContext(AuthContext);
    

    const { data: loginUser = [], refetch } = useQuery({
        queryKey: ["loginUser"],
        queryFn: () =>
          fetch(`http://localhost:5000/users/uid?uid=${user?.uid}`).then((res) =>
            res.json()
          ),
      });

    console.log(loginUser)
    return (
        <div>
            <div>
                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">

                    <div className='relative mx-auto bg-white rounded-[20px]'>
                        <label htmlFor="my-modal-3" className="btn-lg text-[#666666] absolute right-[-5px] lg:right-[10px] lg:py-0 pt-[3px] lg:top-[30px]">✕</label>
                        <div class="overflow-hidden  shadow-2xl md:grid md:grid-cols-3 max-w-[925px] lg:p-8 rounded-[20px]">


                            <div class="col-span-2">

                                <img src={singleResourch.imgThumbnail} alt="Boat" class="w-full first-letter:rounded-t-lg pt-[32px] lg:pt-0 md:rounded-l-lg md:rounded-t-none mr-0" />
                                <div className='flex items-end pt-2 px-[20px] lg:px-0'>
                                    <p className='text-sm font-normal text-[#666666] leading-[21px]'>Share: </p>
                                    <div className='flex gap-1 ml-2'>
                                        <Link><img src={FB} alt="" /></Link>
                                        <Link><img src={TW} alt="" /></Link>
                                        <Link><img src={INSTA} alt="" /></Link>

                                    </div>
                                </div>
                                <div className='w-full lg:w-[861px] text-left px-[20px] lg:pb-8 lg:px-0'>
                                    <h2 className='text-2xl font-bold text-[#333333] leading-9 pt-[4px] lg:pt-6'>{singleResourch.title}</h2>
                                    <p className='text-base text-[#666666] font-normal leading-6 pt-3'> {singleResourch.designation} </p>
                                </div>

                            </div>
                            <div className='lg:w-[321px] lg:h-[112px] py-[20px] px-[20px] lg:px-0 text-white lg:-ml-[38px] pt-12 lg:pt-[100px]'>
                                <h2 class="mb-2 font-normal text-center lg:text-left mx-auto lg:mx-0 text-xs lg:text-base text-[#333333] leading-6">{singleResourch.licence} Download this template, used and enjoy CHEERS</h2>
                                {
                                    (singleResourch.premium && loginUser.paidPremium === true)  || singleResourch.free
                                    ? <>
                                    <a target="_blank" href={singleResourch.resourcDriveLink}>
                                    <button  className='download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3'>Download <img className='text-white pl-3' src={downloadIcon} alt="downloadIcon" />
                                    </button>
                                </a>
                                    </>
                                    :
                                    // singleResourch.free ?
                                    <a target="_blank" href={singleResourch.resourcDriveLink}>
                                    <button  className='download-button mx-auto lg:mx-0 flex items-center justify-center lg:mt-3'>Download <img className='text-white pl-3' src={downloadIcon} alt="downloadIcon" />
                                    </button>
                                  </a>
                                
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceDetails;