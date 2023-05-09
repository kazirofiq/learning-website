import plus_icon from '../../../../assest/admin_dashboard/add_faq/plus_icon.png'
import menu_icon from '../../../../assest/admin_dashboard/add_faq/Menu.png'
import { useNavigate, useParams } from 'react-router-dom';
import './AddFAQ.css'
import { useState } from 'react';
import Buttons from '../../../CreateCourse/Buttons/Buttons';
import { useForm } from 'react-hook-form';
import { server } from '../../../../variables/server';

const AddFAQ = () => {
    const navigate = useNavigate();
    const { courseId } = useParams()
    const [faqData, setFaqData] = useState({
        courseId,
        faq: [
            {
                que: "",
                answer: ""
            }
        ]
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addFAQ = () => {
        setFaqData(prev => {
            return {
                courseId,
                faq: [
                    ...prev.faq,
                    {
                        que: "",
                        answer: ""
                    }
                ]
            }
        })
    }
    const addQue = (e, i) => {
        setFaqData(prev => {
            prev.faq[i].que = e.target.value;
            return { ...prev }
        })
    }

    const addAns = (e, i) => {
        setFaqData(prev => {
            prev.faq[i].answer = e.target.value;
            return { ...prev }
        })
    }
    // console.log(faqData);

    const handleCreateFAQ = data => {
        fetch(`${server}/faq/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(faqData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    navigate(`/admindashboard/mycourse`);
                }
            })
    }

    return (
        <section className='w-[964px] bg-[#FFFFFF] rounded-[12px] custom_shadow'>
            <div className='px-6 py-8'>
                <div className='flex items-center justify-between mb-3'>
                    <div>
                        <p className='text-[#1B1D48] text-[18px] leading-[27px] font-semibold poppins'>Frequently Asked Question</p>
                    </div>
                    <div className='flex gap-3'>
                        {/* <label
                            htmlFor="editFAQModal"
                            className='flex gap-2 text-sm leading-[21px] py-2 px-5 rounded-[10px] text-[#3D419F] font-normal poppins border-[1px] border-solid border-[#3D419F]'>
                            <p className=' '>Edit FAQ</p>
                        </label> */}
                        <span onClick={addFAQ}>
                            <div className='flex gap-2 text-sm leading-[21px] py-2 px-5 rounded-[10px] text-[#3D419F] font-normal poppins border-[1px] border-solid border-[#3D419F]'>
                                <img src={plus_icon} alt="" />
                                <p className=' '>Add FAQ</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-center items-center">
                    <div className="container flex flex-col justify-center my-3">
                        <div className="space-y-4 lg:w-[916px] w-[320px]">
                            <form onSubmit={handleSubmit(handleCreateFAQ)}>
                                {
                                    faqData.faq.map((_, i) =>
                                        <div key={i} className="collapse collapse-arrow mb-2">
                                            <input type="checkbox" className="peer" />
                                            <div className="flex items-center rounded-[10px] bg-[#F8F8FF] collapse-title text-[#1B1D48] h-[49px] lg:h-[61px]">
                                                <img src={menu_icon} alt="" />
                                                <input
                                                    {...register(`question${i}`, {
                                                        required: `Question ${i + 1} is required`,
                                                    })}
                                                    onKeyUp={e => addQue(e, i)}
                                                    type="text"
                                                    placeholder="Question Title"
                                                    className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-full shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#525259] md:text-[18px] leading-[27px] poppins z-10"
                                                />
                                            </div>
                                            <textarea
                                                onKeyUp={e => addAns(e, i)}
                                                className="h-[196px] input peer-checked:mt-2 border-none peer-checked:border-[#C3C4E1] w-full collapse-content bg-[#F8F8FF] text-[#666666]"
                                                type="text"
                                                {...register(`answer${i}`, {
                                                    required: `Answer ${i + 1} is required`,
                                                })}
                                            />
                                            {errors[`question${i}`] && (
                                                <p className="text-red-600 text-center font-semibold" role="alert">
                                                    {errors[`question${i}`]?.message}
                                                </p>
                                            )}
                                            {errors[`answer${i}`] && (
                                                <p className="text-red-600 text-center font-semibold" role="alert">
                                                    {errors[`answer${i}`]?.message}
                                                </p>
                                            )}
                                        </div>
                                    )
                                }

                                {/* <div className="collapse collapse-arrow mt-4">
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

                                </div> */}
                                <div>
                                    <Buttons setDraft={() => { }} text={"Publish Course"} draft={false} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <EditFAQModal
                setFaq={setFaq}
            ></EditFAQModal> */}
        </section>
    );
};

export default AddFAQ;