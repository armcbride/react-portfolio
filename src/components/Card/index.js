import React from "react";
import "./style.css";

function Card(props) {
    console.log(props);
    return (
        <div className="card mb-3">
        <img src= {props.image} className="card-img-top" alt="project screenshot"></img>
        <div className="card-body">
          <h5 className="card-title">{props.title} Title</h5>
          <p className="card-text">{props.description} Description</p>
          <a className="btn btn-primary" href={props.repo} rel="noopener">view code</a>
            <a className="btn btn-primary" href={props.live} rel="noopener">view live</a>
        </div>
      </div>
    );
  }
  
  export default Card;
  