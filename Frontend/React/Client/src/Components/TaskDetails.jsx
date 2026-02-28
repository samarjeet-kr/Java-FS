import React from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const TaskDetails = () => {
  const {id} = useParams() 
  const [task, setTask] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      try{
        axios.get(`http://localhost:9090/api/tasks/${id}`)
        .then(response => {
        setTask(response.data)
        setLoading(false)
        setError("")
        })
      }catch(error){
        setError(error.message)
        setLoading(false)
        console.log(`Error : ${error.message}`)
      } 
    },[2000])
},[id])

  const handleDelete = async () => {
    try{
      await axios.delete(`http://localhost:9090/api/tasks/${id}`)
      navigate(`/`)
    }catch(error){
      console.log(`Error deleting task : ${error.message}`)
    }
  }

  return (
    <div>
      <h1>Task Details</h1>
      {loading && <p>loading...</p> }
      {error && <p>{error}</p>}
      <p>Task Title : {task.title}</p>
      <p>Task Description : {task.description}</p>
      <button>
        <Link to={`/edit-tasks/${id}`}>Edit Task</Link>
      </button>
      <button onClick={handleDelete} >Delete Task</button>
    </div>
  )
}

export default TaskDetails