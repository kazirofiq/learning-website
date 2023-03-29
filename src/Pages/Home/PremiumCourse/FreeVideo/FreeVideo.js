import React from 'react';
import image1 from '../../../../assest/course_image/course_image_1.png';

const FreeVideo = () => {

    const course_data = [
        {
            "id": "1",
            "image": "../../../../assest/course_image/course_image_1.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "2",
            "image": "../../../../assest/course_image/course_image_2.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "3",
            "image": "../../../../assest/course_image/course_image_3.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "4",
            "image": "../../../../assest/course_image/course_image_1.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "5",
            "image": "../../../../assest/course_image/course_image_2.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "6",
            "image": "../../../../assest/course_image/course_image_3.png",
            "course_name": "What is KDP?",
            "name": "Watch this video and learn about KDP"
        },

    ]

    return (
        <section className='my-12 mx-auto w-[320px] lg:min-w-[1110px]'>
            <div className='w-[320px] lg:w-[1110px] grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <div className=''>
                    <h1 className='text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px] font-bold poppins'>
                        <span className='text-[#1B1D48]'>Check Free Video from</span>
                        <br />
                        <span className='text-[#38A27B]'>This Course</span>
                    </h1>
                </div>
                <div>
                    <p className='lg:block hidden text-sm lg:text-base leading-[21px] lg:leading-6 font-normal text-[#666666]'>By watching these videos, you can get a sense of the instructor's
                        <br /> teaching style, the depth of the material, and the overall production
                        <br /> quality of the course.</p>

                    <p className='block lg:hidden text-sm lg:text-base leading-[21px] lg:leading-6 font-normal text-[#666666]'>By watching these videos, you can get a
                        <br /> sense of the instructor's teaching style, the
                        <br /> depth of the material, and the overall
                        <br /> production quality of the course.</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 mt-10'>
                {
                    course_data.map(data => <div
                        key={data.id}
                    >
                        <div className="w-full ">
                            <figure>
                                <img src={image1} alt="" className='w-[320px]  lg:w-[350px] ' />
                            </figure>
                            <div className="poppins mt-[17px] lg:mt-6">
                                <h2 className="text-2xl font-bold leading-9 text-[#333333]">{data.course_name}</h2>
                                <p className="text-base leading-6 font-normal text-[#666666] mt-1 lg:mt-2">{data.name}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default FreeVideo;