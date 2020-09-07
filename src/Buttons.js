import React from 'react'

export const Buttons = (props) => {

    const handleClick = () => {
        
    }

  return (
    <div>
      <button onClick={(e) => console.log(e.target)}>{props.name}</button>
    </div>
  )
}

export default Buttons
