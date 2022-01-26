import React, { useState } from 'react'
import MyButtons from '../UI/Buttons/MyButton'
import classes from './Counter.module.css'

const Counter = (props) => {
  let [counter, setCounter] = useState(0)

  function decrement() {
    setCounter(counter - 1)
  }
  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div className={classes.counter_wrapper}>
      <h1
        className={classes.counter_title}
        style={{ marginBottom: 20, textTransform: 'uppercase', color: 'black' }}
      >
        {props.propsCounter.title}
      </h1>
      <h3 className={classes.counter_title}>{counter}</h3>
      <div className={classes.counter_buttons__box}>
        <MyButtons onClick={decrement} style={{ marginRight: 16 }}>
          Decrement
        </MyButtons>
        <MyButtons onClick={increment}>Increment</MyButtons>
      </div>
    </div>
  )
}

export default Counter
