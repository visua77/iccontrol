import React from 'react'

export const Buttons = (props) => {

  return (
    <div className="buttonContainer"> 
      <button id={props.id}onClick={(e) => console.log('The button with id'+props.id+' was clicked!')}><span className="caption">{props.name}</span>
  <img src={`./img/${props.img}.jpg`} alt="image" className="sportImg"/></button>
    </div>
  )
}

export default Buttons
