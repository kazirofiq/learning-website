import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';

const TaskList = ({ data, taskList, dateFormate, _id }) => {
    //   console.log(data)
    const [selectedText, setSelectedText] = useState('');
    const [isChecked, setIsChecked] = useState(data?.selecTed);
    // console.log(isChecked)
    const { user } = useContext(AuthContext);
    const { displayName, email, uid } = user;

    const taskListData = {
        [dateFormate]: [{
            taskList: taskList?.taskList,
            selecTed: false,
            userName: displayName,
            email: email,
            userId: uid,
        }]
    }


    //   task list update
    const setSelectedData = (id) => {
        if (selectedText.length && id) {
            const taskListData = {
                taskList: selectedText,
                selecTed: !isChecked,
            }
            fetch(`http://localhost:5000/task-list/${id}`, {
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
    const taskListDelete = (id) => {
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
                fetch(`http://localhost:5000/task-list/${_id}/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
        <div key={data?._id} className=' py-2  px-3 border-b-2 items-center'>
            <div className="form-control">
                <label onClick={() => setSelectedData(data?._id)} className="cursor-pointer  flex items-center text-[#666666] text-[14px]">
                    {/* <input type="checkbox" onClick={(e) => setIsChecked(e.target.checked)} defaultChecked={data?.selecTed && "checked"} /> */}
                    <span onClick={(e) => setSelectedText(e.target.innerText)} className="pl-2">{data?.taskList}</span>
                </label>
            </div>

        </div>
    );
};

export default TaskList;