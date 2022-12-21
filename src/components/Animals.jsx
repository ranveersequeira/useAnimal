import React from 'react'

function Animals({type,name,age}) {
  return (
    <li>
        <strong>{type}</strong> {name} ({age} years old)
    </li>
  )
}

export default Animals
