import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './StudentFeedback.css'
import sliderBg from '../../../assest/bg-img/Slider bg(1).png'


export default function StudentFeedback() {

    let settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const students = [
        {
            id: 1,
            name: "Merazul Islam Rean",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "KDP Author",
            describe: "The course From Learn With Rakib covers the principles and techniques of book design, including Cover design and details of Book interior design. It teaches how to create visually appealing and engaging books that convey and fulfill the Client's Demand. The course typically includes Details projects and helps students to develop their skills. Overall, The course from Learn With Rakib is an excellent option for anyone interested in the art of books and Express creativity in book design"
        },
        {
            id: 2,
            name: "Rashidul Sony",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "KDP Author",
            describe: "'Learn with Rakib'is an amazing platform to learn about KDP. I was looking for a platform to learn about Amazon KDP from scratch, then I found this website. The mentor of this website is a very skillful person, he has an amazing ability to teach something new. So, If you're an aspiring author looking to self-publish your work on Amazon's Kindle Direct Publishing platform, then this website is an excellent resource to check out. The website offers a comprehensive guide to KDP, with step-by-step instructions."
        },
        {
            id: 3,
            name: "Dalowar Hosen",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "KDP Author",
            describe: "I am thrilled with the wealth of knowledge and support I have received from Learn With Rakib. The website offers a comprehensive premium paid course on KDP and consultation services on various freelancing topics. Rakib's passion for teaching and expertise in the field have been evident in the quality of the resources and guidance provided. I am grateful for the impact it has had on my freelancing career!"
        },
        {
            id: 4,
            name: "Mohammad Salauddin",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "KDP Author",
            describe: "Learn With Rakib has been an invaluable resource for my creative journey. The website offers a wide range of services, including a premium paid course on KDP, free classes on YouTube, and tailored consultation packages. Rakib's insights, strategies, and guidance have helped me enhance my freelancing skills and overcome challenges. I highly recommend Learn With Rakib to anyone looking to level up their creativity and freelancing game."
        },
        {
            id: 5,
            name: "Md Nishat",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "KDP Author",
            describe: "I am extremely satisfied with the offerings of Learn With Rakib. The website provides a wealth of resources, including a premium paid course on KDP and consultation services on various freelancing topics. Rakib's expertise and passion for teaching shine through in the quality of the content and guidance provided. It has been a valuable investment in my freelancing career, and I am grateful for the knowledge and support received."
        },

    ]

    return (

        <div>
            <h2 className='text-2xl lg:text-[40px] md:text-[35px] font-bold text-[#1B1D48] mt-10 lg:mt[87px] text-center lg:pt-11'>What Our Student <span className='text-[#38A27B]'>Say</span></h2>

            <div
                style={{
                    backgroundImage: `url(${sliderBg})`
                }}
                className=' lg:mx-[145px] mt-[61px] lg:[82px] h-[70%] sumu mx-auto lg:pb-9'>

                <Slider className='max-w-[92%] mx-auto' {...settings}>
                    {
                        students.map(student =>
                            <div key={student.id} className='relative h-[203px] border-[#3D419F] rounded-xl text-center sumu border-y-[1px]'>
                                <img className='absolute top-[-18%] right-[43%] h-14 w-14 rounded-full border-2 border-[#3D419F]' src='https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp' alt='' />
                                <h4 className='font-bold text-base mt-[30px] text-[#333333]'>{student.name}</h4>
                                <h5 className='text-xs font-light mt-1 text-[#666666]'>{student.skill}</h5>
                                <p className='text-base font-normal mt-[10px] text-[#333333]'>{student.describe.length > 100 ? student.describe.slice(0, 100) + '...' : student.describe}</p>
                            </div>
                        )
                    }
                </Slider>
            </div>

        </div >
    );
};