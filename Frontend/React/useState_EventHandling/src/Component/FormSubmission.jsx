import React from 'react'
import { useState } from 'react'

const FormSubmission = () => {
    const [username, setUsername] = useState("") 
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Username is ${username} and email is ${email} `)
        console.log(`Username is ${username} and email is ${email} `)
    }

  return (
    <div>
        <h1>Form Submission</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="Username">Username : </label>
        <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Write username'
        />
        <br/><br/>
        <label htmlFor="Email">Email : </label>
        <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Write email'
        />
        <br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormSubmission
