import React, { useState } from 'react';
import rightArrow from "../../../../assest/icon/right arrow.png";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
const AboutMeEdit = ({ refetch, setEditingAboute, about }) => {
  console.log(about, 'about data')
  const {  name, email, studentId, gender, phone } = about;
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleEditPromotion = (data) => {
    const about = {
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      date: data.date,
    };

    // save clients information to the database
    fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(about),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${data.name} is update successfully`);
        setEditingAboute(null);
        refetch();
      })
      .catch(err => console.error(err))
  };

  return (
    <>
      <div className=" w-full">
        <input
          type="checkbox"
          id="editPromotionModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box pt-12">
            <label
              htmlFor="editPromotionModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form
              onSubmit={handleSubmit(handleEditPromotion)}
            >
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label className='text-black'>Your Name</label>
                  <input 
                    name="name"
                    value={name}
                    type="text"
                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("name", {
                      required: "Client Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='text-black'>Student Id</label>
                  <input 
                    disabled
                    name="studentId"
                    defaultValue={studentId}
                    type="text"

                    className="input input-bordered disabled:border-transparent my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 disabled:text-slate-500 disabled:bg-[#ebebf1]"

                  />
                  {errors.studentId && (
                    <p className="text-red-600" role="alert">
                      {errors.studentId?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className=''>Email</label>
                  <input
                    disabled
                    defaultValue={email}
                    name="email"
                    type="email"
                    className="input input-bordered disabled:border-transparent my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 disabled:text-slate-500 disabled:bg-[#ebebf1]"
                  // {...register("designation", {
                  //   required: "Email is required",
                  // })}
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='text-black'>Phone</label>
                  <input
                    name="Phone"
                    defaultValue={phone}
                    type="number"
                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-600" role="alert">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='text-black'>Date</label>
                  <input
                    name="date"
                    // defaultValue={date}
                    type="date"
                    placeholder="date"
                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("date", {
                      required: "Your date is required",
                    })}
                  />
                  {errors.date && (
                    <p className="text-red-600" role="alert">
                      {errors.date?.message}
                    </p>
                  )}
                </div>
                <div>
                  Gender
                  <select
                    name="gender"
                    defaultValue={gender}
                    className="select select-bordered w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black "
                    {...register("gender", {
                      required: "Your Name is required",
                    })}
                  >
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-600" role="alert">
                      {errors.gender?.message}
                    </p>
                  )}
                </div>


              </div>

              <br />
              <div className="modal-action justify-center">
                <input
                  className="cursor-pointer  px-3 py-2 rounded-lg bg-[#3D419F] text-white font-semibold"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeEdit;