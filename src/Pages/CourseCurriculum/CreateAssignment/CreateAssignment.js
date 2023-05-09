import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CreateAssignment = ({ moduleNo, lessNo, setModulesData }) => {
    const [assignmentData, setAssignmentData] = useState({
        moduleNo: moduleNo,
        assignment: {
            name: "",
            assignmentNo: 0,
            assignmentDuration: 0,
            isChecked: false,
            result: 0
        }
    })

    const addAssignmentName = e => {
        setAssignmentData(prev => {
            prev.assignment.name = e.target.value
            return { ...prev };
        })
    }

    const addAssignmentDuration = e => {
        setAssignmentData(prev => {
            prev.assignment.assignmentDuration = e.target.value
            return { ...prev };
        })
    }

    const addAssignmentNo = e => {
        setAssignmentData(prev => {
            prev.assignment.assignmentNo = e.target.value
            return { ...prev };
        })
    }

    useEffect(() => {
        setModulesData(prevModules => {
            const index = prevModules.findIndex(prevMod => prevMod.moduleNo === moduleNo);
            // if (!prevModules[index].lessons[prevModules[index].lessons.length - 1].quiz) {
            prevModules[index].assignment = assignmentData.assignment
            return [...prevModules];
            // }
            // return prevModules;
        });
    }, [assignmentData, setModulesData, moduleNo])

    return (
        <div className='mb-10'>
            <label
                htmlFor={`Lesson${moduleNo}_${lessNo}`}
                className="block text-[#666666] font-normal text-sm mb-2"
            >
                Lesson {moduleNo} - {lessNo}: Assignment
            </label>
            <input onBlur={addAssignmentName} type="text" id={`Lesson${moduleNo}_${lessNo}`} placeholder="Assignment Title" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] mb-4" />
            <input onBlur={addAssignmentNo} type="text" placeholder="Assignment Number" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
            <input onBlur={addAssignmentDuration} type="text" placeholder="Assignment Duration (in hour)" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
        </div>
    );
};

export default CreateAssignment;