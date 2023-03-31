import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/Logo (White).png';
import fb from '../../../assest/icon/fb.png';
import instagram from '../../../assest/icon/instagram.png';
import linkedin from '../../../assest/icon/linkdin.png';
import twitter from '../../../assest/icon/twitter.png';

const Footer = () => {
    return (
        <div className='w-full text-base-content shadow-none'>
            <footer className="footer bg-[#1B1D48] p-16 justify-between w-full mx-auto text-white">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-white'>
                        <span>Learn With Rakib is an interesting <br /> platform that will teach you in <br /> more an interactive way</span>
                    </p>
                    <div className='flex gap-5'>
                        <Link><img src={fb} alt="" /></Link>
                        <Link><img src={twitter} alt="" /></Link>
                        <Link><img src={instagram} alt="" /></Link>
                        <Link><img src={linkedin} alt="" /></Link>
                    </div>
                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Useful Link</span>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">Course</Link>
                    <Link className="link link-hover">Resource</Link>
                    <Link className="link link-hover">Service</Link>
                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Contact Us</span>
                    <Link className="link link-hover">+880 1781-251002</Link>
                    <Link className="link link-hover">Mondolgd111@gmail.com</Link>
                    <Link className="link link-hover">Street, Magura-7611,Khulna</Link>
                </div>
                <div>
                    <span className="font-bold uppercase text-[700] text-white">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Refund</Link>
                    <Link className="link link-hover">Privacy</Link>
                    <Link className="link link-hover">Terms & Condition</Link>
                </div>
                {/* <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div> */}
            </footer>
            <footer className="footer bg-[#3D419F] footer-center p-4 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;