import { useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import TaskForm from '../pure/forms/taskForm'


export default function TaskListComponent() {

  const defaultTask = new Task('Drink water', 'Drink wather to avoid deshydration', true, LEVELS.NORMAL)
  const Task1 = new Task('Create app', 'Create app with create-react-app', false, LEVELS.URGENT)
  const Task2 = new Task('Continue with class React Basic', 'Continue with course of OpenBootcamp about React', false, LEVELS.BLOCKING)
  const [tasks, setTasks] = useState([defaultTask, Task1, Task2])

  function completeTask(task) {
    const index = tasks.indexOf(task) // Encontramos el index de donde se encuentra nuestra tarea
    const tempTasks = [...tasks] // Creamos una lista con las tareas temporales
    tempTasks[index].completed = !tempTasks[index].completed // Buscamos en tempTask con el index encontrado y modificamos esa propiedad.
    setTasks(tempTasks) // Actualizamos el estado.
    console.log(tasks[index])
  }
  function deleteTask(task) {
    const index = tasks.indexOf(task) // Encontramos el index de donde se encuentra nuestra tarea
    const tempTasks = [...tasks] // Creamos una lista con las tareas temporales
    tempTasks.splice(index, 1) // Con el .splice borramos el index donde se encuntra nuestra tarea y el segundo parametro indica cuantos elementos debemos borrar
    setTasks(tempTasks)
  }
  function addTask(task) {
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }
  return (
    <div className='w-2/4 flex flex-col items-center justify-center gap-8'>
      <div>
        <div className='p-8 bg-slate-200 w-full text-center border-2 border-gray-300'>
          <h1>Your Task</h1> 
        </div>
        <table className='border-x-2 border-b-2 w-full'>
          <thead>
            <tr className='grid grid-cols-4 gap-4 p-2 place-items-center'>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((values, index) => <TaskComponent key={index} task={values} complete={completeTask} remove={deleteTask}/>)
            }
          </tbody>
        </table>
      </div>
      <TaskForm add={addTask}/>
    </div>
  )
}
