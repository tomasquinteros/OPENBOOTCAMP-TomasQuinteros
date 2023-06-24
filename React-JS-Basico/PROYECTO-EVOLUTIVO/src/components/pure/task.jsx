import React from 'react'
import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'

function TaskComponent({task}) {
  return (
    <tr>
      <td>
        { task.name }
      </td>
      <td>
        { task.description }
      </td>
      <td>
        { task.level }
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
