import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Message = (props) => {
  const {
    children,
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Message.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Message
