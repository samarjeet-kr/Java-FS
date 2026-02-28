import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MouseOverEvent from './Component/MouseOverEvent'
import MouseClickEvent from './Component/MouseClickEvent'
import FormSubmission from './Component/FormSubmission'
import Home from './Component/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path= '/' element={<Home/>} />
        <Route path= '/mouse-click-event' element={<MouseClickEvent/>}/>
        <Route path = '/mouse-over-event' element={<MouseOverEvent/>} />
        <Route path= '/form-submission' element={<FormSubmission/>}/>
      </Routes>
    </div>
  )
}

export default App
