import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import TaskItem, { TaskPropType } from '../TaskItem'

export const TasksList = (props) => {
  const {
    tasks,
    toggleTask,
    deleteTask,
    className,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {
        tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          )
        })
      }
    </ul>
  )
}

TasksList.propTypes = {
  toggleTask: PropTypes.func,
  deleteTask: PropTypes.func,
  tasks: PropTypes.arrayOf(TaskPropType),
  className: PropTypes.string
}

export default TasksList
