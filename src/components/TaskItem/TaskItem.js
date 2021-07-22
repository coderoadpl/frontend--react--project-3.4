import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const TaskItem = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    />
  )
}

TaskItem.propTypes = {
  className: PropTypes.string
}

export default TaskItem
