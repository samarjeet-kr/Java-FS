import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h1>To-Do-List</h1>
      <Link to='/'>All Tasks</Link> &nbsp;&nbsp;
      <Link to='/create-tasks'>Create Tasks</Link>

    </div>
  )
}

export default NavBar
