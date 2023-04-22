import React, { useState } from 'react';
import menuIcon from "../../../../assest/icon/Menu.png";
import dropdownIcon from "../../../../assest/icon/stv.png";
import { FiEdit2 } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import './QuizAccordion.css';

const QuizAccordion = () => {
//   Edit Quiz title state
    const [text, setText]=useState('');
    const [edit, setEdit]=useState(Boolean);
    
    const [isOpen, setIsOpen] = useState(false);


    const clickSwitch =(click)=>{
          return setEdit(!click);
    }

    return (
        <div className='poppins'>
            {/* <div className='grid gap-y-3' id="accordionExample">
            <div id="accordionExample">
  <div
    className="bg-white dark:bg-white">
    <h2 className="mb-0" id="headingOne">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-[#1B1D48] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#F8F8FF] dark:text-[#1B1D48] [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-[#F8F8FF] dark:[&:not([data-te-collapse-collapsed])]:text-[#1B1D48] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        {
            edit 
            ? 
            <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3" />
                <TiTickOutline onClick={()=>clickSwitch(edit)} className='text-2xl text-[#336dec]' title='Save Update' />
            </div>
            :
            <div className='flex items-center'>
                <span className='mr-3'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
                <FiEdit2 onClick={()=>clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
            </div>
        }
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
      <div className="px-5 py-4">
      <div className=''>
          <label
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Option
          </label>
          <div className='grid grid-cols-2 gap-3'>
          <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

      <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

          <div className='flex items-center'>

      <input type="radio" name="radio-2" className="radio radio-info mr-2" />

      <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

</div>

<div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  <div
    className="bg-white dark:bg-white">
    <h2 className="mb-0" id="headingTwo">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-[#1B1D48] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#F8F8FF] dark:text-[#1B1D48] [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-[#F8F8FF] dark:[&:not([data-te-collapse-collapsed])]:text-[#1B1D48] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
         {
            edit 
            ? 
            <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3" />
                <TiTickOutline onClick={()=>clickSwitch(edit)} className='text-2xl text-[#336dec]' title='Save Update' />
            </div>
            :
            <div className='flex items-center'>
                <span className='mr-3'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
                <FiEdit2 onClick={()=>clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
            </div>
        }
        <span
          className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingTwo"
      data-te-parent="#accordionExample">
      <div className="px-5 py-4">
      <div className=''>
          <label
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Option
          </label>
          <div className='grid grid-cols-2 gap-3'>
          <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

      <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

          <div className='flex items-center'>

      <input type="radio" name="radio-2" className="radio radio-info mr-2" />

      <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

</div>

<div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  <div
    className="bg-white dark:bg-white">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-[#1B1D48] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#F8F8FF] dark:text-[#1B1D48] [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-[#F8F8FF] dark:[&:not([data-te-collapse-collapsed])]:text-[#1B1D48] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
         {
            edit 
            ? 
            <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3" />
                <TiTickOutline onClick={()=>clickSwitch(edit)} className='text-2xl text-[#336dec]' title='Save Update' />
            </div>
            :
            <div className='flex items-center'>
                <span className='mr-3'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
                <FiEdit2 onClick={()=>clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
            </div>
        }
        <span
          className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingThree"
      data-te-parent="#accordionExample">
      <div className="px-5 py-4">
      <div className=''>
          <label
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Option
          </label>
          <div className='grid grid-cols-2 gap-3'>
          <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

      <div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>

          <div className='flex items-center'>

      <input type="radio" name="radio-2" className="radio radio-info mr-2" />

      <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />

</div>

<div className='flex items-center'>
          <input type="radio" name="radio-2" className="radio radio-info mr-2" />
          <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div> */}
{/* Accordion items one */}
 <div className="border rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {
            edit 
            ? 
            <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3 text-[#1B1D48]" />
                <TiTickOutline onClick={()=>clickSwitch(edit)} className='text-2xl text-[#1B1D48]' title='Save Update' />
            </div>
            :
            <div className='flex items-center'>
               <div className='flex items-center'>
                <img className='mr-4' src={menuIcon} alt="" />
               <span className='mr-3 text-[#1B1D48] font-medium text-base'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
               </div>
                <FiEdit2 onClick={()=>clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
            </div>
        }
        <img className={isOpen ? "rotate-90":""} src={dropdownIcon} alt="" />
      </div>
      {isOpen && 
       <div className="px-5 py-4">
       <div className=''>
           <label
             className="block text-[#666666] font-normal text-sm mb-2"
           >
             Option
           </label>
           <div className='grid grid-cols-2 gap-3'>
           <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
 
       <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
 
           <div className='flex items-center'>
 
       <input type="radio" name="radio-2" className="radio radio-info mr-2" />
 
       <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
 
 </div>
 
 <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
           </div>
           </div>
       </div>
      }
        </div>
        {/* accordion items two */}
        <div className="border rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {
            edit 
            ? 
            <div className='flex items-center'>
                <input type="text" defaultValue={'What is Your First Reaction To the Product?'} className="input w-[720px] mr-3" />
                <TiTickOutline onClick={()=>clickSwitch(edit)} className='text-2xl text-[#1B1D48]' title='Save Update' />
            </div>
            :
            <div className='flex items-center'>
               <div className='flex items-center'>
                <img className='mr-4' src={menuIcon} alt="" />
               <span className='mr-3 text-[#1B1D48] font-medium text-base'><span>Quiz 1:</span> What is Your First Reaction To the Product?</span>
               </div>
                <FiEdit2 onClick={()=>clickSwitch(edit)} className='text-sm hover:z-50 hover:text-red' title='Edit Quiz' />
            </div>
        }
        <img className={isOpen ? "rotate-90":""} src={dropdownIcon} alt="" />
      </div>
      {isOpen && 
       <div className="px-5 py-4">
       <div className=''>
           <label
             className="block text-[#666666] font-normal text-sm mb-2"
           >
             Option
           </label>
           <div className='grid grid-cols-2 gap-3'>
           <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-01" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
 
       <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-02" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
 
           <div className='flex items-center'>
 
       <input type="radio" name="radio-2" className="radio radio-info mr-2" />
 
       <input type="text" placeholder="option-03" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
 
 </div>
 
 <div className='flex items-center'>
           <input type="radio" name="radio-2" className="radio radio-info mr-2" />
           <input type="text" placeholder="option-04" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[418px] h-[48px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
           </div>
           </div>
           </div>
       </div>
      }
        </div>


        </div>
    );
};

export default QuizAccordion;