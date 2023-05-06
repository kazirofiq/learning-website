import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const AdminHeader = () => {
  const { user } = useContext(AuthContext);
  const [salutation, setSalutation] = useState("");

  const getSalutation = () => {
    const h = (new Date()).getHours();

    if (h >= 5 && h < 12) {
      setSalutation("Morning")
    } else if (h >= 12 && h < 15) {
      setSalutation("Noon")
    } else if (h >= 15 && h < 18) {
      setSalutation("Afternoon")
    } else if ((h >= 18 && h <= 24) || (h >= 0 && h < 5)) {
      setSalutation("Evening");
    } else {
      setSalutation("Day");
    }
  }

  useEffect(() => {
    getSalutation();
  }, []);

  return (
    <div className="bg-[#F8F8FF]">
      <div className="grid lg:grid-cols-2 justify-between items-center w-[1100px] mx-auto">
        <div className="">
          <h2 className="text-[#333333] font-bold text-xl">Hello, {user?.displayName}!</h2>
          <p className="text-[##666666] text-[12px]">Good {salutation}, Let's start learning</p>
        </div>
        <div className="flex justify-end items-center gap-2">
          <div>
            <h2 className="text-[#333333] text-[16px] text-[500] leading-[24px]">{user?.displayName}</h2>
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
