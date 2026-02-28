import React from 'react'

const MouseOverEvent = () => {
    const mouseOver = () => {
        console.log("Mouse Over")
    }
    const mouseOut = () => {
        console.log("Mouse Out")
    }
  return (
    <div>
      <h1 onMouseOver={mouseOver} onMouseOut={mouseOut} >Hover Me</h1>
    </div>
  )
}

export default MouseOverEvent
