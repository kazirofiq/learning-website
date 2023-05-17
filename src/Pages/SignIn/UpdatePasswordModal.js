import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from './../../contexts/AuthProvider';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const UpdatePasswordModal = () => {
    const {passwordReset}=useContext(AuthContext);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    passwordReset(data?.email)
    .then(() => {
        swal("Password reset email sent. Check your email");
        reset()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
            icon: 'error',
            title: `${data?.email}`,
            text: 'This Email was not found',
          })
      });
    
};

    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="reset-password" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="reset-password" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-gray-950">Forgat password</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
   <div className='flex justify-center items-center flex-col mt-6'>
   <input type="email" {...register("email", { required: true })} placeholder="Type-Email" className="border-[1px] border-[#ddd] focus:border-[#3D419F] focus:outline-none text-gray-950 font-semibold input input-bordered w-full max-w-xs" />
   {
   errors.email 
   && 
   <span className='text-red-600 w-full max-w-xs'>Type your Email</span>
   }
   </div>
    <div className='flex justify-center items-center'>
    <input id='reset-password' value="Send" type="submit" className='w-20 border mt-5 px-2 py-3 bg-[#3D419F] rounded-xl text-white font-semibold cursor-pointer' />
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default UpdatePasswordModal;