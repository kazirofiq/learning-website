import React from 'react';
import downloadIcon from '../../assest/icon/downlaod.png';
import './OrderHistory.css';

const OrderHistory = () => {
    return (
        <section className=''>

            <div class="overflow-x-auto bshadow poppins">
                <h2 className="text-xl text-[#1B1D48] py-[16px] px-[19px] font-semibold leading-[30px]">Order History</h2>
            <table class="table w-full">
                <thead>
                    <tr className='border-b-2 leading-[18px]'>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left ">
                            Date
                        </th>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left ">
                            Course
                        </th>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left">
                            Price
                        </th>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left">
                            Method
                        </th>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left">
                            Status
                        </th>
                        <th class="px-5 py-3 bg-color text-[#333333] font-normal text-xs text-left">
                            Invoice
                        </th>
                    </tr>
                </thead>
                <tbody className='leading-[21px]'>
                    <tr className='border-botom'>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[128px]">
                            30 Jan, 2023
                        </td>

                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[25%px]">
                            Graphic Design Bootcamp: Photoshop, Illustrator, InDesign
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            $150
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            Bkash
                        </td>
                        <td class="px-5 py-5 text-white font-normal text-sm w-[121px]">
                            <button className='paid-button flex items-center justify-between'><span className='round-white'></span>Paid</button>
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm w-[91px]">
                            <img src={downloadIcon} alt='download icon' />
                        </td>
                    </tr>
                    <tr className='border-botom'>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[128px]">
                            30 Jan, 2023
                        </td>

                        <td class="px-5 py-5 text-[#333333] font-normal text-sm w-[278px]">
                            Graphic Design Bootcamp: Photoshop, Illustrator, InDesign
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            $150
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            Bkash
                        </td>
                        <td class="px-5 py-5 text-white font-normal text-sm w-[121px]">
                            <button className='failed-button flex items-center justify-between'><span className='round-white'></span>Failed</button>
                        </td>

                    </tr>
                    <tr className='border-botom'>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[128px]">
                            30 Jan, 2023
                        </td>

                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[278px]">
                            Graphic Design Bootcamp: Photoshop, Illustrator, InDesign
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            $150
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            Bkash
                        </td>
                        <td class="px-5 py-5 text-white font-normal text-sm w-[121px]">
                            <button className='cancel-button flex items-center justify-between'><span className='round-white'></span>Cancel</button>
                        </td>

                    </tr>
                    <tr className='border-botom'>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[128px]">
                            30 Jan, 2023
                        </td>

                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[278px]">
                            Graphic Design Bootcamp: Photoshop, Illustrator, InDesign
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            $150
                        </td>
                        <td class="px-5 py-5 text-[#333333] font-normal text-sm  w-[100px]">
                            Bkash
                        </td>
                        <td class="px-5 py-5 text-white font-normal text-sm w-[121px]">
                            <button className='paid-button flex items-center justify-between'><span className='round-white'></span>paid</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        </section >
    );
};

export default OrderHistory;