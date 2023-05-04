import React from 'react';
import './Consultation.css'
import Cimg from '../../assest/Consultency/Image.png'
import PricingCategory from './PricingCategory/PricinglCategory';
import ConsultationReviews from './ConsultationReviews.js/ConsultationReviews';
import ConsultetionFAQ from './ConsultationFAQ/ConsultationFAQ';
import ConsultetionWWL from './ConsultationWhatWillLearn/ConsultationWWL';
import ConsultetionAboutTC from './ConsultationAboutTC/ConsultationAboutTC';
import ConsultetionNavbar from './ConsultationNavbar/ConsultationNavbar';
import scroll from '../../assest/Consultency/Scroll.png';
import { useEffect } from 'react';

const Consultation = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='py-0 pb-[30px] lg:py-[95px]'>
            <div className="text-center  px-[20px] lg:px-[145px]">
                <p className='text-lg text-[#333333] font-mem
                 leading-[27px]'>Consultation</p>
                <h2 className='text-2xl lg:text-[40px] font-bold text-[#1B1D48] leading-[36px] mx-auto lg:leading-[48px] max-w-[874px]'>Unlock Your Creativity with Expert  <br /><span className='text-[#38A27B]'>Consultation by Rakib</span></h2>
                <p className='text-black mt-4'> Get personalized guidance, insights, and strategies for your creativity with our tailored consultation packages.</p>
            </div>
            <div>
                <img className="mx-auto py-[24px] lg:py-[40px]" src={scroll} alt="" />
            </div>
            <div className=' px-[20px] lg:px-[145px]'>
                <img className='w-full sm:sml-Cimg lg:Cimg' src={Cimg} alt="" />
            </div>
            <ConsultetionNavbar />
            <ConsultetionAboutTC />
            <ConsultetionWWL />
            <PricingCategory />
            <ConsultetionFAQ />
            <ConsultationReviews />
        </div>

    );
};

export default Consultation;