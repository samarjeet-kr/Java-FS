import React from 'react'

const FirstComponent = () => {
    const FirstStyle = {
        color : 'crimson',
        fontFamily : 'calibri',
        fontSize : '30px',
        textAlign : 'centre',
        textShadow : '2px 2px 5px #ff3a3ae9'
    }
  return (
    <div>
      <h1 style={FirstStyle} >First Component</h1>
    </div>
  )
}

export default FirstComponent
