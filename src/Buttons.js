import React from 'react'
import Images from './Images'

export const Buttons = (props) => {

    

  return (
    <div className="buttonContainer"> 
      <button onClick={(e) => console.log(e.target)}><span className="caption">{props.name}</span>
      <Images /></button>
    </div>
  )
}

export default Buttons
