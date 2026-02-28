import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
      <h1  style={{color:'red'}} >404! Page Not Found</h1>
       <Link to='/'>Back to Home</Link> &nbsp;&nbsp;
    </div>
  )
}

export default ErrorPage
