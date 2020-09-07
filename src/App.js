import React from 'react'
import Buttons from './Buttons'
import data from './json/qib2.json'

console.log(data)

export const App = () => {
  return (
    <div className="mainContainer">
      {data.map((item) => (
        <Buttons name={item.ButtonText} />
      ))}
    </div>
    
  )
}
