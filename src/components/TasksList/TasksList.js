import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import TaskItem from '../TaskItem'
import Button from '../Button'

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
        tasks.map(({ id, text, isCompleted }) => {
          return (
            <TaskItem
              key={id}
              onClick={(e) => toggleTask(id)}
            >
              {isCompleted ? '[COMPLETED]' : ''}
              {text}
              <Button
                onClick={(e) => deleteTask(id)}
              >
                DELETE
              </Button>
            </TaskItem>
          )
        })
      }
    </ul>
  )
}

TasksList.propTypes = {
  toggleTask: PropTypes.func,
  deleteTask: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      isCompleted: PropTypes.bool
    })
  ),
  className: PropTypes.string
}

export default TasksList
