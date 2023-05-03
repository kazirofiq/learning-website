import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const TaskList = ({ data }) => {
    //   console.log(data)
    const [selectedText, setSelectedText] = useState('');
    const [isChecked, setIsChecked] = useState(data?.selecTed);
    // console.log(isChecked)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    //   task list update
    const setSelectedData = (_id) => {
        if (selectedText.length && _id) {
            const taskListData = {
                taskList: selectedText,
                selecTed: !isChecked,
            }
            fetch(`http://localhost:5000/task-list/${_id}`, {
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
                        // swal("Success", "Coupon code updated successfully", "success");
                    }
                })
                .catch(err => console.error(err))
        }

    }

    // task list delete
    const taskListDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want ot delete it",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task-list/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Successfully Deleted',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div key={data?._id} className=' py-2  px-3 border-b-2 grid grid-cols-[1fr_20px] items-center'>
            <div className="form-control">
                <label onClick={() => setSelectedData(data?._id)} className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                    <input type="checkbox" onClick={(e) => setIsChecked(e.target.checked)} defaultChecked={data?.selecTed && "checked"} />
                    <span onClick={(e) => setSelectedText(e.target.innerText)} className="pl-2">{data?.taskList}</span>
                </label>
            </div>
            <MdDelete onClick={() => taskListDelete(data?._id)} className='text-gray-900 mx-auto hover:text-red-600 cursor-pointer' />
        </div>
    );
};

export default TaskList;