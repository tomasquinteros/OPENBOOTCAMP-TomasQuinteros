import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'

const styleTDparraf = 'w-fit p-[0.2rem] rounded-md text-white'
function TaskComponent({task}) {
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
        <p className={ task.level === LEVELS.NORMAL ? `bg-blue-600 ${styleTDparraf}` : task.level === LEVELS.BLOCKING ? `bg-yellow-600 ${styleTDparraf}` : `bg-red-600 ${styleTDparraf}` }>
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
