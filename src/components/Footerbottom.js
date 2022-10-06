import React from 'react'
import footerImg  from "../assets/footerImg.png";
import footerGroup from "../assets/footerGroup.png";
const Footerbottom = () => {
  return (
    <div className='footerbotton'>
      <img src={footerImg} alt="" className='footer-bottom-img' />
      <img src={footerGroup} alt=""  className='footer-group'/>

      <p className='footer-data'>2019 All right reserved by Tech Erudite </p>
    </div>
  )
}

export default Footerbottom
