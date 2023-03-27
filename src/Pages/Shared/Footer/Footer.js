import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div
            style={{
                height: '386px'
            }}
            className='w-full bg-slate-100 text-base-content shadow-none'>
            <footer className="footer p-10 justify-between w-full mx-auto mt-20">
                <div>
                    <img className='w-1/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUEwts4uoA2Zk4uGFSWayTNfoLgraSoxF2g&usqp=CAU' alt="" />
                    <p >
                        <span className='font-bold text-black'>PERFORM TRACKER</span>
                        <br />
                        <span>Platform to evaluate company performance</span>
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;