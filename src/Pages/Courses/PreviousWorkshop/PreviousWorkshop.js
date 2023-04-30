import React from 'react';
import card3 from '../../../assest/course_image/Card 3.png'
import card5 from '../../../assest/course_image/card 5.png'
import card6 from '../../../assest/course_image/card 6.png'
import card7 from '../../../assest/course_image/Card 4.png'
const PreviousWorkshop = () => {
    const previousWorkshop = [
        {
            id: 1,
            image: card3,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 2,
            image: card5,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 3,
            image: card6,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
        {
            id: 4,
            image: card7,
            title: "How To Publish A Book On Amazon: The Full ...",
            mentor: "Rakib Ahmed",
            price: 150
        },
    ]
    return (
        <div>
            <div className='mx-[35px] lg:mx-[145px] md:mx-[20px]'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-[24px] md:mt-[34px] lg:mt-[48px] mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                    {
                        previousWorkshop.map(pw =>
                            <div className="card lg:w-[255px] md:w-[255px] w-[320px] h-[363px] lg:h-[326px] rounded-[10px] bg-[#FFFFFF] border-[1px] border-[#ECECF5]">
                                <figure><img className='lg:h-[143px] md:h-[143px] h-[179px] w-full' src={pw.image} alt="Shoes" /></figure>
                                <div className="px-4 pt-3 pb-5 lg:pb-6 bg-[#FFFFFF]">
                                    <h2 className=" font-semibold text-base lg:text-lg leading-6 text-[#333333] mt-2">How To Publish A Book On Amazon: The Full ...</h2>
                                    <p className='font-normal text-xs lg:text-sm md:text-sm leading-[18px] text-[#333333] mt-[8px] lg:mt-3 md:mt-3'>Rakib Ahmed</p>
                                    <div className='flex items-center gap-x-3'>
                                        <progress className="progress progress-secondary w-56 mt-1" value="90" max="100"></progress><span>90%</span>
                                    </div>
                                    <div className="w-full bg-[#3D419F] rounded-lg mt-[16px]">
                                        <button disabled className='px-[74.5px] btn-disabled py-[8px] text-white text-[14px] lg:text-[16px] font-medium'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PreviousWorkshop;