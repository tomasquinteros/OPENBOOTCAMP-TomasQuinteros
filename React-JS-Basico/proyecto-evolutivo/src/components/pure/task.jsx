import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import { ToggleOffIcon, ToggleOnIcon, TrashIcon } from './icons'

const styleTDparraf = 'w-fit p-[0.2rem] rounded-md text-white'
function TaskComponent({task, complete, remove}) {
  return (
    <tr className='grid grid-cols-4 p-4 place-content-start'>
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
        <p className={ task.level === LEVELS.NORMAL ? `bg-blue-600 ${styleTDparraf}` : task.level === LEVELS.BLOCKING ? `bg-yellow-600 ${styleTDparraf}` : `bg-red-600 ${styleTDparraf}` }>
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
