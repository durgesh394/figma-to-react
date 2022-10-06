import React from 'react'

const Contact = () => {
    return (
        <div className='contact-con'>
           <div>
           <div className="contact-heading">
                <p style={{color : "#979FA6" , fontSize : "20px"}}>GET IN TAUCH</p>
                <h2>Contact us</h2>
            </div>
            <div className="formCon">
                <form action="">

                    <div className="nameCon" style={{display : "flex"}}>
                        <div><input type="text" placeholder='Name*'  className='nameInput' /></div>
                        <div><input type="email" placeholder='Email*' className='nameInput' /></div>
                    </div>

                    <div className="formSu">
                        <input type="text" placeholder='Subject*' className='subjectform'/>
                    </div>

                    <div className="formMsg">
                        <textarea placeholder='Message' className='msgform'></textarea>
                    </div>
                    <div className="submittbtnCon">
                        <button className='submitbtn'>submit</button>
                    </div>
                </form>
            </div>

           </div>
        </div>
    )
}

export default Contact