import React, { useState } from 'react';
import Modules from '../Modules/Modules';
import { useNavigate, useParams } from 'react-router-dom';
import Buttons from '../../CreateCourse/Buttons/Buttons';
import { server } from '../../../variables/server';


const GreetingsInstroduction = () => {
  const { courseId } = useParams();
  const [modulesArray, setModulesArray] = useState(["modules"]);
  const [modulesData, setModulesData] = useState([{ moduleNo: 1, courseId }]);
  const navigate = useNavigate();

  const addNewModuleFields = () => {
    setModulesArray([
      ...modulesArray,
      "modules"
    ]);
    setModulesData([
      ...modulesData,
      { moduleNo: modulesData.length + 1, courseId }
    ])
  }
  // console.log(modulesData);

  const createModules = e => {
    e.preventDefault();
    const allModules = modulesData;
    const quiz = [];
    modulesData.forEach(mod => (mod.quiz && quiz.push({ quiz: mod.quiz, moduleNo: mod.moduleNo })));
    console.log(quiz);
    if (quiz.length > 0) {
      fetch(`${server}/modules/contents/quiz`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(quiz)
      })
        .then(res => res.json())
        .then(result => {
          result.forEach(r => {
            const index = allModules.findIndex(mod => mod.moduleNo === r.moduleNo)
            allModules[index].lessons.push({ number: r.number, routeName: r.routeName, name: allModules[index].quizName });
            delete allModules[index].quiz;
            delete allModules[index].quizName;
          });
          saveModulesToDB(allModules);
        })
    } else {
      saveModulesToDB(allModules);
    }
    // console.log(allModules);

  }

  const saveModulesToDB = modules => {

    fetch(`${server}/modules/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modules)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged && data.insertedCount > 0) {
          navigate(`/admindashboard/course-create/AddFAQ/${courseId}`);
        }
      })
  }

  return (
    <form onSubmit={createModules} className='poppins'>
      {
        modulesArray.map((_, i) => <Modules
          key={i}
          no={i + 1}
          addNewModuleFields={addNewModuleFields}
          setModulesData={setModulesData}
        />)
      }
      {/* Module 2 style */}
      {/* <div className='flex justify-between items-center mt-[38px]'>
        <h3 className='font-semibold text-lg text-[#1B1D48] mr-3'>Module 2 : Greetings and Instroduction</h3>
        <div>
          <button className="w-[152px] h-[40px] text-[#3D419F] border-[1px] border-[#3D419F] flex items-center justify-center rounded-lg">
            <span>
              <img className='mr-2' src={plusIcon} alt="" />
            </span>
            Add Module
          </button>
        </div>
      </div>
      <div className='mt-3 pb-8 px-6 pt-6 shadow-md rounded-xl bg-[#ffffff]'>
        <label
          htmlFor="Lesson1-1"
          className="block text-[#666666] font-normal text-sm mb-2"
        >
          Lesson 1-2:
        </label>
        <input type="text" id='Lesson1-1' placeholder="What is Amazon KDP?" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[868px] h-[56px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
        <div className='mt-4'>
          <label
            htmlFor="Upload-File"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Upload File
          </label>
          <div className='grid grid-cols-2 gap-x-6'>
            <div className='bg-[#F8F8FF] w-[420px] rounded-xl' {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                    <img src={UploadImgIcon} alt="" />
                    <div className='mt-3'>
                      <p className='font-semibold text-sm text-[#333333]'>Drop the files here ...</p>
                    </div>
                  </div>
                  :
                  <div className='flex justify-center items-center flex-col w-[416px] h-[159px] rounded-[12px]'>
                    <img src={UploadImgIcon} alt="" />
                    <div className='mt-3'>
                      <p className='font-semibold text-sm text-[#333333]'>Drag & Drop image or <span className='text-[#3D419F] font-normal cursor-pointer'>Browse</span></p>
                      <p className='font-light text-xs text-[#666666]'>Video, Pdf or Text file (max. 2.0 GB)</p>
                    </div>
                  </div>
              }
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-md pr-4 pl-[10px] py-[10px]">
                <div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <img className='w-10 h-10 mr-[6px]' src={videoIcon} alt="" />
                      <h3 className='font-normal text-base text-[#333333]'>KDP Course Video 12.Mp4</h3>
                    </div>
                    <img className='cursor-pointer' src={Cross} alt="" />
                  </div>
                  <div className='ml-[46px]'>
                    <span className='font-light text-xs text-[#666666]'>3.5 MB</span>
                    <div className='flex items-center'>
                      <progress className="progress w-56 bg-[#E1F1EB] mr-3 progress-secondary" value="65" max="100"></progress>
                      <span className='text-[#333333] font-normal text-base'>65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <img className='mr-3' src={whitePlusIcon} alt="" />
          <span className='font-normal text-base text-[#C3C4E1] cursor-pointer'>Add More</span>
        </div>
        <div className='w-[291px]'>
          <div className='flex justify-end items-center'>
            <img className='cursor-pointer' src={Cross} alt="" />
          </div>
          <div className='w-[291px] h-12 border-[1px] border-[#C3C4E1] rounded-[10px] flex items-center px-4 py-3'>
            <div className='flex items-center cursor-pointer'>
              <img className='mr-3' src={plusIcon} alt="" />
              <span className='font-normal text-base text-[#3D419F]'>Add Lesson</span>
            </div>
            <div className='flex items-center mx-3'>
              <span className='font-normal text-base text-[#C3C4E1]'>or</span>
            </div>
            <div className='flex items-center cursor-pointer'>
              <img className='mr-3' src={plusIcon} alt="" />
              <span className='font-normal text-base text-[#3D419F]'>Add Quiz</span>
            </div>
          </div>
        </div>
        <Buttons setRoute={'/admindashboard/course-create/course-curriculum-quiz'} text={'Save & Continue'} />
      </div> */}
      {/* Add lesson and add quiz modal component */}
      {/* <AddLessonModal /> */}
      <Buttons setDraft={false} text={'Save & Continue'} />
    </form>

  );
};

export default GreetingsInstroduction;