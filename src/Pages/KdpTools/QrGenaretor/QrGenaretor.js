import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

const QrGenaretor = () => {
    const [inputValue, setInputValue] = useState("");
    const qrCodeRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDownload = () => {
        html2canvas(qrCodeRef.current).then((canvas) => {
            const link = document.createElement("a");
            link.download = "qrcode.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };
    return (
        <div>
            <div>
                <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7 w-full md:w-full border bg-[#FFFFFF] rounded-xl shadow-[#E7E7FF] shadow-xl mt-8 lg:mt-0 md:mt-0'>
                    <h3 className='lg:leading-[36px] leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48]'>QR Code Generator</h3>
                    <div className='grid  grid-cols-2 items-center justify-between mt-7'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333]'>Enter URl</p>
                        </div>
                        <div>
                            <input type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter value" className="rounded-lg input input-bordered w-full" />
                        </div>

                    </div>
                    <div ref={qrCodeRef} className='mt-[30px]'>
                        <QRCode
                            id="qr-gen"
                            value={inputValue}
                            className='w-[96px] h-[96px] mx-auto my-4 lg:my-6'
                        />
                    </div>
                    <button onClick={handleDownload} className="justify-center text-center flex mt-[30px] mx-auto  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Download QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QrGenaretor;