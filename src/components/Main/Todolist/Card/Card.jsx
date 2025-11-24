import React from "react";
import './Card.css'

const Card = ({data,remove}) => {
  console.log(data);
  const {title, description, time} = data //data -> datos de nuestro data.json

  //CARD
  return <article className="card">
    <h3>{title || "--" }</h3>
    <p className="description">{description || "--" }</p>
    <p>{time || "--" }</p>
    <br/>
    <button onClick={remove}>Delete</button>
    </article>;
};

export default Card;
