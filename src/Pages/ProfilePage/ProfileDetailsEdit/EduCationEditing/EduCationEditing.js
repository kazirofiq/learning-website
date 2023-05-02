import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const EduCationEditing = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditEducation = (data) => {
    const education = {
      education: data.education,
      degree: data.degree,
      intitution: data.intitution,
    };

    // save clients information to the database
    fetch(`https://learn-with-rakib.onrender.com/users/uid?uid=${user?.uid}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(education),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${data.name} is update successfully`);
        window.location.reload()
        // setEditingAboute(null);
        // refetch();
      })
      .catch(err => console.error(err))
  };

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
              onSubmit={handleSubmit(handleEditEducation)}
            >
              <div className="grid grid-cols-2 gap-4 items-center">

                <div>
                  <label className='text-black'>Your Education level</label>
                  <input
                    name="education"
                    //   defaultValue={user?.name}
                    type="text"
                    // defaultValue={user?.displayName}
                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("education", {
                      required: "Client Name is required",
                    })}
                  />
                  {errors.education && (
                    <p className="text-red-600" role="alert">
                      {errors.education?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='text-black'>Exam/Degree Title</label>
                  <input
                    name="degree"
                    // defaultValue={name}
                    type="text"

                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("degree", {
                      required: "Student Id is required",
                    })}
                  />
                  {errors.degree && (
                    <p className="text-red-600" role="alert">
                      {errors.degree?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='text-black'>Institution Name</label>
                  <input
                    name="intitution"
                    // defaultValue={name}
                    type="text"

                    className="input input-bordered my-2 w-full rounded-lg  p-3 text-sm bg-[#F8F8FF] placeholder:text-gray-600 text-black"
                    {...register("intitution", {
                      required: "Student Id is required",
                    })}
                  />
                  {errors.intitution && (
                    <p className="text-red-600" role="alert">
                      {errors.intitution?.message}
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

export default EduCationEditing;