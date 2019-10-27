import React, { useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";

const Event = props => {
  let isPurple = true;
  let i = parseInt(props.index);
  if (i % 2 == 0) {
    isPurple = false;
  }

  let optionalId = "";
  let someColour = "date white";
  if (!isPurple) {
    optionalId = "event-override";
    someColour = "date purple";
  }

  return (
    <div className="event-component" id={optionalId}>
      <img alt="" src={props.imgSrc} />
      <div className="content">
        <h3 className={someColour}>{props.date}</h3>
        <h3 className="title">{props.title}</h3>
        <h3 className="location">{props.eventLocation}</h3>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  title: PropTypes.string,
  eventLocation: PropTypes.string,
  date: PropTypes.string,
  imgSrc: PropTypes.string,
  index: PropTypes.number
};
