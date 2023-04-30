import React from 'react';

import verifyEmail from '../../assest/verify_email/verify_email.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    const { user } = useContext(AuthContext);
    return (
        <section className='h-screen w-screen flex justify-center items-center'>
            <div>
                <div className='flex justify-center items-center'>
                    <img src={verifyEmail} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-center poppins text-black text-[50px] font-normal'>Verify your email</h1>
                    <p className='text-center mt-4 poppins text-black text-[16px] font-normal'>We've sent an email to <Link className='text-blue-600 font-semibold underline' to="https://mail.google.com/">{user?.email}</Link> to verify your email
                        <br />
                        address and active your account. <span className='text-[#333] font-semibold'>(Please check spam folder also)</span></p>
                </div>
            </div>
        </section>
    );
};

export default VerifyEmail;