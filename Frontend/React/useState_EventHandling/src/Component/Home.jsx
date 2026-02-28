import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to= '/mouse-click-event' >Mouse Click Event</Link> &nbsp;&nbsp;
      <Link to= '/mouse-over-event' >Mouse Over Event</Link> &nbsp;&nbsp;
      <Link to= '/form-submission' >Form Submission</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Home
