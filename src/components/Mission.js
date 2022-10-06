import React from 'react'

import missionImg from "../assets/missionImg.png";
import missionBottonImg from "../assets/missionBottonImg.png"
const Mission = () => {
  return (
    <div className='mission-container'>
             
             <div className="mission-text">
                <h1>Our Mission</h1>
                <br /><br />
                <p>
                We believe in serving quality services which can meet customersrequirements. Our vision is to bring out the best in people, technology andprocesses with top-notch quality. We build customer experience. Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service.
                </p>
             </div>

             <div className="mission-img">
                <img src={missionImg} alt="" className='missionImg'/>
             </div>
             <div className='missionBottom'>
                <img src={missionBottonImg} alt="" style={{marginTop : "50px"}} />
             </div>
    </div>
  )
}

export default Mission
