import React from 'react';
import Reactangle from "../assets/Reactangle.png";
import logo from "../assets/logo.png";
import Ellipse from "../assets/Ellipse.png";
import CutEllipse from "../assets/CutEllipse.png";
import Team from "../assets/Team.png";

const Header = () => {
  return (
    <div className='Header-container'>
      <div className="navbar-container">
        <ul>
          <li><a href=""><img src={logo} alt="" /></a></li>
        </ul>
        <ul className='navlink'>
        
            <li><a href="#">Home</a></li>
            <li><a href="#">what to do</a></li>
            <li><a href="#">Hire Expert</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Say Hello</a></li>
      
         
        </ul>
        <div style={{ display: "flex", marginLeft: "50px" }}>
            <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
          </div>
      </div>


      <div className="headerAbout">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>



      <img src={Reactangle} alt="" className='header-Reactangle' />
      <img src={Ellipse} alt="" className='Ellipse' />
      <img src={CutEllipse} alt="" className='cutEcllipse' />
      <img src={Team} alt="" className='team' />
    </div>
  )
}

export default Header
