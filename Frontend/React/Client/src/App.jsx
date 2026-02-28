import React from 'react'

import AllTasks from './Components/AllTasks'
import CreateTasks from './Components/CreateTasks'
import EditTasks from './Components/EditTasks'
import ErrorPage from './Components/ErrorPage'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import TaskDetails from './Components/TaskDetails'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllTasks/>} ></Route>
        <Route path='/create-tasks' element={<CreateTasks/>} ></Route>
        <Route path='/edit-tasks/:id' element={<EditTasks/>} ></Route>
        <Route path='/task-details/:id' element={<TaskDetails/>} ></Route>
        <Route path='*' element={<ErrorPage/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
