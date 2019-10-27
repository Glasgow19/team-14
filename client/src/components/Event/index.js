import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Event = props => {
  const isPurple = props.backgroundColour === "purple";

  let optionalId = "";
  let someColour = "date white";
  if (!isPurple) {
    optionalId = "background-override";
    someColour = "date purple";
  }

  return (
    <div className="event-component" id={optionalId}>
      <img alt="" src={props.imgSrc} />
      <div className="content">
        <h3 className={someColour}>{props.date}</h3>
        <h3 className="title">{props.title}</h3>
        <h3 className="location">{props.location}</h3>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  imgSrc: PropTypes.string,
  backgroundColour: PropTypes.oneOf(["purple", "white"])
};
