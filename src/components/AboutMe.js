import React from 'react';
import '../style.css';

export default function AboutMe() {
    return (
        <>
      
            <div className="d-flex justify-content-center about-section" id="about">
            <div className="container text-wrap">
                <div className="d-flex justify-content-center">
                    <div className="text-wrap">
                        <img className="img-fluid portrait" src={require("../assets/me-resize.jpg")} alt="portfolio" id="port-pic"/>
                        <p className="aboutMe">I am a MERN Full Stack developer, from Nashville Tennessee. 2018 Graduate of Middle Tennessee State University, with a Bachelors of Science.</p> 
                        <p className="aboutMe">I enjoy working in Front End develop, especially in frameworks such as Bootstrap, Materialize, and Reactjs.</p>
                        <p className="aboutMe">
                        I have a background in marketing, human resources, and customer service. My main take aways include social media maintenance, onboarding new hires and training them in company protocol, as well as conflict resolution, team leading, and scaling priority.
                        </p>
                       
                    </div>
                </div>
               
            </div>
       
</div>
</>
    )
}



