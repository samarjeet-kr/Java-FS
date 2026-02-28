import React from 'react'
import { useState } from 'react'
const MouseClickEvent = () => {
    // count - initial state/ current state
    // setCount - next state
    // useState(0) - we setting intial state of count as 0
    const [count, setCount] = useState(0)
    const countPlus = () => {
        setCount(count+1) // next state // setting every next state after button click
    }
    const countMinus = () => {
        setCount(count-1) // setting every next state after button click
    }
    const resetCount = () => {
        setCount(0) // setting every next state after button click
    }
  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={countPlus} >Count + </button>
      <button onClick={countMinus} >Count - </button>
      <button onClick={resetCount} >Count Reset </button>

    </div>
  )
}

export default MouseClickEvent
