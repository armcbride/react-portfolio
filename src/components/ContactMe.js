import React from 'react';
import '../style.css';
export default function Contact() {
    return (
        <>
             <div className="row-space"> </div>
                <div className="contact-container text-center">
                    
                <div className="contacts d-flex align-items-center text-center">
                     
                <img className="img-fluid portrait" src={require("../assets/me-resize.jpg")} alt="portfolio" id="port-pic"/>
                <span class="border-bottom-0"></span>
                    
                    <div className="contact-container">
                    <h5 className="contact-title">Contact Me</h5>
                   <p>I am actively seeking employement for a Front End Dev position. Please contact me for more details.</p>
                    || 
                    <a className="contact-img" href="https://drive.google.com/file/d/1ZXSMIZcwOWzCj1zDSZHdQ00zrVH5QkJP/view?usp=sharing"> 
                    <img src={require("../assets/icons/icons8-profiles-80.png")} alt="resume"/>
                    </a>
                    || 
                    <a className="contact-img" href="mailto:armcbride17@gmail.com"> <img src={require("../assets/icons/icons8-gmail-80.png")} alt="email"/>
                    </a>
                    ||
                    <a className="contact-img" href="https://www.linkedin.com/in/annaruthmcbride/"> 
                    <img src={require("../assets/icons/icons8-linkedin-100.png")} alt="linkedin"/>
                    </a>
                    ||
                    <a className="contact-img" href="https://www.twitter.com/naruthless"> 
                    <img src={require("../assets/icons/icons8-twitter-squared-100.png")} alt="twitter"/>
                    </a>
                    ||
                    <a className="contact-img" href="https://www.github.com/armcbride"> 
                    <img src={require("../assets/icons/icons8-github-100.png")} alt="github"/>
                    </a>

                 </div>

             </div>
    </div>
           
        </>
    )
}

