import React from 'react'

import whatdoHeading from "../assets/whatdoHeading.JPG"
import whatdoimg1 from "../assets/whatdoimg1.JPG";
import whatdoimg2 from "../assets/whatdoimg2.JPG";

const Whatdo = () => {
  return (
    <div className='whatdo-container'>
      <div className="whatdoimgCon">
      <img src={whatdoHeading} alt="" className='whatdo-img'/>
      <img src={whatdoimg1} alt="" className='whatdo-img' />
      <img src={whatdoimg2} alt="" className='whatdo-img' />
      </div>
      
    </div>
  )
}

export default Whatdo
