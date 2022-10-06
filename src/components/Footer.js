import React from 'react'
import  logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='footer-con'>

        <div className="company">
           
            <img src= {logo} alt="" /> <br />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <br />
            <span><i className="fa-brands fa-facebook fa"></i></span>
            <span><i className="fa-brands fa-twitter fa"></i></span>
            <span><i className="fa-brands fa-linkedin fa"></i></span>
        </div>

        <div className="QkickLink">
            <h4>Qucki Links</h4><br /><br />
            <ul>   
                <li><a href="#">Web Development</a></li>
                <li><a href="#">CMS & Commerce</a></li>
                <li><a href="#">Mobile App Develoment</a></li>
                <li><a href="#">Digital marketingt</a></li>
                <li><a href="#">UI/UX Design</a></li>
            </ul>
        </div>



        <div className="forComp">
        <h4>Companay</h4><br /><br />
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Tearms of Services</a></li>
                <li><a href="#">Legal Info</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>


        <div className="subscribenews">
        <h4>Subscribe Our Newsletter</h4><br /><br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          <button className='footerbtn'><span>Subscribe</span> <i class="fa-solid fa-arrow-right footerArrow"></i></button>
        </div>
    </div>
  )
}

export default Footer