import React from "react";

const Card = (props) => {
  console.log(props.item);
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-photo">
          <img src={props.item.imageUrl} alt="destination"></img>
        </div>
        <div className="card-info">
          <img
            src="./image/Fill_219.png"
            alt="destination pin"
            className="pinpoint"
          />
          <span>{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          <h2>{props.item.title}</h2>
          <p className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default Card;
