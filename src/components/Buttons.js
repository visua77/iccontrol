import React from 'react'

export const Buttons = (props) => {

  let imgno 
 
  if (props.set === 1) {
    imgno = 1
  }
  if (props.set === 2) {
    imgno = 2
  }

  return (
    <div className="buttonContainer"> 
      <button id={props.id}onClick={(e) => console.log('The button with id'+props.id+' was clicked!')}><span className="caption">{props.name}</span>
      <img src={`./img/${props.img}_${imgno}.jpg`} alt="image" className="sportImg"/></button>
    </div>
  )
}

export default Buttons



