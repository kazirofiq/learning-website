import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const UpdateCuponCode = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    // get coupon API
    const [couponData, setCouponData]=useState([]);
    // console.log(couponData)
    const couponID = couponData[0]?._id;
    const couponCode = couponData[0]?.value;
    const discount = couponData[0]?.discount;

    useEffect(()=>{
        fetch('http://localhost:5000/coupon')
        .then(res=>res.json())
        .then(data=>setCouponData(data))
    },[couponData])

  const getCoupon = data => {
    console.log(data)
    const updateCouponData = {
        value: data?.coupon,
        discount: data?.discount
    }
    if(data?.coupon && data?.discount){
        fetch(`http://localhost:5000/coupon/${couponID}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updateCouponData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data?.acknowledged) {
                                swal("Success", "Coupon code updated successfully", "success");
                            }
                        })
                        .catch(err => console.error(err))
    }
    reset();
};


    return (
        <div className='h-screen  flex items-center justify-center'>
            <div className="card w-[500px] bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-gray-950 w-full max-w-xs mx-auto"><span className='text-sm text-[#3D419F] font-semibold'>Coupon= {couponCode} || Discount= {discount}%</span></h2>
    <form onSubmit={handleSubmit(getCoupon)} className='mt-6'>
   <div className='flex justify-center flex-col items-center'>
  <input type="text" {...register("coupon", { required: true })} placeholder="Type coupon" className="border-[1px] border-[#ddd] focus:border-[#3D419F] focus:outline-none input w-full max-w-xs text-gray-950 font-semibold" />
 
  {
  errors.coupon && <span className='text-red-600 text-sm w-full max-w-xs'>Type coupon</span>
  }

  </div>
  <div className='flex justify-center flex-col items-center'>
   <input type="number" {...register("discount", { required: true })} placeholder="Type discount %" className="border-[1px] border-[#ddd] focus:border-[#3D419F] focus:outline-none input w-full max-w-xs text-gray-950 font-semibold mt-5" />
   {errors.discount && <span className='text-red-600 text-sm text-start w-full max-w-xs'>Type Discount</span>}
  </div>
    <div className="card-actions justify-center mt-5">
    <input
              className="w-[288px] h-[51px] font-bold text-[18px] text-white btn bg-[#3D419F] hover:bg-[#3D419F] capitalize"
              type="submit"
              value="Update"
            />
    </div>
    </form>
   
  </div>
</div>
        </div>
    );
};

export default UpdateCuponCode;