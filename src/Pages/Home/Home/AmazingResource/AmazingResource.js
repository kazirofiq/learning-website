import React from 'react';
import image_rectangle from '../../../../assest/amazing_resource/Image.png';
import elements from '../../../../assest/amazing_resource/Elements.png';
import '../AmazingResource/AmazingResource.css';
import { Link } from 'react-router-dom';

const AmazingResource = () => {
    return (
        <section className='w-full  bg-[#1B1D48]' style={{
            backgroundImage: `url(${elements})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: ""
        }}>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center md:mx-[145px] gap-x-[26px] py-[40px] lg:pt-[87px] lg:pb-[55px]'>
                <div className='text-white sm:mt-0 lg:text-left md:text-left text-center mx-auto poppins'>
                    <p className=''>Amazing Resource</p>
                    <p className='lg:block hidden text-[24px] lg:text-[40px] leading-9 lg:leading-[60px] font-bold lg:mt-0 mt-1'>
                        Empower Your Creativity with  <span className='text-[#38A27B]'>Our Resource Hub</span>
                    </p>

                    <p className='block lg:hidden text-[24px] lg:text-[40px] leading-9 lg:leading-[60px] font-bold lg:mt-0 mt-1'>
                        Amazon KDP Book Interior Template <span className='text-[#38A27B]'>Free</span>
                        <span className='text-[#38A27B]'>Download</span>
                    </p>

                    <p className='lg:text-base text-sm leading-5 lg:leading-[24px] lg:mt-8 mt-3 lg:mb-12 mb-6 text-justify'>Unlock a Wealth of Design Assets and Tools for Your Creative <br /> Projects - Enhance Your Work with our Resource Collection.</p>
                    <Link to='/freecorses'>
                        <button className='bg_sm lg:bg text-[#3D419F] text-sm lg:text-lg lg:font-semibold font-medium'>Free Download</button>
                    </Link>
                </div>
                <div className=''>
                    <img src={image_rectangle} alt="" className='' />
                </div>
            </div>
        </section >
    );
};

export default AmazingResource;