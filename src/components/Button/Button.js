import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    icon,
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
      {
        icon ?
          <span>
            {' '}
            <FontAwesomeIcon
              icon={icon}
            />
          </span>
          :
          null
      }
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Button
