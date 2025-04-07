import React from 'react'
import './Titlebar.css'
const Titlebar = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Titlebar
