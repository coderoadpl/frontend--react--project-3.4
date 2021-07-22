import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Button from '../Button'

export const TaskItem = (props) => {
  const {
    task,
    toggleTask,
    deleteTask,
    className,
    ...otherProps
  } = props

  const { id, text, isCompleted } = task

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      onClick={(e) => toggleTask(id)}
      {...otherProps}
    >
      {isCompleted ? '[COMPLETED]' : ''}
      {text}
      <Button
        onClick={(e) => deleteTask(id)}
      >
        DELETE
      </Button>
    </li>
  )
}

export const TaskPropType = PropTypes.shape({
  id: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool
})

TaskItem.propTypes = {
  deleteTask: PropTypes.func,
  toggleTask: PropTypes.func,
  task: TaskPropType,
  className: PropTypes.string
}

export default TaskItem
