import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

export default function TaskListComponent() {

  const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL)

  const changeState = (id) => {
    console.log('TODO: Cambiar estado de una tarea')
  }

  return (
    <div>
      <div>
        <h1>Your Task:</h1> 
        </div>
      {/* TODO: Aplicar un for/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}/> 
    </div>
  )
}
