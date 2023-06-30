import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import { ToggleOffIcon, ToggleOnIcon, TrashIcon } from './icons'


function TaskComponent({task, complete, remove}) {
  return (
    <tr className={` grid grid-cols-4 p-4 place-content-start ${task.completed ? 'text-gray-500 line-through' : 'text-red-400' }`} >
      <td>
        <h1 className='font-bold'>
          { task.name }
        </h1>
      </td>
      <td>
        <p>
        { task.description }
        </p>
      </td>
      <td className='mx-auto'>
        <p className={` w-fit p-[0.2rem] rounded-md text-white ${ task.level === LEVELS.NORMAL ? 'bg-blue-600' : task.level === LEVELS.BLOCKING ? 'bg-yellow-600' : 'bg-red-600'} `} >
          { task.level }
        </p>
      </td>
      <td className='mx-auto'>
        { task.completed ? 
            <button onClick={() => complete(task)} className='text-green-500'>
              <ToggleOnIcon/>
            </button> : 
            <button onClick={() => complete(task)} className='text-gray-800'>
              <ToggleOffIcon />
            </button>
        }
        <button onClick={() => remove(task)} className='text-red-500'>
          <TrashIcon />
        </button>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default TaskComponent
