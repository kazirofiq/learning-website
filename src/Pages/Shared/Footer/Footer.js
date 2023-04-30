import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (White).png';
import { AiFillLinkedin, AiFillMail, AiFillYoutube } from 'react-icons/ai';
import { FaAddressBook, FaFacebook } from 'react-icons/fa';
import ssl from '../../../assest/banner/final.jpg'
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='w-full text-base-content shadow-none'>
            <footer className="footer bg-[#1B1D48] py-24 justify-between w-full mx-auto text-white px-[145px]">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-white'>
                        <span>Learn With Rakib is an interesting <br /> platform that will teach you in <br /> more an interactive way</span>
                    </p>
                    <div className='flex gap-5'>
                        <Link className='text-2xl' to='https://www.facebook.com/groups/learnwithrakib'><FaFacebook></FaFacebook></Link>
                        {/* <Link><img src={twitter} alt="" /></Link> */}
                        <Link to='https://www.youtube.com/@learnwithrakib17'><AiFillYoutube className='text-2xl'></AiFillYoutube></Link>
                        <Link to='https://www.linkedin.com/in/learnwithrakib/'><AiFillLinkedin className='text-2xl'></AiFillLinkedin></Link>
                    </div>
                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Useful Link</span>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/premium_course" className="link link-hover">Course</Link>
                    <Link to="/resource" className="link link-hover">Resource</Link>
                    <Link to="/consultetion" className="link link-hover">Service</Link>
                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Contact Us</span>
                    <div className='flex'><FiPhoneCall className='mr-4'></FiPhoneCall><Link className="link link-hover">+8801612-039047</Link></div>
                    <div className='flex'><AiFillMail className='mr-4'></AiFillMail><Link className="link link-hover">support@learnwithrakib.pro</Link></div>
                    <div className='flex'><FaAddressBook className='mr-4'></FaAddressBook><Link className="link link-hover">Nilkanth, Atiyatari, Khatkhatia, Parashuram, Rangpur</Link></div>

                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Company</span>
                    <Link to='/aboutUs' className="link link-hover">About us</Link>
                    <Link to='/refund' className="link link-hover">Refund Policy </Link>
                    <Link to='/privacyPolicy' className="link link-hover">Privacy Policy</Link>
                    <Link to='/termsAndCondition' className="link link-hover">Terms and Conditions</Link>
                </div>
                {/* <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div> */}
            </footer>
            <div>
                <img src={ssl} alt="" />
            </div>
            <footer className="footer bg-[#1B1D48] footer-center p-4 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by  Learn With Rakib</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;