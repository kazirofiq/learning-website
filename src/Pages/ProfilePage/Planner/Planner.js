import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import UploadedImage from './UploadedImage';
import UploadFile from './UploadFile';
import Cross from '../../../assest/icon/Cross.png';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import TaskList from './TaskList';
import { AuthContext } from '../../../contexts/AuthProvider';
import { format } from 'date-fns';
const Planner = () => {
  const [addTask, setAddTask] = useState(false);

  const [allTaskList, setAllTaskList] = useState([]);
  // console.log(allTaskList)
  const [getNote, setGetNote] = useState([]);
  const [formData, setFormData] = useState({});
  // use authContext
  const { user } = useContext(AuthContext);
  // edit note state
  const [note, setNote] = useState(false);

  const noteSwich = (value) => {
    return setNote(!value);
  }
  const { displayName, email, uid } = user;

  const date = new Date();
  const dateFormate = format(date, 'dd-MM-yyyy');
  // console.log(dateFormate)
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const getTaskList = data => {

    if (data?.taskList) {
      const taskListData = {
        [
          dateFormate
        ]: [{
          taskList: data?.taskList,
          // addNote: data?.addNote,
          selecTed: false,
          userName: displayName,
          _id: (new Date()).getTime(),
        }],
        email: email,
        userId: uid,
      }

      // console.log(taskListData)
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
    }

    if (data?.note.length) {
      const taskListData = {
        note: data?.note,
        email: email,
        userId: uid,
      }
      fetch(`http://localhost:5000/task-list-note/${getNote?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskListData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data?.acknowledged) {
            toast.success("Note edit successfully");
            setNote(false);
            window.location.reload()
          }
        })
        .catch(err => console.error(err))
    } else if (getNote?.note) {
      const taskListData = {
        note: data?.note,
        email: email,
        userId: uid,
      }
      fetch("http://localhost:5000/task-list-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskListData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data?.acknowledged) {
            toast.success("Note add successfully");
            reset();
            window.location.reload()
          }
        })
        .catch(err => console.error(err))
    }

  }


  // get task note list
  useEffect(() => {
    fetch(`http://localhost:5000/task-list-note/${email}`)
      .then(res => res.json())
      .then(data => setGetNote(data))
  }, [getNote, email])

  // get task list 
  useEffect(() => {
    fetch(`http://localhost:5000/task-list/${email}`)
      .then(res => res.json())
      .then(data => setAllTaskList(data))
  }, [allTaskList, email])

  const deleteTask = () => {
    fetch(`http://localhost:5000/task-list/${user?.email}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("successfully clear task list")
        }
      })
  }
  return (
    <div className='bg-[#F8F8FF] lg:px-0 md:px-0 py-8 lg:py-[60px] md:py-[50px]'>
      <div className='bg-[rgb(255,255,255)] w-full max-w-[825px]   py-5 lg:my-6 md:py-6 shadow-md rounded-none'>
        <div>
          <h3 className='px-3 pb-4 text-2xl font-bold text-gray-950'>My Planner</h3>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-y-0 gap-x-0  border-b-2'>
            <div className='lg:px-4 lg:py-4 py-0 px-0  border-r-2'>
              <div className='py-3 px-3 text-gray-950'>{allTaskList[0] && ((allTaskList[0])[1])}</div>
              {
                allTaskList.length ? allTaskList.map((data, i) =>
                  // console.log(data)
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border faq-box-shadow bg-[#FFFFFF] rounded-none
                   hover:border-[#3D419F] hover:text-[#666666] focus:outline-none focus:text-white   text-[#666666]"
                  >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title lg:text-[18px] md:text-[18px] text-[16px] font-medium bg-[#FFFFFF] text-[#666666] peer-checked:text-[#666666]">

                      {
                        allTaskList[i] && (Object.keys(allTaskList[i])[1])
                      }

                    </div>
                    <div className="collapse-content  bg-[#FFFFFF] text-primary-content  peer-checked:text-[#666666]">
                      {
                        //  console.log(data[Object.keys(data)[1]])
                        data[Object.keys(data)[1]].map(datas =>
                          <TaskList dateFormate={dateFormate} taskList={formData} data={datas} _id={data?._id} />
                        )
                      }
                    </div>
                  </div>
                )
                  :
                  <div className='flex justify-center items-center mt-10'>
                    <h1 className='text-red-500'>Task list has not been added yet</h1>
                  </div>
              }
              <div>

              </div>
            </div>
            <div className=''>
              <div>
                <div className='bg-[#F8F8FF] py-3 px-5 text-gray-500 flex justify-between'><span>Note</span> <AiOutlineEdit onClick={() => noteSwich(note)} className='text-gray-950 text-xl font-normal cursor-pointer' /></div>
              </div>
              <div className='py-1 px-3  border-b-0'>
                {
                  note ? <div>
                    <form onSubmit={handleSubmit(getTaskList)}>
                      <textarea defaultValue={getNote?.note} required {...register("note")} className="textarea border-[1px] border-[#3D419F] focus:outline-none w-full h-[200px] mt-3 text-gray-950 font-semibold" placeholder="Note down what you will do in a week"></textarea>
                      {/* {errors.note && <span className='text-red-600'>This field is required</span>} */}
                      <div className='flex justify-end items-center mb-3 mt-2'>
                        <button type='submit' className="btn btn-sm bg-[#3D419F] hover:bg-[#3D419F] cursor-pointer text-white" >save note</button>
                      </div>
                    </form>
                  </div> : <p className='text-gray-900'>
                    {getNote?.note}
                  </p>
                }
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
                {/* <textarea {...register("addNote", { required: true })} className="textarea textarea-primary" placeholder="Bio"></textarea> */}
                {errors.taskList && <span className='text-red-600'>Field is required</span>}

                {/* </div> */}
                <div className='flex justify-end items-center mt-1'>
                  <button type='submit' className="btn btn-sm bg-[#3D419F] hover:bg-[#3D419F] cursor-pointer text-white">Save</button>
                </div>
              </div>
            </form>
          }

          <div className='py-5 border-b-2 px-3'>
            {
              allTaskList.length === 7 ?
                <button onClick={() => deleteTask()} className='px-3 py-2 border rounded-lg text-gray-950 flex justify-center items-center'><AiOutlinePlus className='inline text-gray-950 mr-1' />Clear-Task-List</button>
                :
                <button onClick={() => setAddTask(true)} className='px-3 py-2 border rounded-lg text-gray-950'><AiOutlinePlus className='inline text-gray-950' />Add Task</button>
            }
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
