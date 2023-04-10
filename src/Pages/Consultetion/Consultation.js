import React from 'react';
import './Consultation.css'
import Cimg from '../../assest/Consultency/Image.png'
import PricingCategory from './PricingCategory/PricinglCategory';
import ConsultationReviews from './ConsultationReviews.js/ConsultationReviews';
import ConsultetionFAQ from './ConsultationFAQ/ConsultationFAQ';
import ConsultetionWWL from './ConsultationWhatWillLearn/ConsultationWWL';
import ConsultetionAboutTC from './ConsultationAboutTC/ConsultationAboutTC';
import ConsultetionNavbar from './ConsultationNavbar/ConsultationNavbar';

const Consultation = () => {
    return (
        <div className='py-[96px]'>
            <dev className="text-center  px-[20px] lg:px-[145px]">
                <p className='text-lg text-[#333333] font-mem
                 leading-[27px]'>Consultation</p>
                <h2 className='text-[40px] font-bold text-[#1B1D48] leading-[48px]'>We have almost 25+ years of experience in <br /><span className='text-[#38A27B]'>Design Consultation</span></h2>
            </dev>
            <div className='pt-32 px-[20px] lg:px-[145px]'>
                <img className='w-full sm:sml-Cimg lg:Cimg' src={Cimg} alt="" />
            </div>
            <ConsultetionNavbar/>
            <ConsultetionAboutTC/>
            <ConsultetionWWL/>
            <PricingCategory/>
            <ConsultetionFAQ/>
            <ConsultationReviews/>
        </div>

    );
};

export default Consultation;