import React from 'react'
import VisionImg from "../assets/VisionImg.png";
import VisionBottomImg from "../assets/VisionBottomImg.png"
const Vision = () => {
  
    return (
      <div className='Vision-Container'>
  
        <div className="VisionImg">
          <img src={VisionImg} alt="" className='visionimg' />
        </div>
  
          <div className="vision-text">
            <h1>Our Vision</h1>
            <br />
            <br />
            <p>
            We believe in serving quality services which can meet customersrequirements. Our vision is to bring out the best in people, technology andprocesses with top-notch quality. We build customer experience. Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service.
            </p>
          </div>
          <div className="visionbottomImg">
            <img src={VisionBottomImg} alt=""   className='VisionBottomImgbottom' />
          </div>
      </div>
    )
  
}

export default Vision
