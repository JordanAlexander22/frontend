import React from "react";
import { Link } from "react-router-dom";

const ClientClass = props => {
  return (
    <div className="class">
      <div className="class-name">
        <div className="class-prop">{props.clientClass.className}</div>
        </div>
      <div className="class-group">
        <div className="class-prop date">{props.clientClass.date}</div>
        <div className="class-prop time">{props.clientClass.time}</div>
      </div>
      <div className="class-group">
        <div className="class-prop">{props.clientClass.address}</div>
        <div className="class-prop">{props.clientClass.city}</div>
        <div className="class-prop">{props.clientClass.zipcode}</div>
      </div>
      <div className="class-description">
        <div className="class-prop">{props.clientClass.description}</div>
      </div>
      <Link
        to={`https://anywhere-fitness-api.herokuapp.com/api/classes/${props.clientClass.instructorId}`}
      >
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ClientClass;
