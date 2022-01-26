import React from 'react'
import classes from './MyButton.module.css'

const MyButtons = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.my_button}>
      {children}
    </button>
  )
}

export default MyButtons
