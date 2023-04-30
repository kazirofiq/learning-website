import React, { useContext, useState } from 'react';
import { toast } from 'react-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';

const EducationEdit = () => {

  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const handleEditEducation = (data) => {
  //     const education = {
  //       name: data.name,
  //       email: data.email,
  //       studentId: data.StudentId,
  //       phone: data.phone,
  //       gender: data.gender,
  //       date: data.date,
  //     };

  //     // save clients information to the database
  //     fetch(`https://learn-with-rakib-server-three.vercel.app/users/uid?uid=${user?.uid}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(education),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         toast.success(`${data.name} is update successfully`);
  //         // setEditingAboute(null);
  //         // refetch();
  //       })
  //       .catch(err => console.error(err))
  //   };


  // const [isChecked, setIsChecked] = useState(Boolean);
  // const checkSwitch = (value) => {
  //     return setIsChecked(!value);
  // }

  return (

    <>
      <div className=" w-full">
        <input
          type="checkbox"
          id="editEducationModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box pt-12">
            <label
              // onClick={() => setEditingAboute(null)}
              htmlFor="editEducationModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form
            //   onSubmit={handleSubmit(handleEditEducation)}
            >
              <div className="grid grid-cols-2 gap-4 items-center">

                <div>
                  <label className='text-black'>Your Education level</label>
                  <input
                    name="name"
                    //   defaultValue={user?.name}
                    type="text"
                    // defaultValue={user?.displayName}
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
                  <label>Your Education level</label>
                  <input
                    name="studentId"
                    // defaultValue={name}
                    type="text"

                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("studentId", {
                      required: "Student Id is required",
                    })}
                  />
                  {errors.studentId && (
                    <p className="text-red-600" role="alert">
                      {errors.studentId?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    // defaultValue={editingaboute.email}
                    name="email"
                    type="email"
                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
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
                  <input
                    name="Phone"
                    // defaultValue={name}
                    type="number"
                    // defaultValue={user?.displayName}
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
                  <select
                    name="gender"
                    // defaultValue={designation_to}
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
                  className="cursor-pointer hover:bg-slate-900 px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div>
    //     <div>
    //         <input type="checkbox" id="edit-education-modal" className="modal-toggle" />
    //         <div className="modal">
    //             <div className="relative mx-auto bg-white rounded-[20px]">
    //                 <label htmlFor="edit-education-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    //                 <div className="lg:mt-[52px] poppins mt-4 max-w-[925px] p-5 md:p-2 md:px-6 lg:px-20 lg:pb-10">
    //                     <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
    //                         Education
    //                     </h1>
    //                     <div className='lg:grid md:grid flex lg:flex-row flex-col grid-cols-2 gap-x-[20px]'>
    //                         <div className='mt-3'>
    //                             <label htmlFor="education" className='block text-[#666666] font-normal text-sm mb-2'>Your Education level</label>
    //                             <input type="text" id='education' placeholder="Type Education level" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
    //                         </div>
    //                         <div className='flex flex-col-reverse lg:hidden'>
    //                             <div className='mt-3'>
    //                                 <label htmlFor="Degree-Title" className='block text-[#666666] font-normal text-sm mb-2'>Exam/Degree Title</label>
    //                                 <input type="text" id='Degree-Title' placeholder="Exam/Degree Title" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
    //                                 <div className='flex justify-start items-center'>

    //                                     <input
    //                                         type="checkbox"
    //                                         id="graduated"
    //                                         name="graduated"
    //                                         value="yes"
    //                                         className="opacity-0 absolute h-[18px] w-[18px] cursor-pointer text-[#666666]"
    //                                         onClick={() => checkSwitch(isChecked)}
    //                                     />
    //                                     <div className="bg-white border-2  border-[#666666] w-[16px] h-[16px] flex  flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#666666]">
    //                                         <svg
    //                                             className="fill-current hidden h-[18px] w-[18px] pointer-events-none text-[#666666]"
    //                                             version="1.1"
    //                                             viewBox="0 0 17 12"
    //                                             xmlns="http://www.w3.org/2000/svg"
    //                                         >
    //                                             <g fill="none" fill-rule="evenodd">
    //                                                 <g
    //                                                     transform="translate(-9 -11)"
    //                                                     fill="#3D419F"
    //                                                     fill-rule="nonzero"
    //                                                 >
    //                                                     <path className="" d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
    //                                                 </g>
    //                                             </g>
    //                                         </svg>
    //                                     </div>
    //                                     <label htmlFor='graduated' className="label cursor-pointer font-normal text-xs text-[#666666]">
    //                                         Graduated</label>
    //                                 </div>
    //                             </div>
    //                             <div className='mt-3'>
    //                                 <label htmlFor="Institution-Name" className='block text-[#666666] font-normal text-sm mb-2'>Institution Name</label>
    //                                 <input type="text" id='Institution-Name' placeholder="Institution-Name" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

    //                             </div>
    //                         </div>
    //                         <div className='mt-3 lg:block hidden'>
    //                             <label htmlFor="Degree-Title" className='block text-[#666666] font-normal text-sm mb-2'>Exam/Degree Title</label>
    //                             <input type="text" id='Degree-Title' placeholder="Exam/Degree Title" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
    //                             <div className='flex justify-start items-center'>

    //                                 <input
    //                                     type="checkbox"
    //                                     id="graduated"
    //                                     name="graduated"
    //                                     value="yes"
    //                                     className="opacity-0 absolute h-[18px] w-[18px] cursor-pointer text-[#666666]"
    //                                     onClick={() => checkSwitch(isChecked)}
    //                                 />
    //                                 <div className="bg-white border-2  border-[#666666] w-[16px] h-[16px] flex  flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#666666]">
    //                                     <svg
    //                                         className="fill-current hidden h-[18px] w-[18px] pointer-events-none text-[#666666]"
    //                                         version="1.1"
    //                                         viewBox="0 0 17 12"
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                     >
    //                                         <g fill="none" fill-rule="evenodd">
    //                                             <g
    //                                                 transform="translate(-9 -11)"
    //                                                 fill="#3D419F"
    //                                                 fill-rule="nonzero"
    //                                             >
    //                                                 <path className="" d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
    //                                             </g>
    //                                         </g>
    //                                     </svg>
    //                                 </div>
    //                                 <label htmlFor='graduated' className="label cursor-pointer font-normal text-xs text-[#666666]">
    //                                     Graduated</label>
    //                             </div>
    //                         </div>
    //                         <div className='mt-3 lg:block hidden'>
    //                             <label htmlFor="Institution-Name" className='block text-[#666666] font-normal text-sm mb-2'>Institution Name</label>
    //                             <input type="text" id='Institution-Name' placeholder="Institution-Name" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

    //                         </div>
    //                         {
    //                             isChecked
    //                             &&
    //                             <div className='mt-3'>
    //                                 <label htmlFor="Passing-year" className='block text-[#666666] font-normal text-sm mb-2'>Approximate Passing year</label>
    //                                 <input type="text" id='Passing-year' placeholder="Approximate Passing year" className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
    //                             </div>
    //                         }

    //                     </div>
    //                     <div className='flex justify-center items-center mt-5 lg:mt-8'>
    //                         <button className='w-20 border px-2 py-3 bg-[#3D419F] rounded-xl text-white font-semibold'>Save</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default EducationEdit;