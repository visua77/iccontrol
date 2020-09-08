import React ,{useState} from 'react'
import Buttons from './components/Buttons'
import data from './json/qib2.json'
import data2 from './json/qib3.json'

//console.log(data)

export const App = () => {

  const [toggle, setToggle] = useState(false)

  const toggler = () => {
    setToggle(prev => !prev)
  }
  
  return (
    <div className="mainWrapper">
      <div className="header"><div><img src="./img/ICCMS_low-q-logo_2_1.png" alt="logoimg"/></div><span className={toggle ? 'active' : 'default'} onClick={toggler}>Toggle</span></div>
      <div className="mainContainer">
      {data.map((item, index) => (
        <Buttons name={item.ButtonText} img={index} key={item.ButtonText} />
      ))}
      </div>
      <div className="footer"><span className="copyright">Copyright <a href="mailto:nicznet@hotmail.com">Niclas Binnquist</a> 2020</span></div>
    </div>
  )
}
