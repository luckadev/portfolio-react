import React from 'react'

const Title = ({ h1children, pchildren }) => {
  return (
    <div className='title-content'>
        <h1>{h1children}<span>.</span></h1>
        <p>{pchildren}</p>
      </div>
  )
}

export default Title