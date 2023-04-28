import React from "react";

const AdminHeader = () => {
  return (
    <div className="bg-[#F8F8FF]">
      <div className="grid lg:grid-cols-[1fr_168px] justify-between items-center w-[1100px] mx-auto">
        <div className="">
          <h2 className="text-[#333333] font-bold text-xl">Hello, Mondol!</h2>
          <p className="text-[##666666] text-[12px]">Good Morning, Let's start learning</p>
        </div>
        <div className=" grid grid-cols-2 justify-center items-center">
          <div>
            <h2 className="text-[#333333] text-[16px] text-[500] leading-[24px]">Olivia Rhye</h2>
            <p className="text-[#666666] text-[400] text-[14px] text-right">Admin</p>
          </div>
          <div>
            <div className="avatar">
              <div className="w-[40px] rounded-full">
                <img alt="" src="https://i.ibb.co/rGWFRZ3/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
