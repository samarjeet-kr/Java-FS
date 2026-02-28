import React from 'react'
import Parent from './Parent'
const GrandParent = ({gprops}) => {
  return (
    <div>
      <Parent pprops = {gprops} />
    </div>
  )
}

export default GrandParent
