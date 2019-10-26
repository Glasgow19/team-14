import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Event = props => {
  const isPurple = props.alt === "purple";

  return (
    <div className="event-component" id={!isPurple ? "background-override" : " "}>
      <div>
        <img alt="" src={props.imgSrc} />
      </div>
      <div>
        <h3 className="date">{props.date}</h3>
        <h2 className="title">{props.title}</h2>
        <h2 className="location">{props.location}</h2>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  location: PropTypes.string,
  imgSrc: PropTypes.string,
  alt: PropTypes.oneOf(["purple", "white"])
};
