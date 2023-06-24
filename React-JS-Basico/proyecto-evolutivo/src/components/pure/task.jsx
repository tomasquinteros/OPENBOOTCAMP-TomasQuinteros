import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'

const COLORS = {
  yellow: 'bg-yellow-400',
  red: 'bg-red-400',
  blue: 'bg-blue-400'
}

function TaskComponent({task}) {

  const difficulty = () => {
    if (task.level === LEVELS.NORMAL) return COLORS.blue
    if (task.level === LEVELS.URGENT) return COLORS.red
    if (task.level === LEVELS.BLOCKING) return COLORS.BLOCKING
  }
  console.log(difficulty)
  return (
    <tr className='grid grid-cols-4 p-4 '>
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
        <p className={ task.level === LEVELS.NORMAL ? 'bg-blue-600 w-fit p-[0.2rem] rounded-md ' : task.level === LEVELS.BLOCKING ? 'bg-yellow-600 w-fit p-[0.2rem] rounded-md ' : 'bg-red-600 w-fit p-[0.2rem] rounded-md ' }>
          { task.level }
        </p>
      </td>
      <td>
        { task.completed ? 'COMPLETED' : 'PENDING'}
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired
}

export default TaskComponent
