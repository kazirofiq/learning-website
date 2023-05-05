import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { saveAs } from 'file-saver';

const QrGenaretor = () => {
    const [qrData, setQrData] = useState('');

    const handleChange = (e) => {
        setQrData(e.target.value)
    };

    const handleDownload = () => {
        fetch(qrData)
            .then(response => response.blob())
            .then(blob => saveAs(blob, 'image.png'))
            .catch(error => console.error(error));
    };


    // const handleDownload = () => {
    // // Generate download with use canvas and stream
    //     const canvas = document.getElementById("qr-gen");
    //     const pngUrl = canvas
    //         .toDataURL("image/png")
    //         .replace("image/png", "image/octet-stream");
    //     let downloadLink = document.createElement("a");
    //     downloadLink.href = pngUrl;
    //     downloadLink.download = `${qrData}.png`;
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    // };

    return (
        <div>
            <div>
                <div className='px-4 lg:px-8 md:px-7 py-6 lg:py-8 md:py-7 w-full md:w-full bg-[#FFFFFF]  custom_shadow mt-8 lg:mt-0 md:mt-0'>
                    <h3 className='lg:leading-[36px] poppins leading-[30px] text-center md:text-2xl lg:text-2xl text-xl font-semibold text-[#1B1D48]'>QR Code Generator</h3>
                    <div className='flex items-center justify-between mt-6'>
                        <div>
                            <p className='lg:leading-6 md:leading-6 leading-[21px] md:text-base lg:text-base text-sm font-normal text-[#333333]'>Enter URL</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={qrData}
                                onChange={(e) => { handleChange(e) }}
                                placeholder="Enter your link"
                                className="rounded-lg input w-[152px] lg:w-[298px] border-[#C3C4E1] focus:outline-none border-[1px] text-[#333333] placeholder:text-[#CACACA] only-of-type:text-[#333333]" />
                        </div>
                    </div>
                    <QRCode
                        id="qr-gen"
                        value={qrData}
                        className='w-[96px] h-[96px] mx-auto my-4 lg:my-6'
                    />
                    {
                        qrData &&
                        <>
                            <button
                                onClick={handleDownload}
                                className='leading-[21px] lg:leading-[24px] md:leading-[22px] text-sm lg:text-base md:text-base font-semibold text-white rounded-[10px] bg-[#3D419F] md:py-3 lg:py-3 py-2 px-[109px] lg:px-[198px] md:px-[150px] w-full'>Download</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default QrGenaretor;