import React from 'react'
import Condition from './condition'

const Homes  = (props) => {
    const test ="Working"
    const result ="perfect"
  return (
    <div>

        <h1>{test}</h1>
        <Condition names={result} />
    </div>
  )
}

export default Homes 