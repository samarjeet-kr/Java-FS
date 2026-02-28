import React from 'react'
import Child from './Child'
const Parent = ({pprops}) => {
  return (
    <div>
      <Child cprops = {pprops} />
    </div>
  )
}

export default Parent
