import React from 'react'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/first-page' element={<FirstPage/>} />
        <Route path='/second-page' element={<SecondPage/>} />
        <Route path='/third-page' element={<ThirdPage/>} />
        <Route path='*' element= {<ErrorPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
