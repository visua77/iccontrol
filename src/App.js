import React ,{useState} from 'react'
import Buttons from './components/Buttons'
import data from './json/qib2.json'
import data2 from './json/qib3.json'

export const App = (props) => {

  //Setting state
  const [toggle, setToggle] = useState(false)
  const [icdata, setIcdata] = useState(data)
  const [imgset, setImgset] = useState(1)
  const [value, setValue] = useState()

  const toggler = () => {
    setToggle(prev => !prev)
    if(icdata === data){
      setIcdata(data2)
      setImgset(2)
      }
    if(icdata === data2){
      setIcdata(data)
      setImgset(1)
      }
  }

  return (
    <div className="mainWrapper">
      <div className="header"><div><a href="http://www.iccmediasport.com/"target="new"><img src="./img/ICCMS_low-q-logo_2_1.png" alt="logoimg"/></a></div>
      <div className="textinfo">{value}</div><i className={toggle ? 'fas fa-toggle-on' : 'fas fa-toggle-off'} onClick={toggler}></i></div>
      <div className="mainContainer">
      {icdata.map((item, index) => (
        <Buttons name={item.ButtonText} id={item.QuickButtonGroupOid} img={index} key={item.ButtonText} set={imgset} setValue={setValue} />
      ))}
      </div>
      <div className="footer"><span className="copyright">Copyright <a href="mailto:nicznet@hotmail.com">Niclas Binnquist</a> 2020</span></div>
    </div>
  )
}


