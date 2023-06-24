import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

export default function TaskListComponent() {

  const defaultTask = new Task('Drink water', 'Drink wather to avoid deshydration', true, LEVELS.NORMAL)
  const Task1 = new Task('Create app', 'Create app with create-react-app', false, LEVELS.URGENT)
  const Task2 = new Task('Continue with class React Basic', 'Continue with course of OpenBootcamp about React', false, LEVELS.NORMAL)
  const [tasks, setTasks] = useState([defaultTask, Task1, Task2])

  useEffect(() => {
    console.log('Task State has been modified')
  }, [tasks])
  console.log(tasks)
  return (
    <div className='w-2/4 flex items-center justify-center bg-slate-300'>
      <div>
        <h1>Your Task:</h1> 
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((values, index) => <TaskComponent key={index} task={values}/>)
          }
          {/* <TaskComponent/> */}
        </tbody>
      </table>
    </div>
  )
}
