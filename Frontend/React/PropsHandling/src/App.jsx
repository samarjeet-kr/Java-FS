import React from 'react'
import Mario from './Components/Mario'
import Shaun from './Components/Shaun'
const App = () => {
  const str1 = 'This page belongs to Mario'
  const str2 = 'This page belongs to Shaun'
  return (
    <div>
      {/* Props are attributes of html elements and JSX fucntional components.[User Defined]*/}
      <Mario str1 = {str1} />
      <Shaun str2 = {str2} />
    </div>
  )
}

export default App
