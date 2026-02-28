import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditTasks = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    const fetchTask = async () => {
      try{
        const response = await axios.get(`http://localhost:9090/api/tasks/${id}`)
        setTitle(response.data.title)
        setDescription(response.data.description)
      }catch(error){
        console.log(`Error fetching Task : ${error.message}`)
      }
    }
    fetchTask()
  },[id])

  const handleEdit = async (e) => {
    try{
      e.preventDefault()
      await axios.put(`http://localhost:9090/api/tasks/${id}`, {title, description})
      setTitle("")
      setDescription("")
      setMessage("Task edited...")
      setError("")
      navigate('/')
    }catch(error){
      setError(error.message)
      setMessage("Task not updated")
      console.log(`Error updating task : ${error.message}`)
    }
  }

  return (
    <div>
      <h1>Edit Tasks</h1>

      <form onSubmit={handleEdit} >
        <label htmlFor="title">Edit Title : </label>
        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Edit title'
        required
        />
        <br/><br/>
        <label htmlFor="description">Edit Description : </label>
        <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Edit descrription'
        required
        >
        </textarea>
        <br/><br/>
        <button type='submit' >Update</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default EditTasks
