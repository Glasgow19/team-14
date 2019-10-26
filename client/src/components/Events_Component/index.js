import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const AlternatingComponent = props => {
  const isPurple = props.alt === "purple";

  let imgFloat;
  let componentColour = "";
  if (isPurple) {
    imgFloat = "imgLeft";
  } else {
    imgFloat = "imgLeft";
    componentColour = "background-override";
  }

  return (
    <div className="event-component" id={componentColour}>
      <div>
        <img id={imgFloat} alt="" src={props.imgSrc} />
      </div>
      <div>
        <h2 className="title">{props.title}</h2>
        <p className="truncate">{props.text}</p>
      </div>
    </div>
  );
};

export default AlternatingComponent;

AlternatingComponent.propTypes = {
  location: PropTypes.string,
  imgSrc: PropTypes.string,
  imgPosition: "Left",
  alt: PropTypes.oneOf(["purple", "white"])
};
