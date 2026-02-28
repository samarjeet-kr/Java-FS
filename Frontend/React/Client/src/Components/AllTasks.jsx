import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const AllTasks = () => {

const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=> {
        setTimeout(() => {
            try{
                axios.get('http://localhost:9090/api/tasks')
                .then(response => {
                    setTasks(response.data)
                    setLoading(false)
                    setError("")
                })
            }catch(error){
                setError(error.message)
                console.log(`Error : ${error.message}`)
            }
        },[2000])
    },[])

  return (
    <div>
      <h1>All Tasks</h1>
       
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
            {tasks.length === 0 ? <p>No Task Avilabale</p> : (

                tasks.map((task) => (
                    <ul>
                      <Link to={`/task-details/${task.id}`} >
                        <li key={task.id} >Title : {task.title}, Description : {task.description}</li>
                      </Link>
                        
                    </ul>
                ))
            )}
        </div>
      )}
    </div>
  )
}

export default AllTasks