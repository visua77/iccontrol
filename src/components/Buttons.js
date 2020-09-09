import React,{useState} from 'react'

export const Buttons = (props) => {

//Setting variable for detecting which imgset to use
  let imgno 
 
  if (props.set === 1) {
    imgno = 1
  }
  if (props.set === 2) {
    imgno = 2
  }

  //handleClick func
  const handleClick = () => {
    console.log('The button with id'+props.id+' was clicked!')
    }

  //onMouseOver func

    const handleMouseOver = () => {
      props.setValue('The button with id'+props.id+' was hovered!')
    }

  return (
    <div className="buttonContainer"> 
      <button id={props.id} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={() => props.setValue('')}><span className="caption">{props.name}</span>
  <img src={`./img/${props.img}_${imgno}.jpg`} alt="image" className="sportImg"/></button>
    </div>
  )
}

export default Buttons







