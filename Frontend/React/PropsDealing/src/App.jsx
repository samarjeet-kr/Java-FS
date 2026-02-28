import React from 'react'
import GrandParent from './Components/GrandParent'

function App() {
  let str = "In the heart of Gotham, a shadow moves. He isn't just a man in a costume; he's a symbol of focus, resilience, and the relentless pursuit of justice. Batman has transcended comic books to become a cultural icon, representing the potential for human achievement without \"super\" powers."
  return (
    <div>
      <GrandParent gprops = {str} />
    </div>
  )
}

export default App
