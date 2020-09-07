import React from 'react'
import Images from './Images'

export const Buttons = (props) => {

  return (
    <div className="buttonContainer"> 
      <button onClick={(e) => console.log(e.target)}><span className="caption">{props.name}</span>
      <img src={`./img/${props.img}.jpg`} alt="test" className="sportImg"/></button>
    </div>
  )
}

export default Buttons
