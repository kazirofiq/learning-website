import React from 'react';
import { Bs0CircleFill, BsCheckCircle } from "react-icons/bs";
import published from "../../../assest/admintable/Status2.png";
import published1 from "../../../assest/admintable/Rectangle 29.png";
import published2 from "../../../assest/admintable/Rectangle-27.png";
import published3 from "../../../assest/admintable/Rectangle-28.png";
import { FaEllipsisH } from "react-icons/fa";
import "./DraftCourse.css";
const DraftCourse = () => {
    return (
        <div className="overflow-x-auto mt-6 table-back w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <td className="text-[12px]  text-[#666666] text-[500]">COURSE</td>
              <td className="text-[12px]  text-[#666666] text-[500]">
                Category
              </td>
              <td className="text-[12px]  text-[#666666] text-[500]">Price</td>
              <td className="text-[12px]  text-[#666666] text-[500]">Status</td>
              <td className="text-[12px]  text-[#666666] text-[500]"></td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <img src={published2} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] text[16px]">
                      Beginer to Pro Web design and development
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                Web design
              </td>
              <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                $150.00
              </td>
              <th>
                <img className="cursor-pointer" src={published} alt="" />
              </th>
              <td>
                <FaEllipsisH className="text-[#333333] text-end cursor-pointer"></FaEllipsisH>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <img src={published1} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] text[16px]">
                      Illustrator Basic To Advance
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-[#333333] text[16px] leading-[24px]">
                Graphic design
              </td>
              <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                $75.00
              </td>
              <td>
                <img className="cursor-pointer" src={published} alt="" />
              </td>
              <th>
                <FaEllipsisH className="text-[#333333] cursor-pointer text-right"></FaEllipsisH>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <img src={published3} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] text[16px]">
                      Illustrator Basic To Advance
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-[#333333] text[16px] leading-[24px]">
                UI/UX design
              </td>
              <td className="text-[#333333] tex-[400] text[16px] leading-[24px]">
                $150.00
              </td>
              <th>
                <img className="cursor-pointer" src={published} alt="" />
              </th>
              <th>
                <FaEllipsisH className="text-[#333333] cursor-pointer text-right"></FaEllipsisH>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default DraftCourse;