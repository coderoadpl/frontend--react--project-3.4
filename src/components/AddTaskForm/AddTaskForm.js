import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Button from '../Button'
import TextField from '../TextField'

export const AddTaskForm = (props) => {
  const {
    newTaskText,
    addNewTask,
    onNewTaskTextChange,
    className,
    ...otherProps
  } = props

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      onSubmit={addNewTask}
      {...otherProps}
    >
      <TextField
        className={classes.textField}
        type={'text'}
        value={newTaskText}
        onChange={onNewTaskTextChange}
      />
      <br/>
      <Button
        className={classes.submitButton}
      >
        SUBMIT
      </Button>
    </form>
  )
}

AddTaskForm.propTypes = {
  newTaskText: PropTypes.string.isRequired,
  addNewTask: PropTypes.func.isRequired,
  onNewTaskTextChange: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default AddTaskForm
