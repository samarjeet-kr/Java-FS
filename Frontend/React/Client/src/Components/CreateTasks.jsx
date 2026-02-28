import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const CreateTasks = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      try{
        e.preventDefault()
        await axios.post('http://localhost:9090/api/tasks', {title, description})
        setTitle("")
        setDescription("")
        setError("")
        setMessage("Task Added....")
        navigate('/')
      }catch(error){
         setMessage("Task not added...")
         setError(error.message)
         console.log(`Error : ${error.message}`) 
      }
  }

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title">Title : </label>
        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Write a title'
        required
        />
        <br/><br/>
        <label htmlFor="description">Description : </label>
        <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Write a descrription'
        required
        >
        </textarea>
        <br/><br/>
        <button type='submit' >Submit</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default CreateTasks
