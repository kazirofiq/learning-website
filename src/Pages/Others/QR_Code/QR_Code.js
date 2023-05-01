import React from 'react';
import { useState } from 'react';

import QRCode from 'react-qr-code';

const QR_Code = () => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div>
                <h1 className='text-black text-[20px] text-center'>QR Code Generator</h1>
                <QRCode className='mt-4 mx-auto' value={text} />
                <div>
                    <p className='text-black text-base text-center'>Enter your text here</p>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => { handleChange(e) }}
                        placeholder="Enter your link"
                        className="input input-bordered w-full" />
                </div>
            </div>
        </div >
    );
};

export default QR_Code;