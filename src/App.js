import React from 'react'
import Buttons from './Buttons'
import data from './json/qib2.json'

console.log(data)

export const App = () => {
  
  return (
    <div className="mainWrapper">
      <div className="header"><img src="./img/ICCMS_low-q-logo_2_1.png" alt="logoimg"/><span className="toggle">Toggle</span></div>
      <div className="mainContainer">
      {data.map((item, index) => (
        
        <Buttons name={item.ButtonText} img={index} key={item.ButtonText} />
      ))}
      </div>
      <div className="footer"><span className="copyright">Copyright Niclas Binnquist 2020</span></div>
    </div>
  )
}
