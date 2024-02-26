import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="image" alt="image" src={props.value.ImageUrl} />
      <div className="card-content">
        <p className="card-title">{props.value.Name}</p>
        <p className="card-desc">
          {props.value.ShortDesc.substring(0, 100)}...
        </p>
        <button className="card-button">view</button>
      </div>
    </div>
  );
};

export default Card;
