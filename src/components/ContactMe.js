import React from 'react';
import '../style.css';
export default function Contact() {
    return (
        <>
             
             <div className="contacts d-flex align-items-center text-center">
                    <span className="border-bottom-0">
                               
                     <div className="d-inline-flex d-inline-block">
                    
                    <div className="contact-container">
                    <h5 className="contact-title">Contact Me</h5>
                   <p>I am actively seeking employement for a Front End Dev position. Please contact me for more details.</p>
                    || 
                    <a className="icon" href="https://drive.google.com/file/d/1ZXSMIZcwOWzCj1zDSZHdQ00zrVH5QkJP/view?usp=sharing" target="_blank" rel="noopener noreferrer"> 
                    <img src={require("../assets/icons/icons8-profiles-80.png")} alt="resume"/>
                    </a>
                    || 
                    <a className="icon" href="mailto:armcbride17@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={require("../assets/icons/icons8-gmail-80.png")} alt="email"/>
                    </a>
                    ||
                    <a className="icon" href="https://www.linkedin.com/in/annaruthmcbride/" target="_blank" rel="noopener noreferrer"> 
                    <img src={require("../assets/icons/icons8-linkedin-100.png")} alt="linkedin"/>
                    </a>
                    ||
                    <a className="icon" href="https://www.twitter.com/naruthless" target="_blank" rel="noopener noreferrer"> 
                    <img src={require("../assets/icons/icons8-twitter-squared-100.png")} alt="twitter" />
                    </a>
                    ||
                    <a className="icon" href="https://www.github.com/armcbride" target="_blank" rel="noopener noreferrer"> 
                    <img src={require("../assets/icons/icons8-github-100.png")} alt="github"/>
                    </a>
                    ||

                 </div>
                 </div>
             </span>
             
    </div>
           
        </>
    )
}

