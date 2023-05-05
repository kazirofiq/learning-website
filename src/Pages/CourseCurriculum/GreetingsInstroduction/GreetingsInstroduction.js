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
    const assignment = [];
    allModules.forEach(mod => (mod.quiz && quiz.push({ quiz: mod.quiz, moduleNo: mod.moduleNo })));
    allModules.forEach(mod => (mod.assignment && assignment.push({ assignment: mod.assignment, moduleNo: mod.moduleNo })));

    if (quiz.length > 0 && assignment.length > 0) {
      saveAssignmentAndQuiz("quiz", quiz, (result) => {
        result.forEach(r => {
          const index = allModules.findIndex(mod => mod.moduleNo === r.moduleNo)
          allModules[index].lessons.push({ number: r.number, routeName: r.routeName, name: allModules[index].quizName });
          delete allModules[index].quiz;
          delete allModules[index].quizName;
        });
        saveAssignmentAndQuiz("assignment", assignment, (result) => {
          result.forEach(r => {
            const index = allModules.findIndex(mod => mod.moduleNo === r.moduleNo)
            allModules[index].lessons.push({ number: r.number, routeName: r.routeName, name: allModules[index].assignment.name });
            delete allModules[index].assignment;
            saveModulesToDB(allModules);
          });
        })
      })
    } else if (quiz.length > 0) {
      saveAssignmentAndQuiz("quiz", quiz, (result) => {
        result.forEach(r => {
          const index = allModules.findIndex(mod => mod.moduleNo === r.moduleNo)
          allModules[index].lessons.push({ number: r.number, routeName: r.routeName, name: allModules[index].quizName });
          delete allModules[index].quiz;
          delete allModules[index].quizName;
          saveModulesToDB(allModules);
        });
      })
    } else if (assignment.length > 0) {
      saveAssignmentAndQuiz("assignment", assignment, (result) => {
        result.forEach(r => {
          const index = allModules.findIndex(mod => mod.moduleNo === r.moduleNo)
          allModules[index].lessons.push({ number: r.number, routeName: r.routeName, name: allModules[index].assignment.name });
          delete allModules[index].assignment;
          saveModulesToDB(allModules);
        });
      })
    } else {
      saveModulesToDB(allModules);
    }
  }

  const saveAssignmentAndQuiz = (route, data, cb) => {
    fetch(`${server}/modules/contents/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        cb(result);
      })
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
      <Buttons setDraft={() => { }} text={'Save & Continue'} draft={false} />
    </form>

  );
};

export default GreetingsInstroduction;