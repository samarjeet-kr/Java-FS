import React from 'react'

import { useState,useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/user') // returns promise object
      .then((response)  => {
        if(!response.ok){
          console.log( `Error : $(response.status)`)
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(data)
        setError("")
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
        console.log(`Error : ${error.message}`)
      })
    }, [2000]);
  }, {})

  return (
    <div>
      <h2>User Details</h2>
      {loading && <p>Loading message</p>}
      {error && <p>{error}</p>}
      {users.map((user)=> (
        <ul>
          <li key={user.id} > Username : {user.username}, Email : {user.email}</li>
        </ul>
      ) )}
    </div>
  )
}

export default App
