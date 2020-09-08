import React ,{useState} from 'react'
import Buttons from './components/Buttons'
import data from './json/qib2.json'
import data2 from './json/qib3.json'

export const App = () => {

  const [toggle, setToggle] = useState(false)
  const [icdata, setIcdata] = useState(data)

  //console.log(data[0].QuickButtonGroupOid)
  
  const toggler = () => {
    setToggle(prev => !prev)
    if(icdata === data){
      setIcdata(data2)
    }
    if(icdata === data2){
      setIcdata(data)
    }
  }
  
  return (
    <div className="mainWrapper">
      <div className="header"><div><img src="./img/ICCMS_low-q-logo_2_1.png" alt="logoimg"/></div>
      <i className={toggle ? 'fas fa-toggle-on' : 'fas fa-toggle-off'} onClick={toggler}></i></div>
      <div className="mainContainer">
      {icdata.map((item, index) => (
        <Buttons name={item.ButtonText} id={item.QuickButtonGroupOid} img={index} key={item.ButtonText} />
      ))}
      </div>
      <div className="footer"><span className="copyright">Copyright <a href="mailto:nicznet@hotmail.com">Niclas Binnquist</a> 2020</span></div>
    </div>
  )
}
