import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai'
import UploadedImage from './UploadedImage';
import UploadFile from './UploadFile';
import Cross from '../../../assest/icon/Cross.png';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
// import swal from 'sweetalert';
import Swal from 'sweetalert2'
import TaskList from './TaskList';
import { AuthContext } from '../../../contexts/AuthProvider';
const Planner = () => {
  const [addTask, setAddTask] = useState(false);

  const [allTaskList, setAllTaskList] = useState([]);

  // use authContext
  const {user}=useContext(AuthContext);
  console.log(user);
  const {displayName,email,uid}=user;
  // const [selectedText, setSelectedText] = useState('');
  // const [isChecked, setIsChecked] = useState(false);
  // // console.log(isChecked)

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const getTaskList = data => {
    const taskListData = {
      taskList: data?.taskList,
      selecTed: false,
      userName: displayName,
      email: email,
      userId: uid
    }
    fetch("http://localhost:5000/task-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskListData)
    })
      .then(res => res.json())
      .then(data => {
        //   console.log(data);
        if (data?.acknowledged) {
          toast.success("Task add successfully");
          reset();
        }
      })
      .catch(err => console.error(err))
  };

  // const setSelectedData = (_id) => {
  //   if (selectedText.length && _id) {
  //     const taskListData = {
  //       taskList: selectedText,
  //       selecTed: isChecked
  //     }
  //     console.log(taskListData);
  //     fetch(`http://localhost:5000/task-list/${_id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(taskListData)
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data)
  //         if (data?.acknowledged) {
  //           // swal("Success", "Coupon code updated successfully", "success");
  //         }
  //       })
  //       .catch(err => console.error(err))
  //   }

  // }

  useEffect(() => {
    fetch(`http://localhost:5000/task-list/${email}`)
      .then(res => res.json())
      .then(data => setAllTaskList(data))
  }, [allTaskList, email])

 
  return (
    <div className='bg-[#F8F8FF]  lg:px-0 md:px-0 py-8 lg:py-[60px] md:py-[50px]'>
      <div className='bg-[rgb(255,255,255)] w-full max-w-[825px]   py-5 lg:my-6 md:py-6 shadow-md rounded-xl'>
        <div>
          <h3 className='px-3 pb-4 text-2xl font-bold'>My Planner</h3>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-y-0 gap-x-0  border-b-2'>
            <div className='  border-r-2'>
              <div className='bg-[#F8F8FF] py-3  px-3 text-gray-500'> Task list</div>
              {
                allTaskList.length ? allTaskList.map(data =>
                  <TaskList data={data} />
                )
                  :
                  <div className='flex justify-center items-center mt-10'>
                    <h1 className='text-red-500'>Task list has not been added yet</h1>
                  </div>
              }


            </div>
            <div className=''>
              <div className='bg-[#F8F8FF] py-3 px-3 text-gray-500'>Note</div>
              <div className='py-1 px-3  border-b-0'>
                <p className='text-gray-500'>Just a quick reminder that today's focus is on the KDP interior. Please make sure that all design elements are in place and that the formatting is correct.
                  Remember to double-check for any errors before uploading the file. Let's aim for a polished and professional final product. Don't hesitate to ask for Mentor if needed.
                </p>
              </div>
            </div>
          </div>
          {
            addTask && <form onSubmit={handleSubmit(getTaskList)}>
              <div className='w-full px-10 mt-5'>
                <div className='flex justify-end items-center'>
                  <img onClick={() => setAddTask(false)} title='close' className='cursor-pointer' src={Cross} alt="" />
                </div>
                {/* <div className='w-[291px] h-12 border-[1px] border-[#C3C4E1] rounded-[10px] flex items-center px-4 py-3'> */}
                <input {...register("taskList", { required: true })} type="text" placeholder="Add Task List" className="input w-full h-12 border-[1px] border-[#C3C4E1] rounded-[10px] flex items-center px-4 py-3 text-gray-950" />
                {errors.taskList && <span className='text-red-600'>Field is required</span>}
                {/* </div> */}
                <div className='flex justify-end items-center mt-1'>
                  <button type='submit' className="btn btn-sm bg-[#3D419F] hover:bg-[#3D419F] cursor-pointer text-white">Save</button>
                </div>
              </div>
            </form>
          }

          <div className='py-5 border-b-2 px-3'>
            <button onClick={() => setAddTask(true)} className='px-3 py-2 border rounded-lg text-gray-950'><AiOutlinePlus className='inline text-gray-950' /> Add Task</button>
          </div>
        </div>
        <div>
          <UploadFile />
        </div>
        <UploadedImage />
      </div>
    </div>
  );
};

export default Planner;