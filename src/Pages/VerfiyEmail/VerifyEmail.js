import React from 'react';

import verifyEmail from '../../assest/verifyEmail/verify_email.png'

const VerifyEmail = () => {
    return (
        <section className='h-[602px] flex justify-center items-center'>
            <div>
                <div className='flex justify-center items-center'>
                    <img src={verifyEmail} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-center poppins text-black text-[50px] font-normal'>Verify your email</h1>
                    <p className='text-center mt-4 poppins text-black text-[16px] font-normal'>We've sent an email to ___ to verify your email
                        <br />
                        address and active your account. The link in the email will expire in 1 hours.</p>
                </div>
            </div>
        </section>
    );
};

export default VerifyEmail;