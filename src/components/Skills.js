import React from 'react';
import "../style.css";
export default function Skills() {
    
        return (
           <>
                <div className="skills d-flex align-items-center text-center">
                    <span className="border-bottom-0">
                               
                     <div className="skill-container d-inline-flex d-inline-block">
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-html-5-100.png")} id="html" alt="html"/> 
                                || 
                                <img className="icon" src={require("../assets/icons/icons8-css3-100.png")} id="css" alt="css"/>
                                 || 
                                <img className="icon" src={require("../assets/icons/icons8-javascript-logo-100.png")} id="javascript" alt="javascript"/>
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-jquery-100.png")} id="jquery" alt="jquery"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-api-100.png")} id="API" alt="API"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-nodejs-100.png")} id="node" alt="node"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-npm-100.png")} id="NPM" alt="NPM"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-mysql-100.png")} id="mySQL" alt="mySQL"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-heroku-100.png")} id="heroku" alt="heroku"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-github-100.png")} id="git" alt="git"/> 
                                ||
                                <img className="icon" src={require("../assets/icons/icons8-react-100.png")} id="react" alt="react"/> 
                                ||

                            </div>


                            </span>
             </div>
                
           </>
        )
    }



