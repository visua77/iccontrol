import React from 'react'

export const Buttons = (props) => {

  return (
    <div className="buttonContainer"> 
      <button onClick={(e) => console.log(e.target)}>{props.name}</button>
    </div>
  )
}

export default Buttons
