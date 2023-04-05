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
            name: "Rasel Mondol",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "Ui/Ux Designer",
            describe: "There are many variations of passages of Lorem Ipsum available, but the majority have"
        },
        {
            id: 2,
            name: "Rasel Mondol",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "Ui/Ux Designer",
            describe: "There are many variations of passages of Lorem Ipsum available, but the majority have"
        },
        {
            id: 3,
            name: "Rasel Mondol",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "Ui/Ux Designer",
            describe: "There are many variations of passages of Lorem Ipsum available, but the majority have"
        },
        {
            id: 4,
            name: "Rasel Mondol",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "Ui/Ux Designer",
            describe: "There are many variations of passages of Lorem Ipsum available, but the majority have"
        },
        {
            id: 5,
            name: "Rasel Mondol",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
            skill: "Ui/Ux Designer",
            describe: "There are many variations of passages of Lorem Ipsum available, but the majority have"
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

                <Slider {...settings}>
                    {
                        students.map(student =>
                            <div key={student.id} className='relative h-[203px] border-[#3D419F] rounded-xl text-center sumu border-y-[1px]'>
                                <img className='absolute top-[-18%] right-[43%] h-14 w-14 rounded-full border-2 border-[#3D419F]' src='https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp' alt='' />
                                <h4 className='font-bold text-base mt-[30px]'>Rasel Mondol</h4>
                                <h5 className='text-xs font-light mt-1'>Ui/Ux Deginer</h5>
                                <p className='text-base font-normal mt-[10px]'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                            </div>
                        )
                    }
                </Slider>
            </div>

        </div >
    );
};