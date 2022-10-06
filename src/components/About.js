import React from 'react'
import AboutGroup from "../assets/AboutGroup.png";
const About = () => {
    return (
        <div className='About-Container'>
            <h1>We grow brands <br />
                What is Techerudite?</h1>

                <div className="about-text">
                    <p>
                    Since its inception in 2014, Techerudite scrutinizes the needs of all customers and with the mass experience and talented people, we can create an online presence of your business for any type of industry. With the enormous skills in the web & mobile app development, UI/UX design, digital marketing, we manage the entire creative process and stay available to provide robust solutions to solve complex tech snags.

                    </p>
                </div>
                <div className="text-img">
                    <img src={AboutGroup} alt="" className='aboutgroup' />
                    <div className="about-text1">
                        <p>
                        Our tech mind offers expert, creative, scalable & high-quality solutions that fulfill your all requirements. We act ethically, deliver excellent solutions, respect your contribution. With nurturing trust, we analyze your requirements; put our heads into it to exceed customers’ expectations. We offer best-suited services which fetch mutually profitable experience.
                        </p>
                        <br />
                        <p>
                        With the huge client base all over the world, we build brands and build a long-lasting relationship with customers who reflect our success, struggle & a journey of making “Happy Customers”.Customer satisfaction & success is our biggest achievement. We grow by making people’s dreams alive by creating outstanding websites, mobile apps, and captivating designs. This is what we want to be remembered by making a difference. Be a part of our organization, we warmly welcome challengingprojects & innovation.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default About
