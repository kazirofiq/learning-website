import React, { useState } from "react";
import AboutMeEdit from "../../ProfileDetailsEdit/AboutMeEdit/AboutMeEdit";
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AboutMe = () => {
  const { user } = useContext(AuthContext);
  const [editingaboute, setEditingAboute] = useState(null);
  const { data: student = {}, refetch } = useQuery({
    queryKey: ["about", user?.uid],
    queryFn: () =>
      fetch(`http://localhost:5000/users/uid?uid=${user?.uid}`).then((res) => res.json()),
  });

  return (
    <div className="lg:mt-[52px] poppins mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1B1D48] font-medium lg:font-semibold lg:text-base text-lg">
          About Me
        </h1>
        <label onClick={() =>setEditingAboute(student)} 
            htmlFor="editPromotionModal">
          <div className="flex items-center gap-x-1 text-[#1B1D48] cursor-pointer">
            <PencilSquareIcon className='h-4 w-4 lg:h-5 lg:w-5' />
            <p className="font-medium lg:font-semibold lg:text-sm text-sm">Edit</p>
          </div>
        </label>
      </div>
      <div className="lg:grid flex lg:flex-row flex-col grid-cols-2">
        <div className="mt-3">
          <label
            htmlFor="name"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Name
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.name || "N/A"}</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="StudentId"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Student Id
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.studentId || "N/A"}</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="Email"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Email
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student.email || "N/A"}</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="Phone"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Phone
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.phone || "N/A"}</p>
        </div>
        <div className="mt-3">
          <label
            htmlFor="dob"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            D.O.B
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.date || "N/A"}</p>
        </div>
        <div className="relative mt-3">
          <label
            htmlFor="Gender"
            className="block text-[#666666] font-semibold text-sm mb-2"
          >
            Gender
          </label>
          <p className="bg-[#F8F8FF] py-3 px-3 rounded-lg text-[#1B1D48] font-semibold w-full lg:w-[375px] h-[48px]">{student?.gender || "N/A"}</p>
        </div>
      </div>

      {editingaboute && (
        <AboutMeEdit
          // refetch={refetch}
          about={editingaboute}
          refetch={refetch}
          setEditingAboute={setEditingAboute}
        ></AboutMeEdit>
      )}

    </div>
  );
};

export default AboutMe;
