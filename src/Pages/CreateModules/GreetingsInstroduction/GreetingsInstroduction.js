import React, { useEffect, useState } from 'react';
import Modules from '../Modules/Modules';
import { useNavigate, useParams } from 'react-router-dom';
import Buttons from '../../CreateCourse/Buttons/Buttons';
import { server } from '../../../variables/server';


const GreetingsInstroduction = () => {
  const { courseId } = useParams();
  const [modulesData, setModulesData] = useState({ moduleNo: 1, courseId });
  const navigate = useNavigate();

  const createModules = e => {
    e.preventDefault();
    const allModules = modulesData;
    const quiz = allModules.quiz && { quiz: allModules.quiz, moduleNo: allModules.moduleNo };
    const assignment = allModules.assignment && { assignment: allModules.assignment, moduleNo: allModules.moduleNo };

    if (quiz?.moduleNo && assignment?.moduleNo) {
      saveAssignmentAndQuiz("quiz", [quiz], (result) => {
        result.forEach(r => {
          allModules.lessons.push({ number: r.number, routeName: r.routeName, name: allModules.quizName });
          delete allModules.quiz;
          delete allModules.quizName;
        });
        saveAssignmentAndQuiz("assignment", [assignment], (result) => {
          result.forEach(r => {
            allModules.lessons.push({ number: r.number, routeName: r.routeName, name: allModules.assignment.name });
            delete allModules.assignment;
            saveModulesToDB(allModules);
          });
        })
      })
    } else if (quiz?.moduleNo) {
      saveAssignmentAndQuiz("quiz", [quiz], (result) => {
        result.forEach(r => {
          allModules.lessons.push({ number: r.number, routeName: r.routeName, name: allModules.quizName });
          delete allModules.quiz;
          delete allModules.quizName;
          saveModulesToDB(allModules);
        });
      })
    } else if (assignment?.moduleNo) {
      saveAssignmentAndQuiz("assignment", assignment, (result) => {
        result.forEach(r => {
          allModules.lessons.push({ number: r.number, routeName: r.routeName, name: allModules.assignment.name });
          delete allModules.assignment;
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
      body: JSON.stringify([modules])
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged && data.insertedCount > 0) {
          navigate("/admindashboard/mycourse");
        }
      })
  }

  useEffect(() => {
    fetch(`${server}/modules/no/${courseId}`)
      .then(res => res.json())
      .then(data => {
        setModulesData(prev => {
          prev.moduleNo = data.moduleNo ? data.moduleNo + 1 : 1
          return { ...prev }
        })
      })
      .catch(err => console.error(err))
  }, [courseId])

  return (
    <form onSubmit={createModules} className='poppins pt-6'>
      <Modules
        no={modulesData.moduleNo}
        setModulesData={setModulesData}
      />
      <Buttons setDraft={() => { }} text={'Save'} draft={false} />
    </form>

  );
};

export default GreetingsInstroduction;