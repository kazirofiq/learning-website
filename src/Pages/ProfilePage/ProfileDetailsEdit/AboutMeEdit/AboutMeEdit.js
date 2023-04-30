import React, { useState } from 'react';
import rightArrow from "../../../../assest/icon/right arrow.png";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
const AboutMeEdit = ({ refetch}) => {
  // const { _id, name, designation, designation_to, date } = about;
  const {user}= useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const handleEditPromotion = (data) => {
        const about = {
          name: data.name,
          email: data.email,
          studentId: data.StudentId,
          phone: data.phone,
          gender: data.gender,
          date: data.date,
        };
    
        // save clients information to the database
        fetch(`http://localhost:5000/users/uid?uid=${user?.uid}`, {
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
            // setEditingAboute(null);
            refetch();
          })
          .catch(err => console.error(err))
      };

    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState("Select");

    // const items = ["Male", "Female", "Other"];

    // const toggleSelect = () => setIsOpen(!isOpen);

    // const handleItemClick = (item) => {
    //     setSelectedItem(item);
    //     setIsOpen(false);
    // };

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
              // onClick={() => setEditingAboute(null)}
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
                  <input
                    name="name"
                    defaultValue={user?.name}
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
        //     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        //     <div className="modal">
        //         <div className="relative mx-auto bg-white rounded-[20px]">
        //             <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        //             <div className="lg:mt-[52px] poppins mt-4 max-w-[925px] p-5 md:p-2 md:px-6 lg:px-20 lg:pb-10">
        //                 <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
        //                     About Me
        //                 </h1>
        //                 <div className="lg:grid md:grid flex lg:flex-row flex-col grid-cols-2 gap-x-[20px]">
        //                     <div className="mt-3">
        //                         <label
        //                             htmlFor="name"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             Name
        //                         </label>
        //                         <input
        //                             type="text"
        //                             id="name"
        //                             placeholder="Name"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                         />
        //                     </div>
        //                     <div className="mt-3">
        //                         <label
        //                             htmlFor="StudentId"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             Student Id
        //                         </label>
        //                         <input
        //                             type="text"
        //                             id="StudentId"
        //                             placeholder="Student Id"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                         />
        //                     </div>
        //                     <div className="mt-3">
        //                         <label
        //                             htmlFor="Email"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             Email
        //                         </label>
        //                         <input
        //                             type="email"
        //                             id="Email"
        //                             placeholder="Email"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                         />
        //                     </div>
        //                     <div className="mt-3">
        //                         <label
        //                             htmlFor="Phone"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             Name
        //                         </label>
        //                         <input
        //                             type="number"
        //                             id="Phone"
        //                             placeholder="Phone"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                         />
        //                     </div>
        //                     <div className="mt-3">
        //                         <label
        //                             htmlFor="dob"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             D.O.B
        //                         </label>
        //                         <input
        //                             type="date"
        //                             id="dob"
        //                             placeholder="Name"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                         />
        //                     </div>

        //                     {/* select field */}
        //                     <div className="relative mt-3">
        //                         <label
        //                             htmlFor="Gender"
        //                             className="block text-[#666666] font-normal text-sm mb-2"
        //                         >
        //                             Gender
        //                         </label>
        //                         <button
        //                             type="input"
        //                             id="Gender"
        //                             className="input border-[1px] rounded-[8px] focus:border-[#3D419F]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]"
        //                             aria-haspopup="listbox"
        //                             aria-expanded={isOpen}
        //                             onClick={toggleSelect}
        //                         >
        //                             <span className="block truncate text-left ml-4">
        //                                 {selectedItem}
        //                             </span>
        //                             <span className="absolute inset-y-0 right-[9%] lg:right-[18px] mt-[9%] lg:mt-[7%] flex items-center pr-2 pointer-events-none">
        //                                 <img
        //                                     className={isOpen ? "rotate-90" : ""}
        //                                     src={rightArrow}
        //                                     alt=""
        //                                 />
        //                             </span>
        //                         </button>
        //                         {isOpen && (
        //                             <div className="flex justify-end">
        //                                 <ul
        //                                     className="absolute mt-1 lg:mr-0 text-right w-[81px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
        //                                     tabindex="-1"
        //                                     role="listbox"
        //                                     aria-labelledby="listbox-label"
        //                                     aria-activedescendant="listbox-item-3"
        //                                 >
        //                                     {items.map((item) => (
        //                                         <li
        //                                             key={item}
        //                                             className={`${selectedItem === item
        //                                                 ? "font-medium text-[#1B1D48] text-base pl-4"
        //                                                 : "font-medium text-[#1B1D48] text-base pl-4"
        //                                                 } cursor-pointer select-none relative`}
        //                                             onClick={() => handleItemClick(item)}
        //                                         >
        //                                             <div className="flex items-center">
        //                                                 <span
        //                                                     className={`${selectedItem === item
        //                                                         ? "font-semibold"
        //                                                         : "font-normal"
        //                                                         } block truncate`}
        //                                                 >
        //                                                     {item}
        //                                                 </span>
        //                                             </div>
        //                                         </li>
        //                                     ))}
        //                                 </ul>
        //                             </div>
        //                         )}
        //                     </div>

        //                 </div>
        //                 <div className='flex justify-center items-center mt-5 lg:mt-8'>
        //                     <button className='w-20 border px-2 py-3 bg-[#3D419F] rounded-xl text-white font-semibold'>Save</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AboutMeEdit;