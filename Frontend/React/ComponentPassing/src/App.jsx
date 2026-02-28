import React from 'react'

import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

const App = () => {
  return (
    <div>
      <h1>Component Passing</h1>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  )
}

export default App
