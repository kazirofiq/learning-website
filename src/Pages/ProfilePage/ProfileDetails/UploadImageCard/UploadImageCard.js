import React, { useContext } from 'react';
import avatarBig from '../../../../assest/Profile_image/Avatar Big.png';
import uploadIcon from "../../../../assest/icon/upload.png";
import { AuthContext } from '../../../../contexts/AuthProvider';
const UploadImageCard = () => {
    const {user, updateUser} = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    
    const updateProfileImage = (e) =>{
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
            })
            .then((res) => res.json())
            .then((imgData) => {
                if(imgData.success){
                    console.log(imgData.data.url);
                    const imageLink = {
                        photoURL: imgData.data.url    
                    }  
                    updateUser(imageLink)
                    .then(() =>{

                    })
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }
    return (
        <div className="card w-[263px] lg:w-full bg-base-100 mt-6">
            <div className='flex items-center'>
                <img className='w-24 h-24 lg:w-[120px] lg:h-[120px] mr-6 rounded-full' src={user?.photoURL} alt="" />
                <div>
                    <input onChange={updateProfileImage} type="file" id="upload" hidden />
                    <label for="upload" className='lg:inline-block flex justify-center items-center lg:w-[173px] lg:h-10 h-[37px] w-[151px] bg-[#3D419F] lg:py-2 lg:px-4 rounded-[10px] cursor-pointer'>
                        <div className='flex items-center justify-center'>
                            <img className='mr-[10px] w-4 h-4 lg:w-6 lg:h-6' src={uploadIcon} alt="" />
                            <span className='text-[#FFFFFF] font-medium lg:text-base text-sm'>
                                Upload Photo
                            </span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UploadImageCard;