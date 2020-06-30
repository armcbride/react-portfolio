import React from "react";

import "../../style.css";


function Card(props) {
    console.log(props);
    return (
        <div className="d-inline-flex card mb-3 h-25 d-inline-block">
            <div className="img-container">
        <img src= {props.image} className="card-img-top" alt={props.title}/>
        </div>
        <div className="card-body overflow-auto">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text overflow-auto">{props.description}</p>
          <a className="btn btn-primary btn-sm" href={props.repo} rel="noopener">view code</a>
            <a className="btn btn-primary btn-sm" href={props.live} rel="noopener">view live</a>
        </div>
      </div>
    );
  }
  
  export default Card;
  