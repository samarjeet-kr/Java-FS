import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Welcome to React Routing</h1>
      <Link to='/first-page' >First Page</Link> &nbsp;&nbsp;
      <Link to='/second-page' >Second Page</Link> &nbsp;&nbsp;
      <Link to='/third-page' >Third Page</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Home

{/**
 DON'T DO THIS
      <a href="http://localhost:5173/first-page">First Page</a>
      <a href="http://localhost:5173/second-page">Second Page</a>
      <a href="http://localhost:5173/third-page">Third Page</a>
    
*/}
