import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DragAndDrop = ({ children, title, isUploading, icon, type, workWithFiles, isUploaded }) => {
    const onDrop = useCallback(acceptedFiles => { workWithFiles(acceptedFiles) }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <label htmlFor='Will-Learn' className="label text-[#666666] font-normal text-sm">{title}</label>
            {
                isUploading ? <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
                    <img src={icon} alt="" />
                    <div className='mt-3'>
                        <p className='font-semibold text-sm text-[#333333]'>Uploading ...</p>
                    </div>
                </div> : isUploaded ? <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
                    <img src={icon} alt="" />
                    <div className='mt-3'>
                        <p className='font-semibold text-sm text-[#333333]'>Uploaded</p>
                    </div>
                </div> :
                    <div {...getRootProps()}>
                        <input {...getInputProps()} disabled />
                        {
                            isDragActive
                                ?
                                <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
                                    <img src={icon} alt="" />
                                    <div className='mt-3'>
                                        <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
                                    </div>
                                </div>
                                :
                                <div className='flex justify-center items-center flex-col w-[416px] h-[159px] border-[1px] border-dashed border-[#3D419F] rounded-[12px]'>
                                    <img src={icon} alt="" />
                                    <div className='mt-3'>
                                        <p className='font-semibold text-sm text-[#333333]'>Drag & Drop {type} or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                                        <p className='font-light text-xs text-[#666666]'>{type === "image" ? "SVG, PNG, JPG or GIF (max. 350×250)" : "MP4, MKV, MPEG or WEBM"}</p>
                                    </div>
                                </div>
                        }
                    </div>
            }
            <div>
                {children}
            </div>
        </div>
    );
};

export default DragAndDrop;