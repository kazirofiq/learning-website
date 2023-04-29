import plus_icon from '../../../../assest/admin_dashboard/add_faq/plus_icon.png'
import menu_icon from '../../../../assest/admin_dashboard/add_faq/Menu.png'
import draft from '../../../../assest/admin_dashboard/add_faq/draft.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AddFAQ.css'
import { useState } from 'react';
import EditFAQModal from '../EditFAQModal/EditFAQModal';
import Buttons from '../../../CreateCourse/Buttons/Buttons';

const AddFAQ = () => {

    const [faq, setFaq] = useState(null);

    return (
        <section className='w-[964px] bg-[#FFFFFF] rounded-[12px] custom_shadow'>
            <div className='px-6 py-8'>
                <div className='flex items-center justify-between mb-3'>
                    <div>
                        <p className='text-[#1B1D48] text-[18px] leading-[27px] font-semibold poppins'>Frequently Asked Question</p>
                    </div>
                    <div className='flex gap-3'>
                        <label
                            htmlFor="editFAQModal"
                            className='flex gap-2 text-sm leading-[21px] py-2 px-5 rounded-[10px] text-[#3D419F] font-normal poppins border-[1px] border-solid border-[#3D419F]'>
                            <p className=' '>Edit FAQ</p>
                        </label>
                        <Link>
                            <div className='flex gap-2 text-sm leading-[21px] py-2 px-5 rounded-[10px] text-[#3D419F] font-normal poppins border-[1px] border-solid border-[#3D419F]'>
                                <img src={plus_icon} alt="" />
                                <p className=' '>Add FAQ</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-center items-center">
                    <div className="container flex flex-col justify-center my-3">
                        <div className="space-y-4 lg:w-[916px] w-[320px]">
                            <form>
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />

                                    <div className="flex gap-3 items-center rounded-[10px] bg-[#F8F8FF] collapse-title text-[#1B1D48] h-[49px] lg:h-[61px]">
                                        <img src={menu_icon} alt="" />
                                        <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">Do I need any prior experience or knowledge of interior design to take this course?</p>
                                    </div>

                                    <textarea
                                        className="h-[196px] input peer-checked:mt-2 border-none peer-checked:border-[#C3C4E1] w-full collapse-content bg-[#F8F8FF] text-[#666666]"
                                        type="text"
                                        defaultValue='KDP Amazon stands for Kindle Direct Publishing, which is a platform that allows you to self-publish your books and sell them on Amazon. If you have a background in interior design, you can create and sell books on Amazon related to interior design topics. You can make money by earning royalties on each book sold.'
                                        placeholder="Type here"
                                    />
                                </div>

                                <div className="collapse collapse-arrow mt-4">
                                    <input type="checkbox" className="peer" />

                                    <div className="flex gap-3 items-center rounded-[10px] bg-[#F8F8FF] collapse-title text-[#1B1D48] h-[49px] lg:h-[61px]">
                                        <img src={menu_icon} alt="" />
                                        <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">What topics will be covered in this course?</p>
                                    </div>

                                    <textarea
                                        className="h-[196px] input peer-checked:mt-2 border-none peer-checked:border-[#C3C4E1] w-full collapse-content bg-[#F8F8FF] text-[#666666]"
                                        type="text"
                                        defaultValue='KDP Amazon stands for Kindle Direct Publishing, which is a platform that allows you to self-publish your books and sell them on Amazon. If you have a background in interior design, you can create and sell books on Amazon related to interior design topics. You can make money by earning royalties on each book sold.'
                                        placeholder="Type here"
                                    />

                                </div>

                                <div className="collapse collapse-arrow mt-4">
                                    <input type="checkbox" className="peer" />

                                    <div className="flex gap-3 items-center rounded-[10px] bg-[#F8F8FF] collapse-title text-[#1B1D48] h-[49px] lg:h-[61px]">
                                        <img src={menu_icon} alt="" />
                                        <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">How long does the course take, and is it self-paced?</p>
                                    </div>

                                    <textarea
                                        className="h-[196px] input peer-checked:mt-2 border-none peer-checked:border-[#C3C4E1] w-full collapse-content bg-[#F8F8FF] text-[#666666]"
                                        type="text"
                                        defaultValue='KDP Amazon stands for Kindle Direct Publishing, which is a platform that allows you to self-publish your books and sell them on Amazon. If you have a background in interior design, you can create and sell books on Amazon related to interior design topics. You can make money by earning royalties on each book sold.'
                                        placeholder="Type here"
                                    />

                                </div>

                                <div className="collapse collapse-arrow mt-4">
                                    <input type="checkbox" className="peer" />

                                    <div className="flex gap-3 items-center rounded-[10px] bg-[#F8F8FF] collapse-title text-[#1B1D48] h-[49px] lg:h-[61px]">
                                        <img src={menu_icon} alt="" />
                                        <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">What is KDP Amazon, and how can I make money from it?</p>
                                    </div>

                                    <textarea
                                        className="h-[196px] input mt-2 border-none peer-checked:border-[1px] peer-checked:border-[#C3C4E1] w-full collapse-content bg-[#F8F8FF] text-[#666666]"
                                        type="text"
                                        defaultValue='KDP Amazon stands for Kindle Direct Publishing, which is a platform that allows you to self-publish your books and sell them on Amazon. If you have a background in interior design, you can create and sell books on Amazon related to interior design topics. You can make money by earning royalties on each book sold.'
                                        placeholder="Type here"
                                    />

                                </div>
                                <div>
                                    <Buttons setRoute={""} text={"Published"} />
                                </div>
                                {/* <div className='flex gap-5 mt-8 justify-center'> */}
                                    {/* <Link>
                                        <div className='flex gap-2 items-center h-[48px] text-sm leading-[21px] py-2 px-5 rounded-[10px] text-[#333333] font-medium poppins border-[1px] border-solid border-[#333333]'>
                                            <img src={draft} alt="" className='w-[17.2px] h-[17.2px]' />
                                            <p className=' '>Save as Draft</p>
                                        </div>
                                    </Link> */}
                                    {/* <Link> */}
                                        {/* <div className='flex justify-between gap-2 items-center h-[48px] text-sm bg-[#3D419F] leading-[21px] py-2 px-5 rounded-[10px] text-white font-medium poppins border-[1px] border-solid border-[#3D419F]'> */}
                                            {/* <p className=' '>Published</p> */}
                                            {/* <img src={right_arrow} alt="" /> */}
                                            {/* <FaArrowRight /> */}
                                        {/* </div> */}
                                    {/* </Link> */}
                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <EditFAQModal
                setFaq={setFaq}
            ></EditFAQModal>
        </section>
    );
};

export default AddFAQ;