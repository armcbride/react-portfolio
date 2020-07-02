import React from "react";

import "../../style.css";


function Card(props) {
    console.log(props);
    return (
        <div className= "container-fluid d-inline-flex mb-3 h-25 d-inline-block card">
            <div className="img-container">
        <img src= {props.image} className="card-img-top" alt={props.title}/>
        </div>
        <div className="card-body overflow-auto">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text overflow-auto">{props.description}</p>
          <a className="btn btn-link btn-sm" href={props.repo} target="_blank"
          rel="noopener noreferrer">view code</a>
            <a className="btn btn-link btn-sm" href={props.live} target="_blank"
          rel="noopener noreferrer">view live</a>
          
        </div>
      </div>
    );
  }
  
  export default Card;
  