import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    children,
    className,
    ...otherProps
  } = props

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
      {' '}
      <FontAwesomeIcon
        icon={faTrash}
      />
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Button
