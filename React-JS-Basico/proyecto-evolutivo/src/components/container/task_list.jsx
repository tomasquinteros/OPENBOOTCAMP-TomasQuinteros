import { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

export default function TaskListComponent() {

  const defaultTask = new Task('Drink water', 'Drink wather to avoid deshydration', true, LEVELS.NORMAL)
  const Task1 = new Task('Create app', 'Create app with create-react-app', false, LEVELS.URGENT)
  const Task2 = new Task('Continue with class React Basic', 'Continue with course of OpenBootcamp about React', false, LEVELS.BLOCKING)
  const [tasks, setTasks] = useState([defaultTask, Task1, Task2])

  useEffect(() => {
    console.log('Task State has been modified')
  }, [tasks])
  console.log(tasks)
  return (
    <div className='w-2/4 flex flex-col items-center justify-center'>
      <div className='p-8 bg-slate-200 w-full text-center border-2 border-gray-300'>
        <h1>Your Task</h1> 
      </div>
      <table className='border-x-2 border-b-2 w-full'>
        <thead>
          <tr className='grid grid-cols-4 gap-4 p-2'>
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
        </tbody>
      </table>
    </div>
  )
}
