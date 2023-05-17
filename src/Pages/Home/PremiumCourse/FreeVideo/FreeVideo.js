import React from 'react';
import image1 from '../../../../assest/course_image/Class-1.jpg';
import image2 from '../../../../assest/course_image/Class-2.jpg';
import image3 from '../../../../assest/course_image/Class-3.jpg';
import image4 from '../../../../assest/course_image/Class-4.jpg';
import image5 from '../../../../assest/course_image/Class-5.jpg';
import image6 from '../../../../assest/course_image/Class-6.jpg';
import { Link } from 'react-router-dom';

const FreeVideo = () => {

    const course_data = [
        {
            "id": "1",
            "image": image1,
            "videoLink": "https://youtu.be/JK3YTuw9ltU",
            "course_name": "What Is KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "2",
            "image": image2,
            "videoLink": "https://youtu.be/Jm5Qz0HrSug",
            "course_name": "How does KDP work?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "3",
            "image": image3,
            "videoLink": "https://youtu.be/RgdUKHWDr_Q",
            "course_name": "What Is The Future Of KDP?",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "4",
            "image": image4,
            "videoLink": "https://youtu.be/KJBzZhMjcK4",
            "course_name": "E-Book, Paperback and Hardcover.",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "5",
            "image": image5,
            "videoLink": "https://youtu.be/TCEvBBWCeLs",
            "course_name": "Start With Paperback on Amazon KDP.",
            "name": "Watch this video and learn about KDP"
        },
        {
            "id": "6",
            "image": image6,
            "videoLink": "https://youtu.be/DYzL7BdP_MM",
            "course_name": "Amazon KDP Rules and Regulations.",
            "name": "Watch this video and learn about KDP"
        },

    ]

    return (
        <section className='mx-auto w-[320px] lg:min-w-[1110px] mb-12 lg:mb-[100px]' id='free-course'>
            <div className='mb-10 mx-auto w-[320px] lg:min-w-[1110px]'>
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
                            <Link to={data.videoLink}>
                                <div className="w-full ">
                                    <figure>
                                        <img src={data.image} alt="" className='w-[320px]  lg:w-[350px] ' />
                                    </figure>
                                    <div className="poppins mt-[17px] lg:mt-6">
                                        <h2 className="text-2xl font-bold leading-9 text-[#333333]">{data.course_name}</h2>
                                        <p className="text-base leading-6 font-normal text-[#666666] mt-1 lg:mt-2">{data.name}</p>
                                    </div>
                                </div></Link>
                        </div>)
                    }
                </div>

                <div className='flex justify-center '>
                    <Link to='https://www.youtube.com/watch?v=JK3YTuw9ltU&list=PLsIOHULf2KxOpkfZYlxG7m42XOw167QoI' target='blank' className='mt-6 lg:mt-10 text-sm lg:text-base leading-[21px] lg:leading-6 bs_sm lg:bs text-white lg:font-semibold font-medium poppins'>See All Video</Link>
                </div>
            </div>
        </section>
    );
};

export default FreeVideo;